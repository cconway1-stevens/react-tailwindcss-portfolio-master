import React, { useState, useEffect } from "react";
import PopButton from "./PopButton"; // Adjust the path as needed
import { aboutContent, extraButtons } from "../data"; // Importing from data.js

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
    <section id="about" className="about-section bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl mb-4 font-medium">
            {introduction.greeting}{" "}
            <span
              className={`wave${wave ? " active" : ""}`}
              role="img"
              aria-label="Hand waving emoji"
              onMouseEnter={handleWave}
            >
              {introduction.waveText}
            </span>
            <br className="hidden lg:inline-block" />
            {introduction.tagline}
          </h1>
          <p className="mb-6 leading-relaxed">
            {introduction.description1}
          </p>
          <p className="mb-6 leading-relaxed">
            {introduction.description2}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            {buttons.slice(0, 2).map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={button.classes}
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
        <div className="md:w-1/2">
          <div>
            <img
              className="object-cover object-center rounded-lg w-full"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
