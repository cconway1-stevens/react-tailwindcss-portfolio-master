import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Cameron.
            <br className="hidden lg:inline-block" />Crafting innovative solutions for complex challenges..
          </h1>
          <p className="mb-8 leading-relaxed">
          Welcome to my portfolio! I'm a software engineer by major, and I have a firm foundation 
          in project management, UI/UX design, and software development. I'm passionate about using 
          technology to solve challenging issues and spur creativity,
           and I do best in collaborative settings where I can closely 
           collaborate with customers and development teams to produce 
           top-notch outcomes. I bring a distinctive viewpoint and a 
           wide variety of talents to any project I take on because of 
           my experience in both academic and professional settings. 
           I appreciate you taking the time to browse at my portfolio,
            and I'm excited to show you my work.
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
          />
        </div>
      </div>
    </section>
  );
}
