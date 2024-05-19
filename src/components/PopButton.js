import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './PopButton.css'; // You can style the modal here

const PopButton = ({ link, buttonText, extraButtons }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className="inline-flex button text-gray-400 bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        {buttonText}
      </button>

      {modalIsOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <Helmet>
              <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
              <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            </Helmet>
            <button onClick={closeModal} className="close-button">Close</button>
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
                {extraButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(button.link, '_blank')}
                    className="extra-button"
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
            <a href={link} target="_blank" rel="noopener noreferrer">Resume</a> by Cameron Conway
          </div>
        </div>
      )}
    </div>
  );
};

export default PopButton;