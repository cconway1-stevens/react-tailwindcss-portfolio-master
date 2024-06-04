import React, { useState, useEffect } from "react";
import { aboutContent, extraButtons } from "../data"; // Importing from data.js
import "./about.css"; // Make sure this path is correct
import PopButton from "./PopButton";

export default function About() {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWave(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [wave]);

  const handleWave = () => {
    setWave(true);
  };

  const { introduction, buttons } = aboutContent;

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>
          {introduction.greeting}{" "}
          <span
            className={`wave${wave ? " active" : ""}`}
            role="img"
            aria-label="Hand waving emoji"
            onMouseEnter={handleWave}
          >
            {introduction.waveText}
          </span>
          <br />
          {introduction.tagline}
        </h1>
        <p>{introduction.description1}</p>
        <p>{introduction.description2}</p>
        <div className="buttons">
          {buttons.slice(0, 2).map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`${button.classes} button bg-primary`}
            >
              {button.text} {button.iconClass && <i className={button.iconClass}></i>}
            </a>
          ))}
          <PopButton
            link={buttons[2].link}
            buttonText={buttons[2].text}
            extraButtons={extraButtons}
          />
        </div>
      </div>
      <div className="img-container">
        <img
          className="object-cover object-center rounded-lg"
          alt="hero"
          src="./coding.svg"
        />
      </div>
    </section>
  );
}
