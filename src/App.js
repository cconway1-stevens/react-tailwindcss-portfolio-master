import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MyCal from "./components/MyCal";
import JobExperience from "./components/JobExperience";  // Import JobExperience

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
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
  );
}