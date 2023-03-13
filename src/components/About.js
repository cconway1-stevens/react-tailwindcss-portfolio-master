import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Cameron 👋
            <br className="hidden lg:inline-block" />
            Welcome to my portfolio!
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a software engineer with a background in project management, 
          UI/UX design, and software development. I'm passionate about using 
          technology to tackle complex problems and drive innovation. I thrive
          in collaborative environments, working closely with clients and development
          teams to deliver high-quality results. With experience in both academic
          and professional settings, I bring a unique perspective and diverse skill
          set to every project. Thank you for visiting my portfolio, 
          and I look forward to showcasing my work to you.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Lets Connect ☕️
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
            //public/HerofromZero.png
          />
        </div>
      </div>
    </section>
  );
}
