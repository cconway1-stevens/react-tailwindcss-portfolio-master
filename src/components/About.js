import React, { useState, useEffect } from "react";
import "./about.css";

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

  return (
    <section id="about" className="about-section">
      <div className="container mx-auto flex px-6 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center animate-slide-in-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
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

          <div className="button-container animate-slide-in-left">
            <a
              href="#contact"
              className="inline-flex button text-white bg-green-500 border-0 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Let's Connect ☕️
            </a>
            <a
              href="https://www.linkedin.com/in/cameron-conway-07270819b/"
              className="inline-flex button text-gray-400 bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              LinkedIn <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.canva.com/design/DAGDPQkDeAU/zSt_96-u3-e4tyAgoJJWAA/view?utm_content=DAGDPQkDeAU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              className="inline-flex button text-gray-400 bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Resume <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:h-full md:w-1/2 w-5/6 animate-slide-in-right">
          <div>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
