import React, { Fragment } from "react";
import { experience } from "@/context/ExpList";
import { SkillTools } from "@/context/SkillsTools";

export const Experience = () => {
  const Circle = () => {
    return <div className="rounded-full w-4 h-4 bg-accent mx-auto"></div>;
  };

  const Pillar = () => {
    return <div className="rounded-t-full w-2 h-full bg-accent mx-auto"></div>;
  };

  const ExpCard = ({ date, heading, body, company }) => {
    return (
      <div className="group cursor-default p-4 flex flex-col space-y-1 rounded border-2 border-background-primary hover:border-transparent hover:bg-white/5 hover:backdrop-blur-sm transition-all duration-75 ease-in-out">
        <p className="text-secondary text-center">
          {date}
        </p>
        <p className="text-xl font-semibold text-heading text-center group-hover:text-accent transition-colors duration-300">
          {heading}
        </p>
        <p className="text-center text-heading">
          {company}
        </p>
        <p className="text-primary text-sm text-center ">
          {body}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
      <Circle />

      {experience.map((exp, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 items-center mx-auto">
              {exp.direction === "right" ? (
                <ExpCard
                  date={exp.date}
                  heading={exp.heading}
                  body={exp.body}
                  company={exp.company}
                />
              ) : (
                <div></div>
              )}

              <Pillar />

              {exp.direction === "left" ? (
                <ExpCard
                  date={exp.date}
                  heading={exp.heading}
                  body={exp.body}
                  company={exp.company}
                />
              ) : (
                <div></div>
              )}
            </div>
            {key < experience.length - 1 && <Circle />}
          </Fragment>
        );
      })}

      <Circle />
    </div>
  );
};

export const Education = () => {
  return (
    <div className="bg-background-tertiary space-y-8 px-10 py-10">
      <div className="h-10 flex items-center justify-center">
        <h1 className="text-accent text-4xl font-bold w-fit border-b-2 border-accent">
          Education
        </h1>
      </div>

      <div className="flex flex-wrap w-full gap-2 items-center justify-around">
        <div className="flex-1 min-w-[280px] max-w-[500px] cursor-default group hover:backdrop-blur-xs hover:bg-white/5 flex flex-col space-y-2 rounded p-4 hover:border-transparent border-2 border-background-primary ease-in-out duration-75 transition-all">
          <span className="text-heading text-xl font-semibold group-hover:text-accent ease-in-out duration-75 transition">
            Bachelor of Science in Computer Science
          </span>
          <span className="text-secondary -mt-2">2021 - Present</span>
          <span className="text-heading text-base">Gordon College</span>
        </div>
        <div className="flex-1 min-w-[280px] max-w-[500px] cursor-default group hover:backdrop-blur-xs hover:bg-white/5 flex flex-col space-y-2 rounded p-4 hover:border-transparent border-2 border-background-primary ease-in-out duration-75 transition-all">
          <span className="text-heading text-lg sm:text-lg lg:text-xl font-semibold group-hover:text-accent ease-in-out duration-75 transition">
            Arts and Design - Performing Arts (Dance)
          </span>
          <span className="text-secondary -mt-2">2019 - 2021</span>
          <span className="text-heading text-base">
            Calbayog Arts and Design School of Eastern Visayas
          </span>
        </div>
      </div>
    </div>
  );
};

export const SkillsTools = () => {
  return (
    <div className="bg-background-tertiary space-y-6 px-10 py-10">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold w-fit border-b-2 border-accent">
            Skills and Tools
          </h1>
        </div>

        <div className="flex flex-wrap w-full gap-4">
          {SkillTools.map((skill, key) => {
            return (
              <div key={key} className="flex items-center px-4 py-3 gap-4 cursor-default border rounded border-background-primary group hover:backdrop-blur-xs hover:bg-white/5 hover:border-transparent ease-in-out duration-75 transition-all">
                <img src={skill.icon} alt={skill.name} className="h-9 w-9" />
                <span className="text-heading text-lg group-hover:text-accent group-hover:font-semibold ease-in-out duration-75 transition-all">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
  )
}
