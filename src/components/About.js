import React, { useState, useEffect } from "react";
import "./about.css";
import PopButton from "./PopButton"; // Adjust the path as needed

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

  const extraButtons = [
    {
      link: "https://www.canva.com/design/DAGDPQkDeAU/zSt_96-u3-e4tyAgoJJWAA/view?utm_content=DAGDPQkDeAU&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      text: "Canva Link",
    },
  ];

  return (
    <section id="about" className="about-section bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl mb-4 font-medium">
            Hi, I'm Cameron{" "}
            <span
              className={`wave${wave ? " active" : ""}`}
              role="img"
              aria-label="Hand waving emoji"
              onMouseEnter={handleWave}
            >
              👋
            </span>
            <br className="hidden lg:inline-block" />
            Welcome to my portfolio!
          </h1>
          <p className="mb-6 leading-relaxed">
            I'm a software engineer with a passion for solving tough problems
            and sparking innovation. I thrive on teamwork, collaborating with
            clients and dev squads to deliver top-notch results. My experience
            spans academia and professional projects, giving me a versatile
            skill set and fresh perspective.
          </p>

          <p className="mb-6 leading-relaxed">
            Thanks for stopping by my little corner of the internet. Dive in,
            explore my work, and let’s make something awesome together. Ready to
            connect? How about we start with a cup of coffee (or two)? Hit that
            button and let’s brew up some great ideas!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#contact"
              className="button bg-green-500 hover:bg-green-600 rounded-lg py-2 px-6 text-lg"
            >
              Let's Connect ☕️
            </a>
            <a
              href="https://www.linkedin.com/in/cameron-conway-07270819b/"
              className="button bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-6 text-lg"
            >
              LinkedIn <i className="fab fa-linkedin"></i>
            </a>
            <PopButton
              link="https://www.canva.com/design/DAGDPQkDeAU/xDSaDYvQz6Lb61GN1ALc1Q/view?embed"
              buttonText="Resume"
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
