import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Contact from './components/Contact';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import MyCal from './components/mycal/MyCal';
import JobExperience from './components/experience/JobExperience';
import { logPageView } from './gtag'; // Import the GA functions

export default function App() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <React.Fragment>
      <main className="text-gray-400 bg-gray-900 body-font block">
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