import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { qualifications } from "../data";

export default function Qualifications() {
  return (
    <section id="qualifications">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Qualifications
        </h1>
        <div className="flex flex-wrap m-4">
          {qualifications.Education.map((qualification, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{qualification.Degree}</p>
                <div className="flex flex-wrap mb-4">
                  <p className="text-gray-500 text-sm mr-4">
                    Institution: {qualification.Institution}
                  </p>
                  <p className="text-gray-500 text-sm mr-4">
                    Date awarded: {qualification.Date}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {qualifications.Awards.map((qualification, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{qualification.Title}</p>
                <div className="flex flex-wrap mb-4">
                  <p className="text-gray-500 text-sm mr-4">
                    Issued by: {qualification.Issuer}
                  </p>
                  <p className="text-gray-500 text-sm mr-4">
                    Date awarded: {qualification["Date Awarded"]}
                  </p>
                  <a
                    href={qualification.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm"
                  >
                    View credential
                  </a>
                </div>
                <div className="flex flex-wrap">
                  {qualification["Shout outs"].map((shoutout, index) => (
                    <span
                      className="bg-gray-600 text-white font-medium text-sm px-2 py-1 rounded-full mr-2 mb-2"
                      key={index}
                    >
                      {shoutout}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {qualifications.Activities.map((qualification, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{qualification.Name}</p>
                <p className="leading-relaxed mb-6">{qualification.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
