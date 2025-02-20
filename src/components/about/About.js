import React, { useState, useEffect, useCallback } from 'react';
import PopButton from '../popupbutton/PopButton';
import { logEvent } from '../../gtag'; // Import the GA functions

const WAVE_DURATION = 5000; // 5 seconds

const About = () => {
  const [wave, setWave] = useState(false);

  const startWave = useCallback(() => {
    setWave(true);
    setTimeout(() => setWave(false), WAVE_DURATION);
  }, []);

  useEffect(() => {
    logEvent('page_view', 'Page Load', 'About Page Loaded'); // Log page load event
    startWave();
  }, [startWave]);

  const handleWaveClick = () => {
    logEvent('click', 'Interaction', 'Wave Button Clicked'); // Log wave button click event
    startWave();
  };

  return (
    <section id="about" className="about-section bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 flex flex-col items-start animate-slide-in-left">
          <h1 className="text-3xl md:text-4xl mb-4 font-medium">
            Hi, I'm Cameron{' '}
            <button
              className={`wave${wave ? ' active' : ''}`}
              aria-label="Hand waving emoji"
              onClick={handleWaveClick}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                animation: wave ? 'waveAnimation 2s ease-in-out infinite' : 'none',
              }}
            >
              <span role="img" aria-label="waving hand">👋</span>
            </button>
            <br className="hidden lg:inline-block" />
            Welcome to my portfolio!
          </h1>
          <p className="mb-6 leading-relaxed">
            I'm a software engineer with a passion for solving tough problems and sparking innovation. I thrive on teamwork, collaborating with clients and dev squads to deliver top-notch results. My experience spans academia and professional projects, giving me a versatile skill set and fresh perspective.
          </p>
          <p className="mb-6 leading-relaxed">
            Thanks for stopping by my little corner of the internet. Dive in, explore my work, and let’s make something awesome together. Ready to connect? How about we start with a cup of coffee (or two)? Hit that button and let’s brew up some great ideas!
          </p>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#contact"
              className="button bg-green-500 hover:bg-green-600 rounded-lg py-2 px-6 text-lg transition-transform transform hover:scale-105"
              onClick={() => logEvent('click', 'Navigation', 'Contact Button Clicked')} // Log contact button click event
            >
              Let's Connect <span role="img" aria-label="coffee emoji">☕️</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cameron-conway-07270819b/"
              className="button bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-6 text-lg transition-transform transform hover:scale-105"
              onClick={() => logEvent('click', 'Navigation', 'LinkedIn Button Clicked')} // Log LinkedIn button click event
            >
              LinkedIn <i className="fab fa-linkedin"></i>
            </a>
            <PopButton
              link="https://www.canva.com/design/DAGDPQkDeAU/xDSaDYvQz6Lb61GN1ALc1Q/view?embed"
              buttonText="Resume"
              color="gray"
              extraButtons={[]}
              onClick={() => logEvent('click', 'Navigation', 'Resume Button Clicked')} // Log resume button click event
            />
          </div>
        </div>
        <div className="md:w-1/2 animate-slide-in-right">
          <img
            className="object-cover object-center rounded-lg w-full shadow-lg"
            alt="Coding illustration"
            src="./coding.svg"
            onClick={() => logEvent('click', 'Image', 'Coding Illustration Clicked')} // Log image click event
          />
        </div>
      </div>
    </section>
  );
}

export default About;
