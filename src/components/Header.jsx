import React, { useState, useEffect } from "react";
import MyProf from "@/assets/neil.png";

export const Header = ({ home, about, work, blog, contact, resumeOnClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLink =
    "relative text-primary transition-all duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:font-semibold focus:text-accent focus:font-semibold hover:after:w-full focus:after:w-full";
  return (
    <div className={`sticky top-0 z-10 flex justify-between items-center h-[10vh] px-6 transition 
      ${isScrolled ? "bg-black/30 backdrop-blur-md" : ""}`}>
      <img src={MyProf} alt="Logo" className="h-10 w-10 rounded-full " />
      <div className="flex items-center gap-6">
        <nav className="flex justify-end space-x-6 font-mono">
          <a href={home} className={navLink}>
            Home
          </a>
          <a href={about} className={navLink}>
            About
          </a>
          <a href={work} className={navLink}>
            Work
          </a>
          <a href={blog} className={navLink}>
            Blog
          </a>
          <a href={contact} className={navLink}>
            Contact
          </a>
        </nav>
        <button onClick={resumeOnClick} className="border-2 rounded border-accent text-accent py-1 px-4 cursor-pointer transition-all duration-150 hover:bg-accent hover:text-black hover:font-semibold">
          Resume
        </button>
      </div>
    </div>
  );
};
