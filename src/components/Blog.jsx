import React from "react";
import IdessLogo from "@/assets/idess.png";
import Seminar from "@/assets/seminar.png";

export const Blog = () => {
  const BlogCard = ({ image, title, description, link }) => {
    return (
      <div className="w-full md:w-[45%] lg:w-[35%] bg-[#112240] rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-transparent hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-[60vh]">
        {/* Image Container */}
        <div className="w-full h-60 overflow-hidden relative">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-fit transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div>
            <h1 className="text-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
              {title}
            </h1>
            <p className="text-secondary font-sans text-sm leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent font-mono text-sm hover:underline hover:text-accent/80 transition-colors w-fit mt-auto"
          >
            Read Full Article →
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center items-stretch w-full max-w-7xl mx-auto px-4">
      <BlogCard 
        image={IdessLogo}
        title="My Internship Experience at Idess IT"
        description="My internship at Idess IT allowed me to apply my frontend development skills in real-world projects. I worked with a professional team and gained valuable hands-on experience. It was a meaningful step in my growth as a developer."
        link="https://neilaraiz.blogspot.com/"
      />
      
      <BlogCard 
        image={Seminar}
        title="Seminars, Webinars & Events"
        description="I joined various seminars, webinars, and school events that broadened my knowledge, improved my skills, and gave me insight into real-world industry practices. These experiences greatly contributed to my growth as a student and aspiring developer."
        link="https://neilbrianaraiz.blogspot.com/"
      />
    </div>
  );
};
