import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const JobExperienceReader = ({
  contextMenu,
  selectedTextRef,
  startReading,
  stopReading,
  handleClose,
}) => {
  const startReadingHandler = () => {
    const speech = new SpeechSynthesisUtterance(selectedTextRef.current);
    window.speechSynthesis.speak(speech);
    handleClose();
  };

  const stopReadingHandler = () => {
    window.speechSynthesis.cancel();
    handleClose();
  };

  return (
    contextMenu && (
      <div
        className="fixed z-50 bg-gray-800 text-white rounded shadow-lg"
        style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
      >
        <ul className="py-1">
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={startReadingHandler}
            role="menuitem"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                startReadingHandler();
              }
            }}
          >
            Read Aloud
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={stopReadingHandler}
            role="menuitem"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                stopReadingHandler();
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
    )
  );
};

// PropTypes for type checking
JobExperienceReader.propTypes = {
  contextMenu: PropTypes.object,
  selectedTextRef: PropTypes.object,
  startReading: PropTypes.func,
  stopReading: PropTypes.func,
  handleClose: PropTypes.func,
};

export default JobExperienceReader;
