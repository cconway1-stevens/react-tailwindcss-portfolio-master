import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 md:p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0 md:mr-auto"
        >
          Cameron-Conway.js
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto">
          <a href="#projects" className="mr-3 md:mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-3 md:mr-5 hover:text-white">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-3 md:mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-4 md:py-1 md:px-3 focus:outline-none hover:bg-gray-700 rounded text-sm md:text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
