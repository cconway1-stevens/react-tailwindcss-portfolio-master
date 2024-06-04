import React, { useState, useRef, useEffect } from "react";
import { jobExperiences } from "../data";

export default function JobExperience() {
  const [contextMenu, setContextMenu] = useState(null);
  const [showSign, setShowSign] = useState(false);
  const [highlightSection, setHighlightSection] = useState(false);
  const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState(null);
  const [expandedJobs, setExpandedJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobExperiences);

  const selectedTextRef = useRef("");

  useEffect(() => {
    if (!localStorage.getItem("signShown")) {
      setShowSign(true);
      setTimeout(() => {
        setShowSign(false);
        setHighlightSection(true);
        setTimeout(() => setHighlightSection(false), 3000);
      }, 3000); // Show the sign for 3 seconds
      localStorage.setItem("signShown", "true");
    }
  }, []);

  const startReading = () => {
    if (speechSynthesisInstance) {
      window.speechSynthesis.cancel();
    }
    const speech = new SpeechSynthesisUtterance(selectedTextRef.current);
    setSpeechSynthesisInstance(speech);
    window.speechSynthesis.speak(speech);
    setContextMenu(null); // Close the context menu after reading starts
  };

  const stopReading = () => {
    if (speechSynthesisInstance) {
      window.speechSynthesis.cancel();
      setSpeechSynthesisInstance(null);
    }
  };

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

  const toggleExpand = (id) => {
    if (expandedJobs.includes(id)) {
      setExpandedJobs(expandedJobs.filter((i) => i !== id));
    } else {
      setExpandedJobs([...expandedJobs, id]);
    }
  };

  const toggleAll = (expand) => {
    if (expand) {
      setExpandedJobs(jobExperiences.map((job) => job.id));
    } else {
      setExpandedJobs([]);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    applyFilter(e.target.value, searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    applyFilter(filter, e.target.value);
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

  // Sort job experiences by startDate and endDate
  const sortedJobExperiences = filteredJobs.sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date();
    const dateB = b.endDate ? new Date(b.endDate) : new Date();
    return dateB - dateA || new Date(b.startDate) - new Date(a.startDate);
  });

  return (
    <section
      id="job-experience"
      className={`text-gray-400 bg-gray-900 body-font py-10 relative ${highlightSection ? "animate-glow" : ""}`}
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
            <div>
              <button
                onClick={() => toggleAll(true)}
                className="p-2 rounded bg-blue-600 text-white mr-2"
              >
                Open All
              </button>
              <button
                onClick={() => toggleAll(false)}
                className="p-2 rounded bg-red-600 text-white"
              >
                Close All
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {sortedJobExperiences.map((job) => (
            <div
              key={job.id}
              className="p-4 md:w-1/2 w-full"
              onContextMenu={(e) =>
                handleContextMenu(
                  e,
                  `${job.title} at ${
                    job.company
                  }. Responsibilities: ${job.responsibilities.join(". ")}`
                )
              }
            >
              <button
                className="h-full w-full text-left bg-gray-800 bg-opacity-40 p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:bg-gray-700 shadow-lg"
                onClick={() => toggleExpand(job.id)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-medium text-white mb-2">
                    {job.title}
                  </h2>
                  <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      expandedJobs.includes(job.id) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-500">
                  {job.company} - {job.location}
                </p>
                <p className="text-gray-400 mb-4">
                  {new Date(job.startDate).toLocaleDateString()} -{" "}
                  {job.endDate
                    ? new Date(job.endDate).toLocaleDateString()
                    : "Present"}
                </p>
                {expandedJobs.includes(job.id) && (
                  <ul className="list-disc list-inside text-gray-400 ml-4">
                    {job.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="mb-2">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      {contextMenu && (
        <div
          className="fixed z-50 bg-gray-800 text-white rounded shadow-lg"
          style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
        >
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={startReading}
              role="menuitem"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  startReading();
                }
              }}
            >
              Read Aloud
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={stopReading}
              role="menuitem"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  stopReading();
                }
              }}
            >
              Stop Reading
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={handleClose}
              role="menuitem"
              tabIndex="0"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClose();
                }
              }}
            >
              Cancel
            </li>
          </ul>
        </div>
      )}
      {showSign && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white rounded shadow-lg p-4 animate-fade-out">
          <p>Right-click on a job to access additional options.</p>
        </div>
      )}
    </section>
  );
}
