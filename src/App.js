import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Documents = lazy(() => import("./components/Documents"));
const MyCal = lazy(() => import("./components/MyCal"));

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        {/*<Testimonials />*/}
        <MyCal />
        <Contact />
        {/* <Documents /> */}
      </Suspense>
    </main>
  );
}
