import React from "react";
import PropTypes from "prop-types";

const LoadingScreen = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-500 rounded-full w-16 h-16 animate-ping"></div>
          <div className="absolute inset-0 border-4 border-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default LoadingScreen;
