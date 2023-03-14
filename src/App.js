import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Form from "./components/Form";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Documents from "./components/Documents";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      {/* <Projects /> */}
      <Skills />
      {/*<Testimonials />*/}
      <Contact />
      {/* <Documents /> */}
      <Form />
      
    </main>
  );
}
