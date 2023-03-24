import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MyCal from "./components/MyCal";
// import Testimonials from "./components/Testimonials";
// import Documents from "./components/Documents";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Testimonials />*/}
      <MyCal />
      <Contact />
      {/* <Documents /> */}
    </main>
  );
}
