import React from "react";
import { Header } from "@/components/Header";
import { Education, Experience, SkillsTools } from "@/components/About";

const Home = () => {
  return (
    <div id="home" className="w-full bg-background-primary">
      <Header
        home={"#home"}
        about={"#about"}
        work={"#work"}
        blog={"#blog"}
        contact={"#contact"}
        resumeOnClick={() => alert("Resume")}
      />

      <div className="h-[90vh] pl-[12%] flex flex-col justify-center items-start space-y-2">
        <p className="text-lg text-accent">Hi, my name is</p>
        <p className="text-primary font-sans font-bold text-7xl">
          <span className="typing-text inline-block">Neil Brian Araiz</span>
        </p>
        <p className="text-secondary font-sans font-bold text-7xl">
          I build web and mobile apps
        </p>
        <p className="text-secondary font-sans text-lg">
          I'm a web and mobile developer specializing in front-end development.
          <br />
          I create responsive, user-friendly interfaces with strong attention to
          performance, accessibility, and seamless user experiences. <br />
          Passionate about building engaging digital products using modern tools
          and frameworks.
        </p>

        <a
          href="#about"
          className="mt-5 border-2 rounded border-accent text-lg text-accent py-2 px-4 cursor-pointer transition-all duration-150 hover:bg-accent hover:text-black hover:font-semibold"
        >
          Learn More About Me →
        </a>
      </div>

      <div id="about" className="bg-background-tertiary space-y-6 px-10 py-10">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold w-fit border-b-2 border-accent">
            Experience
          </h1>
        </div>
        <Experience />
      </div>
      <Education />
      <SkillsTools />
    </div>
  );
};


export default Home;
