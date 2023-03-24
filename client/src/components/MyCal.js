import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MyCal = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    const fullText = "Book a Meeting";
    const intervalId = setInterval(() => {
      currentText += fullText[currentIndex];
      setText(currentText);
      currentIndex++;
      if (currentText.length === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const Calendly = window.Calendly;
    if (Calendly) {
      Calendly.initBadgeWidget({
        url: "https://calendly.com/cconway1/r-a-1-1-request",
        text: text,
        color: "#5FB682",
        textColor: "#ffffff",
        branding: undefined,
      });
    }
  }, [text]);

  return (
    <div>
      <Helmet>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Helmet>
      <div id="schedule-container"></div>
    </div>
  );
};

export default MyCal;
