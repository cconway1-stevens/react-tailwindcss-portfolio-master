import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { skills } from "../data";
import "./Skills.css";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleTagClick = (skillName) => {
    setActiveSkill(skillName);
    setTimeout(() => {
      setActiveSkill(null);
    }, 3000); // Timer for 3 seconds
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-green-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Now That's What I Call a Lot of Skills! 😎
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-2 sm:w-1/2 w-full skill-card ${
                activeSkill === skill.name ? "box-glow" : ""
              }`}
              onMouseEnter={() =>
                document
                  .querySelectorAll(".skill-card")
                  .forEach((el) => el.classList.add("hovered"))
              }
              onMouseLeave={() =>
                document
                  .querySelectorAll(".skill-card")
                  .forEach((el) => el.classList.remove("hovered"))
              }
            >
              <div className="bg-gray-800 rounded-lg flex p-4 h-full items-center transition-all transform hover:scale-105">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <div>
                  <h2 className="text-white text-lg font-medium mb-2">
                    {skill.name}
                  </h2>
                  <div className="flex flex-wrap">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-tag bg-gray-700 text-gray-400 mr-2 mb-2 px-2 py-1 rounded-full text-sm transition-all transform hover:scale-105 hover:text-glow"
                        onClick={() => handleTagClick(skill.name)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
