import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { logEvent } from '../../gtag'; // Import the GA functions
import "./PopButton.css"; // You can style the modal here

const PopButton = ({ link, buttonText, extraButtons, color }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    logEvent('click', 'Popup', `${buttonText} Button Clicked`); // Log button click event
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const buttonClass = `inline-flex items-center button bg-${color}-500 hover:bg-${color}-600 text-white border-0 focus:outline-none rounded text-lg py-2 px-6 transition-transform transform hover:scale-105`;

  return (
    <div>
      <button onClick={openModal} className={buttonClass}>
        {buttonText}
      </button>

      {modalIsOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <Helmet>
              <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
              />
              <script
                src="https://assets.calendly.com/assets/external/widget.js"
                type="text/javascript"
                async
              ></script>
            </Helmet>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
            <div className="iframe-container">
              <iframe
                loading="lazy"
                className="iframe-content"
                src={link}
                allowFullScreen
                title="Popup Content"
              ></iframe>
            </div>
            {extraButtons && (
              <div className="extra-buttons">
                {extraButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => {
                      logEvent('click', 'Popup', `${button.text} Extra Button Clicked`);
                      window.open(button.link, "_blank");
                    }}
                    className={`extra-button bg-${color}-500 hover:bg-${color}-600 text-white`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`extra-button bg-${color}-500 hover:bg-${color}-600 text-white`}
            >
              Resume by Cameron Conway
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

PopButton.propTypes = {
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  extraButtons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  color: PropTypes.string, // Add color prop type
};

PopButton.defaultProps = {
  extraButtons: [],
  color: "gray", // Default color
};

export default PopButton;
