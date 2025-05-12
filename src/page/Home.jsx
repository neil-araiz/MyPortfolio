import React from "react";
import { Header } from "@/components/Header";
import { Education, Experience, SkillsTools } from "@/components/About";
import { Project } from "@/components/Project";
import { Blog } from "@/components/Blog";
import Fb from "@/assets/fb.png";
import Ig from "@/assets/insta.png";
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

      <div id="about" className="bg-background-tertiary space-y-6 p-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold w-fit">Experience</h1>
        </div>
        <Experience />
        <Education />
        <SkillsTools />
      </div>

      <div id="work" className="bg-background-secondary space-y-10 py-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold ">Project</h1>
        </div>
        <Project />
      </div>

      <div id="blog" className="bg-blue space-y-6 p-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold ">Blog</h1>
        </div>
        <Blog />
      </div>

      <div id="contact" className="bg-olive space-y-5 p-8">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold ">Contact Me</h1>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex gap-4 items-center">
            <p className="font-sans text-white"><span className="font-semibold mr-2">Email:</span>neilbrianaraiz@gmail.com</p>
            <p className="font-sans text-white"><span className="font-semibold mr-2">Phone:</span>09631197877</p>
          </div>

          <div className="flex gap-4 items-center">
            <a href="http://" target="_blank">
              <img src={Fb} alt="facebook" className="h-8 w-8" />       
            </a>
            <a href="http://" target="_blank">
              <img src={Ig} alt="facebook" className="h-8 w-8" />       
            </a>
            <a href="http://" target="_blank">
              <img src={LinkedIn} alt="facebook" className="h-8 w-8" />       
            </a>
          </div>

          <a href="#home" className="font-san text-lg mt-2 text-gray-400 hover:text-accent hover:border-b hover:border-accent">Back to top</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
