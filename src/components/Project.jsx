import React from "react";
import { projects } from "@/context/ProjectList";

export const Project = () => {
  const ProjectCard = ({ role, title, description, techStack, direction, link, image }) => {
    return (
      <div className={`flex flex-col md:flex-row ${direction === "right" ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-0 w-full relative group`}>
        
        {/* Image Section */}
        <div className="w-full md:w-3/5 h-64 md:h-[500px] bg-background-light/5 rounded-lg overflow-hidden relative border border-accent/20 transition-all duration-300 group-hover:border-accent/50">
           {image ? (
             <div className="w-full h-full relative cursor-pointer hover:transition-all duration-500" onClick={() => link && window.open(link, '_blank')}>
               <div className="absolute inset-0 bg-background-primary/30 transition-all duration-300 z-10"></div>
               <img src={image} alt={title} className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" />
             </div>
           ) : (
             <>
               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-60"></div>
               <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-mono text-4xl font-bold rotate-[-15deg]">
                  {title.split(':')[0]}
               </div>
             </>
           )}
        </div>

        {/* Content Card */}
        <div className={`w-full md:w-1/2 md:absolute ${direction === "left" ? "md:right-0 md:text-right md:items-end" : "md:left-0 md:text-left md:items-start"} inset-y-0 flex flex-col justify-center`}>
          
          <div className={`flex flex-col gap-4 p-6 md:p-8 bg-[#112240] rounded-lg shadow-xl shadow-black/30 backdrop-blur-sm border border-transparent hover:border-accent/30 transition-all duration-300 ${direction === "left" ? "md:items-end" : "md:items-start"}`}>
            
            <div>
              <p className="font-mono text-accent text-sm md:text-base mb-1">
                {role}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-heading hover:text-accent transition-colors duration-300">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
            </div>

            <div className={`bg-background-tertiary/50 md:bg-transparent rounded-lg p-0 md:p-0 text-secondary text-sm md:text-lg leading-relaxed ${direction === "left" ? "md:text-right" : "md:text-left"}`}>
              {description}
            </div>

            <ul className={`flex flex-wrap gap-2 md:gap-3 text-sm font-mono text-secondary mt-2 ${direction === "left" ? "md:justify-end" : "md:justify-start"}`}>
              {techStack.map((tech, index) => (
                <li key={index} className="bg-accent/10 px-3 py-1 rounded-full text-accent text-xs md:text-sm">
                  {tech}
                </li>
              ))}
            </ul>

            {link && (
              <div className="mt-4">
                 <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono text-sm"
                >
                  View Project
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full max-w-6xl mx-auto px-4 md:px-0 py-10 md:py-20">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          role={project.role}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          direction={project.direction}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};
