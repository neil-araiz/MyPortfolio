import React, { useState, useEffect } from "react";
import MyProf from "@/assets/neil.png";
import ResumePDF from "@/assets/NeilBrian-Araiz-Resume.pdf";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a192f]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40"
            : "bg-[#0a192f]/60 backdrop-blur-sm border border-white/5"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative">
            <img
              src={MyProf}
              alt="Neil Brian Araiz"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-accent/40 group-hover:ring-accent transition-all duration-300"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-[#0a192f]" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-heading group-hover:text-accent transition-colors">
              Neil Brian Araiz
            </span>
            <span className="text-[11px] font-mono text-secondary">
              Full Stack & AI Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center space-x-1 lg:space-x-2 font-mono text-xs lg:text-sm">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-secondary hover:text-accent rounded-full hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-accent/60 mr-1 text-[11px]">0{idx + 1}.</span>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={ResumePDF}
            download="NeilBrian-Araiz-Resume.pdf"
            className="font-mono text-xs px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-[#0a192f] font-semibold transition-all duration-200 shadow-sm shadow-accent/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={ResumePDF}
            download="NeilBrian-Araiz-Resume.pdf"
            className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-[#0a192f] font-semibold transition-all duration-200"
          >
            Resume
          </a>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-secondary hover:text-accent focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto md:hidden max-w-6xl mx-auto mt-2">
          <div className="p-4 rounded-2xl bg-[#0a192f]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 flex flex-col gap-1 font-mono text-sm">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-primary hover:text-accent hover:bg-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-accent/60 text-xs">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
