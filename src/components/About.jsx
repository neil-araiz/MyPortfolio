import React from "react";
import { experience } from "@/context/ExpList";
import { SkillCategories } from "@/context/SkillsTools";
import MyProf from "@/assets/neil.png";

export const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#112240]/80 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-xl p-6 sm:p-7 shadow-lg shadow-black/20 transition-all duration-300 flex flex-col justify-between space-y-4 group">
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            Higher Education
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-heading group-hover:text-accent transition-colors mt-1">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-secondary text-sm font-mono mt-1">Gordon College</p>
        </div>
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-mono text-secondary">Graduated</span>
          <span className="font-mono text-xs text-accent font-semibold">2021 - 2025</span>
        </div>
      </div>

      <div className="bg-[#112240]/80 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-xl p-6 sm:p-7 shadow-lg shadow-black/20 transition-all duration-300 flex flex-col justify-between space-y-4 group">
        <div>
          <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            Secondary Education
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-heading group-hover:text-accent transition-colors mt-1">
            Arts and Design - Performing Arts
          </h3>
          <p className="text-secondary text-sm font-mono mt-1">
            Calbayog Arts and Design School of Eastern Visayas
          </p>
        </div>
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-mono text-secondary">Completed</span>
          <span className="font-mono text-xs text-accent font-semibold">2019 - 2021</span>
        </div>
      </div>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Profile Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-48 sm:w-64 aspect-square">
            <div className="absolute inset-0 rounded-2xl border-2 border-accent translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 pointer-events-none" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#112240] border border-white/10 shadow-2xl">
              <img
                src={MyProf}
                alt="Neil Brian Araiz"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Narrative & Focus */}
        <div className="lg:col-span-7 space-y-4 text-secondary text-sm sm:text-base leading-relaxed">
          <p>
            Hello! My name is <span className="text-heading font-semibold">Neil Brian Araiz</span>,
            a Full Stack Developer based in the Philippines. I specialize in building and maintaining
            responsive, user-centric web and mobile applications with modern JavaScript and Python ecosystems.
          </p>
          <p>
            My engineering experience spans from building production mobile features published on
            the <span className="text-accent font-medium">Google Play Store</span> (including in-app
            billing and real-time Socket.IO communication) to designing full-stack web platforms and
            integrating <span className="text-accent font-medium">AI RAG architectures</span> with
            vector embeddings.
          </p>
          <p>
            I focus on writing clean, scalable code, delivering intuitive user experiences, and
            collaborating effectively in Agile team environments. I graduated with a Bachelor of
            Science in Computer Science from Gordon College.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-accent">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Full Stack Web & Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Applied AI & RAG Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Production App on Google Play</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>BS Computer Science</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education Milestones Sub-block */}
      <div className="space-y-6 pt-4 border-t border-white/5">
        <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
          Educational Background
        </h4>
        <Education />
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="relative pl-6 sm:pl-8 border-l border-accent/20 space-y-10">
        {experience.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a192f] border-2 border-accent group-hover:bg-accent transition-all duration-300" />

            <div className="bg-[#112240]/80 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-xl p-6 sm:p-7 shadow-lg shadow-black/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-mono text-xs sm:text-sm font-semibold text-accent">
                  {exp.company}
                </span>
                <span className="font-mono text-xs text-secondary">
                  {exp.date}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-heading group-hover:text-accent transition-colors mb-3">
                {exp.heading}
              </h3>

              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                {exp.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsTools = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
      {SkillCategories.map((group, groupIdx) => (
        <div key={groupIdx} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-0.5 bg-accent" />
            <h4 className="font-mono text-sm sm:text-base font-semibold text-heading uppercase tracking-wider">
              {group.category}
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {group.skills.map((skill, skillIdx) => (
              <div
                key={skillIdx}
                className="group flex items-center gap-3 p-3.5 bg-[#112240]/70 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-xl transition-all duration-200"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-xs sm:text-sm font-mono text-primary group-hover:text-accent transition-colors truncate">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

