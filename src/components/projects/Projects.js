import React from 'react';
import CodeIcon from './CodeIcon'; // Adjust the path if needed
import { projects } from '../../data'; // Import the projects data

const ProjectCard = React.memo(({ project }) => (
  <a
    href={project.link}
    key={project.image}
    className="sm:w-1/2 w-full p-4 flex justify-center"
  >
    <div className="flex relative">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover"
        src={project.image}
        loading="lazy"
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-end">
        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
          {project.subtitle}
        </h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {project.title}
        </h1>
        <p className="leading-relaxed">{project.description}</p>
      </div>
    </div>
  </a>
));

const Projects = React.memo(() => (
  <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40 flex flex-col items-center">
      <div className="flex flex-col w-full mb-20 items-center">
        <div className="flex justify-center items-center w-10 h-10 mb-4">
          <CodeIcon />
        </div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Apps I've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are a few projects I've worked on recently. Want to see more?
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.image} />
        ))}
      </div>
    </div>
  </section>
));

export default Projects;