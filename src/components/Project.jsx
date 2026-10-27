import React from "react";
import { projects } from "@/context/ProjectList";

export const Project = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-6xl mx-auto px-4 sm:px-6">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className="group relative bg-[#112240]/70 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-2xl p-5 sm:p-8 transition-all duration-300 shadow-xl shadow-black/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Media Preview Column */}
              <div
                className={`lg:col-span-7 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent/30 bg-[#0a192f] transition-all duration-300 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {project.image ? (
                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden aspect-video cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-300" />
                  </a>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#112240] to-[#0a192f]">
                    <span className="font-mono text-accent text-xs tracking-wider uppercase mb-2">
                      Mobile Platform
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-heading">
                      {project.title}
                    </h4>
                    <p className="text-secondary text-xs sm:text-sm mt-2 max-w-md">
                      Published on Google Play Store with real-time chat and billing
                    </p>
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center space-y-4 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-0.5 bg-accent" />
                    <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                      {project.role}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-heading group-hover:text-accent transition-colors">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-accent/40 underline-offset-4"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>

                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <ul className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, techIdx) => (
                    <li
                      key={techIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Link Action */}
                {project.link && (
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-accent hover:text-[#0a192f] hover:bg-accent px-4 py-2 rounded-lg border border-accent transition-all duration-200"
                    >
                      <span>Explore Project</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
