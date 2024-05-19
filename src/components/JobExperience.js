// src/components/JobExperience.js

import React, { useState, useRef, useEffect } from "react";
import { jobExperiences } from "../data";

export default function JobExperience() {
  const [contextMenu, setContextMenu] = useState(null);
  const [showSign, setShowSign] = useState(false);
  const [highlightSection, setHighlightSection] = useState(false);
  const [speechSynthesisInstance, setSpeechSynthesisInstance] = useState(null);
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
        <div className="flex flex-wrap -m-4">
          {jobExperiences.map((job, index) => (
            <div
              key={index}
              className="p-4 md:w-1/2 w-full"
              onContextMenu={(e) =>
                handleContextMenu(
                  e,
                  `${job.title} at ${job.company}. Responsibilities: ${job.responsibilities.join(
                    ". "
                  )}`
                )
              }
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg transform transition duration-500 hover:scale-105 hover:bg-gray-700 shadow-lg">
                <h2 className="text-2xl font-medium text-white mb-2">{job.title}</h2>
                <p className="text-gray-500">
                  {job.company} - {job.location}
                </p>
                <p className="text-gray-400 mb-4">{job.duration}</p>
                <ul className="list-disc list-inside text-gray-400 ml-4">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-2">{responsibility}</li>
                  ))}
                </ul>
              </div>
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
            >
              Read Aloud
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={stopReading}
            >
              Stop Reading
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={handleClose}
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



// export const jobExperiences = [
//   {
//     title: "SYSTEMS RESEARCHER",
//     company: "New Observing Strategies Testbed (NOS-T) Project for Collective Design Lab at Stevens via NASA/D.O.D",
//     location: "Hoboken, NJ",
//     duration: "May 2023 - September 2023",
//     responsibilities: [
//       "Crafted detailed consumer interviews with 20 users using structured questionnaires to extract critical user needs, pain points, and usage patterns, directly influencing product direction and design improvements.",
//       "Authored and optimized requirement documents that translated complex user research findings into clear, actionable instructions for engineers, contributing to a 29% increase in project efficiency.",
//       "Facilitated communication between end-users and engineering teams, enhancing project collaboration and reducing miscommunications by streamlining workflow processes.",
//       "Designed and refined high-fidelity Figma models based on iterative user feedback, which increased client satisfaction by 20% and accelerated project approval from initial concept stages.",
//     ],
//   },
//   {
//     title: "JUNIOR SOFTWARE ENGINEER",
//     company: "F&S Digital Agency",
//     location: "Ventnor, NJ",
//     duration: "May 2022 - January 2024",
//     responsibilities: [
//       "Conducted over 30 consumer interviews to identify user needs, leading to the development of detailed requirement documentation that guided engineering design and implementation.",
//       "Served as the key liaison for 5 major projects, facilitating effective communication between clients and a development team of 10 members, ensuring requirements alignment and project success.",
//       "Developed over 20 detailed Figma models for UI/UX projects, enhancing client understanding and approval rates by 30% through interactive presentations and requirement validations.",
//       "Engineered and prototyped an innovative software solution, leading to a successful sale under NDA; project resulted in a 20% performance improvement for the client’s operations.",
//     ],
//   },
//   {
//     title: "SOFTWARE AND TECHNICAL ENGINEERING INTERN",
//     company: "US Instruments INC",
//     location: "Lanoka Harbor, NJ",
//     duration: "April 2021 - September 2021",
//     responsibilities: [
//       "Enhanced the UI/UX efficiency of Parks Flow Lab® by 11.5%, following extensive user and stakeholder feedback.",
//       "Integrated new protocols into the sales system, reducing data entry errors by 8%.",
//       "Improved hardware-software integration by troubleshooting and repairing critical system components, enhancing system reliability.",
//     ],
//   },
//   {
//     title: "RESEARCH ASSISTANT",
//     company: "Stevens Department of Civil, Ocean, and Environmental Engineering",
//     location: "Hoboken, NJ",
//     duration: "November 2020 – May 2021",
//     responsibilities: [
//       "Spearheaded a Department of Defense-funded initiative to innovate sustainable and resilient wastewater treatment technologies, achieving significant advancements in environmental engineering.",
//       "Designed and conducted controlled experiments on nutrient-laden synthetic wastewater, employing meticulous attention to procedural detail which resulted in improved process efficiency and accuracy.",
//       "Mastered technical proficiency in calibrating and operating sophisticated laboratory instruments, including anion and cation ion chromatography (IC) and high-performance liquid chromatography (HPLC), to support high-stakes research projects.",
//       "Analyzed experimental data to track water treatment parameters such as pH, nitrate levels, and temperature, identifying key transformations that facilitate algal growth and energy production.",
//       "Operated a variety of specialized lab equipment, such as cation and anion analyzers, to execute critical research tasks and contribute to the development of groundbreaking wastewater treatment solutions.",
//     ],
//   },
// ];