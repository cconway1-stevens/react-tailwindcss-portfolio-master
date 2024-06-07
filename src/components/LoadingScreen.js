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
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-ping"></div>
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
