import React from "react";
import IdessLogo from "@/assets/idess.png";
import Seminar from "@/assets/seminar.png";

export const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center justify-around">
      <div className="w-[35%] h-[85vh] flex flex-col justify-between bg-[#e2e8f0] p-8 rounded-lg">
        <div className="w-full h-[50%] bg-[#000] rounded-lg flex items-center justify-center">
          <img
            src={IdessLogo}
            alt="Idess IT"
            className="w-full h-full object-center"
          />
        </div>

        <h1 className="text-background-primary text-2xl font-bold">
          My Internship Experience
        </h1>
        <p className="text-gray-700 font-sans text-base">
          My internship at Idess IT allowed me to apply my frontend development
          skills in real-world projects. I worked with a professional team and
          gained valuable hands-on experience. It was a meaningful step in my
          growth as a developer.
        </p>
        <a
          href="https://neilaraiz.blogspot.com/"
          target="_blank"
          className="mt-2 border-2 rounded border-background-primary text-lg text-black py-2 px-4 cursor-pointer transition-all duration-150 hover:bg-background-primary hover:text-white hover:font-semibold"
        >
          Read More →
        </a>
      </div>
      <div className="w-[35%] h-[85vh] flex flex-col justify-between bg-[#e2e8f0] p-8 rounded-lg">
        <div className="w-full h-[50%] bg-[#000] rounded-lg flex items-center justify-center">
          <img
            src={Seminar}
            alt="Idess IT"
            className="w-full h-full object-center"
          />
        </div>
        <h1 className="text-background-primary text-2xl font-bold">
          Seminars, Webinars & Events
        </h1>
        <p className="text-gray-700 font-sans text-base">
          I joined various seminars, webinars, and school events that broadened
          my knowledge, improved my skills, and gave me insight into real-world
          industry practices. These experiences greatly contributed to my growth
          as a student and aspiring developer.
        </p>
        <a
          href="https://neilbrianaraiz.blogspot.com/"
          target="_blank"
          className="mt-2 border-2 rounded border-background-primary text-lg text-black py-2 px-4 cursor-pointer transition-all duration-150 hover:bg-background-primary hover:text-white hover:font-semibold"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};
