import React, { useState, useRef, useEffect } from "react";
import { jobExperiences } from "../../data";
import JobExperienceReader from "./JobExperienceReader";
import JobExperienceCard from "./JobExperienceCard";
import { logEvent } from '../../gtag'; // Import the GA functions

export default function JobExperienceList() {
  const [contextMenu, setContextMenu] = useState(null);
  const [showSign, setShowSign] = useState(false);
  const [highlightSection, setHighlightSection] = useState(false);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobExperiences);
  const [allCardsVisible, setAllCardsVisible] = useState(true);
  const [expandAllCards, setExpandAllCards] = useState(false);
  const selectedTextRef = useRef("");

  useEffect(() => {
    if (!localStorage.getItem("signShown")) {
      setShowSign(true);
      setTimeout(() => {
        setShowSign(false);
        setHighlightSection(true);
        setTimeout(() => setHighlightSection(false), 3000);
      }, 3000);
      localStorage.setItem("signShown", "true");
    }
  }, []);

  const handleContextMenu = (event, text) => {
    event.preventDefault();
    selectedTextRef.current = text;
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    logEvent('filter', 'Job Experience', `Filter Applied: ${newFilter}`); // Log filter change event
    setFilter(newFilter);
    applyFilter(newFilter, searchTerm);
  };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    logEvent('search', 'Job Experience', `Search Term: ${newSearchTerm}`); // Log search term change event
    setSearchTerm(newSearchTerm);
    applyFilter(filter, newSearchTerm);
  };

  const applyFilter = (filter, searchTerm) => {
    let filtered = jobExperiences;

    if (filter) {
      filtered = filtered.filter(
        (job) => job.company.includes(filter) || job.location.includes(filter)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.responsibilities.some((res) =>
            res.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredJobs(filtered);
  };

  const sortedJobExperiences = filteredJobs.sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date();
    const dateB = b.endDate ? new Date(b.endDate) : new Date();
    return dateB - dateA || new Date(b.startDate) - new Date(a.startDate);
  });

  const toggleAllCardsVisibility = () => {
    logEvent('toggle', 'Job Experience', `All Cards Visibility Toggled: ${!allCardsVisible}`); // Log toggle all cards visibility event
    setAllCardsVisible(!allCardsVisible);
  };

  const toggleExpandAllCards = () => {
    logEvent('toggle', 'Job Experience', `Expand All Cards Toggled: ${!expandAllCards}`); // Log toggle expand all cards event
    setExpandAllCards(!expandAllCards);
  };

  return (
    <section
      id="job-experience"
      className={`text-gray-400 bg-gray-900 body-font py-10 relative ${
        highlightSection ? "animate-glow" : ""
      }`}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work Experience
          </h1>
        </div>
        <div className="mb-6">
          <div className="bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap">
              <div className="mr-4 mb-2">
                <label htmlFor="filter" className="text-white mr-2">
                  Filter by:
                </label>
                <input
                  id="filter"
                  type="text"
                  value={filter}
                  onChange={handleFilterChange}
                  className="p-2 rounded bg-gray-800 text-white"
                  placeholder="Company or Location"
                />
              </div>
              <div>
                <label htmlFor="search" className="text-white mr-2">
                  Search:
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="p-2 rounded bg-gray-800 text-white"
                  placeholder="Search jobs..."
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={toggleAllCardsVisibility}
                className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600"
              >
                {allCardsVisible ? "Hide All" : "Show All"}
              </button>
              <button
                onClick={toggleExpandAllCards}
                className="text-white bg-green-500 p-2 rounded hover:bg-green-600"
              >
                {expandAllCards ? "Collapse All" : "Expand All"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {sortedJobExperiences.map((job) => (
            <JobExperienceCard
              key={job.id}
              job={job}
              handleContextMenu={handleContextMenu}
              isVisible={allCardsVisible}
              expandAll={expandAllCards}
            />
          ))}
        </div>
      </div>
      <JobExperienceReader
        contextMenu={contextMenu}
        selectedTextRef={selectedTextRef}
        startReading={() => {
          logEvent('contextMenu', 'Job Experience', `Reading Started: ${selectedTextRef.current}`); // Log start reading event
          const speech = new SpeechSynthesisUtterance(
            selectedTextRef.current
          );
          window.speechSynthesis.speak(speech);
          handleClose();
        }}
        stopReading={() => {
          logEvent('contextMenu', 'Job Experience', `Reading Stopped`); // Log stop reading event
          window.speechSynthesis.cancel();
          handleClose();
        }}
        handleClose={handleClose}
      />
      {showSign && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white rounded shadow-lg p-4 animate-fade-out">
          <p>Right-click on a job to access additional options.</p>
        </div>
      )}
    </section>
  );
}
