import React, { useState, useEffect } from "react";
import MyProf from "@/assets/neil.png";
import ResumePDF from "@/assets/NeilBriian-Araiz-Resume.pdf";

export const Header = ({ home, about, work, blog, contact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLink =
    "relative text-primary transition-all duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:font-semibold focus:text-accent focus:font-semibold hover:after:w-full focus:after:w-full";

  const mobileNavLink =
    "block text-primary text-lg py-3 px-4 transition-all duration-300 hover:text-accent hover:bg-white/5 hover:font-semibold";

  return (
    <div
      className={`sticky top-0 z-50 flex justify-between items-center h-[10vh] px-4 sm:px-6 transition bg-background-primary/95`}
    >
      <img src={MyProf} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />

      <div className="hidden md:flex items-center gap-6">
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
        <a
          href={ResumePDF}
          download="NeilBriian-Araiz-Resume.pdf"
          className="border-2 rounded border-accent text-accent py-1 px-4 cursor-pointer transition-all duration-150 hover:bg-accent hover:text-black hover:font-semibold"
        >
          Resume
        </a>
      </div>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[10vh] bg-background-primary/95 backdrop-blur-md z-40"
          onClick={closeMobileMenu}
        >
          <nav className="flex flex-col font-mono pt-4">
            <a href={home} className={mobileNavLink} onClick={closeMobileMenu}>
              Home
            </a>
            <a href={about} className={mobileNavLink} onClick={closeMobileMenu}>
              About
            </a>
            <a href={work} className={mobileNavLink} onClick={closeMobileMenu}>
              Work
            </a>
            <a href={blog} className={mobileNavLink} onClick={closeMobileMenu}>
              Blog
            </a>
            <a href={contact} className={mobileNavLink} onClick={closeMobileMenu}>
              Contact
            </a>
            <a
              href={ResumePDF}
              download="NeilBriian-Araiz-Resume.pdf"
              onClick={closeMobileMenu}
              className="mx-4 mt-4 text-center border-2 rounded border-accent text-accent py-2 px-4 cursor-pointer transition-all duration-150 hover:bg-accent hover:text-black hover:font-semibold"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};
