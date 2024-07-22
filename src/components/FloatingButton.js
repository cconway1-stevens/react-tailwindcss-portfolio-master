import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

const FloatingButton = () => {
  useEffect(() => {
    const target = document.getElementById("schedule-container");
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ36W2TEVqEukXySJK1deXYK4K7vAoSEIhS5EV6lU137wbZW-OP4zJmlyvrIVxLD0O-0jVuDIJsS?gv=true',
          color: '#039BE5',
          label: 'Book a Meeting',
          target,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return ReactDOM.createPortal(
    <div>
      <Helmet>
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
        <style>
          {`
            #schedule-container {
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 9999;
            }
          `}
        </style>
      </Helmet>
      <div id="schedule-container"></div>
    </div>,
    document.body
  );
};

export default FloatingButton;
