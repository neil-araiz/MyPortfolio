import React, { Fragment } from "react";
import { Header } from "@/components/Header";
import { experience } from "@/components/ExpList";

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-accent mx-auto"></div>;
};

const Pillar = () => {
  return <div className="rounded-t-full w-2 h-full bg-accent mx-auto"></div>;
};

const ExpCard = ({ date, heading, body, company }) => {
  return (
    <div className="group p-4 flex flex-col space-y-1 rounded border-2 border-background-primary hover:bg-accent hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out">
      <p className="text-secondary text-center group-hover:text-black transition-colors duration-300">
        {date}
      </p>
      <p className="text-xl font-semibold text-heading text-center group-hover:text-black transition-colors duration-300">
        {heading}
      </p>
      <p className="text-center text-heading group-hover:text-black transition-colors duration-300">{company}</p>
      <p className="text-primary text-sm text-center group-hover:text-black transition-colors duration-300">
        {body}
      </p>
    </div>
  );
};

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
      </div>

      <div className="bg-background-tertiary space-y-6 px-10 py-10">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold w-fit border-b-2 border-accent">
            Education
          </h1>
        </div>
      </div>

      <div className="bg-background-tertiary space-y-6 px-10 py-10">
        <div className="h-10 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-bold w-fit border-b-2 border-accent">
            Skills and Tools
          </h1>
        </div>
      </div>
    </div>
  );
};


export default Home;
