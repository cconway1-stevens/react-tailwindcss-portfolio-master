import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import ChatBot from 'react-simple-chatbot';

// const steps = [
//   {
//       id: '0',
//       message: 'Hey Geek!',
//       end: true
//   }
// ];

export default function App() {
  return (
    
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      {/* <Projects /> */}
      <Skills />
      {/*<Testimonials />*/}
      <Contact />
      <chatbot />
      {/* <ChatBot steps={steps} /> */}
    </main>
      
  );
}


