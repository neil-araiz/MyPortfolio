import React from "react";
import { Header } from "@/components/Header";
import { Education, Experience, SkillsTools } from "@/components/About";
import { Project } from "@/components/Project";
import { Blog } from "@/components/Blog";
import Github from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.png";

const Home = () => {
  return (
    <div id="home" className="w-full bg-background-primary">
      <Header
        home={"#home"}
        about={"#about"}
        work={"#work"}
        blog={"#blog"}
        contact={"#contact"}
      />

      <div className="h-[90vh] px-4 sm:px-8 md:pl-[12%] md:pr-8 flex flex-col justify-center items-start space-y-3 sm:space-y-4">
        <p className="text-base sm:text-lg text-accent">Hi, my name is</p>
        <p className="text-primary font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="typing-text inline-block">Neil Brian Araiz</span>
        </p>
        <p className="text-secondary font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          I build web and mobile applications
        </p>
        <p className="text-secondary font-sans text-sm sm:text-base md:text-lg max-w-2xl">
          I'm a Full Stack Developer.
          <br />
          I develop and deliver production-ready web and mobile applications,
          working across both frontend and backend using modern technologies.
          <br />I focus on building scalable systems, integrating APIs, and
          creating responsive, user-friendly experiences that provide real value
          to users.
        </p>
        <a
          href="#about"
          className="mt-5 border-2 rounded border-accent text-sm sm:text-base md:text-lg text-accent py-2 px-4 cursor-pointer transition-all duration-150 hover:bg-accent hover:text-black hover:font-semibold"
        >
          Learn More About Me →
        </a>
      </div>

      <div id="about" className="bg-background-tertiary space-y-6 p-4 sm:p-6 md:p-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-3xl md:text-4xl font-bold w-fit">Experience</h1>
        </div>
        <Experience />
        <Education />
        <SkillsTools />
      </div>

      <div id="work" className="bg-background-secondary space-y-10 py-4 sm:py-6 md:py-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-3xl md:text-4xl font-bold ">Project</h1>
        </div>
        <Project />
      </div>

      <div id="blog" className="bg-blue space-y-6 p-4 sm:p-6 md:p-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-3xl md:text-4xl font-bold ">Blog</h1>
        </div>
        <Blog />
      </div>

      <div id="contact" className="space-y-10 py-16 w-full max-w-4xl mx-auto px-6 text-center">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-3xl md:text-5xl font-bold w-fit">Contact Me</h1>
        </div>

        <div className="flex flex-col gap-8 items-center justify-center bg-[#112240] p-8 md:p-12 rounded-lg shadow-xl shadow-black/30 border border-transparent hover:border-accent/30 transition-all duration-300">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center w-full">
            <div className="flex flex-col gap-2 items-center md:items-start group">
              <span className="font-mono text-accent text-sm">Email</span>
              <a href="mailto:neilbrianaraiz@gmail.com" className="font-sans text-secondary text-lg md:text-xl font-semibold hover:text-accent transition-colors duration-300">
                neilbrianaraiz02@gmail.com
              </a>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-accent/20"></div>

            <div className="flex flex-col gap-2 items-center md:items-start group">
              <span className="font-mono text-accent text-sm">Phone</span>
              <p className="font-sans text-secondary text-lg md:text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                +63 963 119 7877
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-accent/10 my-2"></div>

          <div className="flex gap-8 items-center">
            <a href="https://www.linkedin.com/in/neil-brian-araiz-0197623aa/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-background-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
              <img src={LinkedIn} alt="linkedin" className="h-6 w-6 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </a>
            <a href="https://github.com/neil-araiz" target="_blank" rel="noopener noreferrer" className="group p-3 bg-background-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
              <img src={Github} alt="github" className="h-6 w-6 transition-all duration-300" />
            </a>
          </div>

        </div>

        <a
            href="#home"
            className="inline-block font-mono text-sm md:text-base text-slate-500 hover:text-accent hover:underline decoration-accent/50 underline-offset-4 transition-all duration-300 mt-8"
          >
            Back to top ↑
        </a>
      </div>
    </div>
  );
};

export default Home;
