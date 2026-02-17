import React, { Fragment } from "react";
import { experience } from "@/context/ExpList";
import { SkillTools } from "@/context/SkillsTools";

export const Experience = () => {
  const ExpCard = ({ date, heading, body, company }) => {
    return (
      <div className="group relative cursor-default p-6 flex flex-col space-y-2 rounded-lg border border-transparent bg-[#112240] shadow-xl shadow-black/30 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-1">
          <p className="font-mono text-accent text-xs md:text-sm">{company}</p>
          <p className="font-mono text-secondary text-xs">{date}</p>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-heading group-hover:text-accent transition-colors duration-300">
          {heading}
        </h3>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          {body}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-10 w-full max-w-5xl mx-auto px-2 md:px-0 my-10 relative">
      
      {/* Central Line for Desktop */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden md:block transform -translate-x-1/2"></div>
      
      {/* Mobile Line (Left side) */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-transparent md:hidden"></div>

      {experience.map((exp, key) => {
        return (
          <div key={key} className="relative w-full">
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-[#0a192f] transform -translate-x-1/2 mt-6 z-10 transition-all duration-300 group-hover:bg-accent"></div>

            <div className={`flex flex-col md:flex-row items-start w-full ${key % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              {/* Empty Space for Alignment */}
              <div className="hidden md:block w-[50%]"></div>

              {/* Content Card */}
              <div className="w-full md:w-[50%] pl-12 md:pl-0 md:px-8">
                 <ExpCard
                  date={exp.date}
                  heading={exp.heading}
                  body={exp.body}
                  company={exp.company}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Education = () => {
  return (
    <div className="space-y-8 px-4 md:px-10 py-10 w-full max-w-6xl mx-auto">
      <div className="h-10 flex items-center justify-center mb-8">
        <h1 className="text-accent text-3xl md:text-4xl font-bold w-fit">
          Education
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div className="cursor-default group bg-[#112240] flex flex-col justify-between space-y-4 rounded-lg p-6 shadow-xl shadow-black/30 border border-transparent hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
           <div>
            <h3 className="text-heading text-xl font-bold group-hover:text-accent transition-colors duration-300">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-accent font-mono text-sm mt-1">Gordon College</p>
           </div>
           <p className="text-secondary text-sm font-mono text-right">2021 - 2025</p>
        </div>

        <div className="cursor-default group bg-[#112240] flex flex-col justify-between space-y-4 rounded-lg p-6 shadow-xl shadow-black/30 border border-transparent hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
           <div>
            <h3 className="text-heading text-xl font-bold group-hover:text-accent transition-colors duration-300">
              Arts and Design - Performing Arts (Dance)
            </h3>
            <p className="text-accent font-mono text-sm mt-1">
              Calbayog Arts and Design School of Eastern Visayas
            </p>
           </div>
           <p className="text-secondary text-sm font-mono text-right">2019 - 2021</p>
        </div>
      </div>
    </div>
  );
};

export const SkillsTools = () => {
  return (
    <div className="space-y-8 w-full max-w-6xl mx-auto px-4 md:px-0">
        <div className="h-10 flex items-center justify-center mb-8">
          <h1 className="text-accent text-3xl md:text-4xl font-bold w-fit">
            Skills and Tools
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SkillTools.map((skill, key) => {
            return (
              <div key={key} className="flex flex-col items-center justify-center p-4 gap-3 cursor-default bg-[#112240] rounded-lg shadow-lg border border-transparent hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group">
                <img src={skill.icon} alt={skill.name} className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-secondary font-mono text-sm text-center group-hover:text-accent transition-colors duration-300">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
  )
}
