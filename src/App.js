import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MyCal from './components/MyCal';
import JobExperience from './components/JobExperience';
import LoadingScreen from './components/LoadingScreen';
import { logPageView } from './gtag'; // Import the GA functions

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    logPageView();

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowLoadingScreen(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {showLoadingScreen && <LoadingScreen isVisible={isLoading} />}
      <main className={`text-gray-400 bg-gray-900 body-font ${isLoading ? 'hidden' : 'block'}`}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Navbar />
        <section className="py-12 px-4">
          <About />
        </section>
        <section className="py-12 px-4">
          <Projects />
        </section>
        <section className="py-12 px-4">
          <Skills />
        </section>
        <section className="py-12 px-4">
          <JobExperience />
        </section>
        <section className="py-12 px-4">
          <Contact />
        </section>
        <MyCal />
      </main>
    </React.Fragment>
  );
}
