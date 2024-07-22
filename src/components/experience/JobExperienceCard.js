import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const JobExperienceCard = ({
  job,
  handleContextMenu,
  isVisible,
  expandAll,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(expandAll);
  }, [expandAll]);

  const toggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div
      className={`p-4 md:w-1/2 w-full ${!isVisible ? "hidden" : ""}`}
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
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        tabIndex="0"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium text-white mb-2">{job.title}</h2>
          <svg
            className={`w-6 h-6 text-white transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
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
          {job.endDate ? new Date(job.endDate).toLocaleDateString() : "Present"}
        </p>
        {isExpanded && (
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
  );
};

JobExperienceCard.propTypes = {
  job: PropTypes.object.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  expandAll: PropTypes.bool.isRequired,
};

export default JobExperienceCard;
