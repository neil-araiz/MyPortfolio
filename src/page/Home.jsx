import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Header } from "@/components/Header";
import { AboutMe, Experience, SkillsTools } from "@/components/About";
import { Project } from "@/components/Project";
import { Blog } from "@/components/Blog";
import ResumePDF from "@/assets/NeilBrian-Araiz-Resume.pdf";
import Github from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.png";

const Home = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatus("success");
        setMessage("Message sent successfully! I will respond to your inquiry shortly.");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("error");
        setMessage("Unable to send message right now. Please reach out directly via email.");
      },
    );
  };

  return (
    <div id="home" className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="space-y-6 max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for Full-time Roles & Technical Projects</span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-accent text-sm sm:text-base">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heading">
              Neil Brian Araiz.
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary">
              Full Stack Developer & AI Solutions Engineer.
            </h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            I engineer and deploy production-ready web and mobile applications using{" "}
            <span className="text-heading font-medium">React</span>,{" "}
            <span className="text-heading font-medium">Next.js</span>,{" "}
            <span className="text-heading font-medium">React Native</span>, and{" "}
            <span className="text-heading font-medium">Node.js</span>. Experienced in
            end-to-end features, payment integrations, real-time architectures, and practical{" "}
            <span className="text-heading font-medium">AI RAG & vector search</span> workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-accent text-[#0a192f] font-mono font-semibold text-sm hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              View Featured Work
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-xl border border-accent/40 text-accent hover:border-accent hover:bg-accent/10 font-mono font-semibold text-sm transition-all duration-200"
            >
              About Me
            </a>
            <a
              href={ResumePDF}
              download="NeilBrian-Araiz-Resume.pdf"
              className="px-6 py-3 rounded-xl border border-white/10 text-secondary hover:text-heading hover:border-white/20 font-mono text-sm transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center gap-4 pt-6 text-xs font-mono text-secondary">
            <span>Connect:</span>
            <a
              href="https://github.com/neil-araiz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors"
            >
              <img src={Github} alt="GitHub" className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/neil-brian-araiz-0197623aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            01.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            About Me
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            02.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            Work Experience
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <Experience />
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            03.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            Featured Projects
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <Project />
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            04.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            Skills & Technologies
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <SkillsTools />
      </section>

      {/* Blog & Highlights Section */}
      <section id="blog" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            05.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            Articles & Highlights
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-mono text-accent text-sm sm:text-base font-semibold">
            06.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-heading">
            Get In Touch
          </h2>
          <div className="flex-grow h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#112240]/80 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl shadow-black/20">
              <h3 className="text-xl font-bold text-heading">
                Let's discuss opportunities
              </h3>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                I am actively considering full-stack engineering roles, mobile
                development, and AI software engineering projects. Whether you have
                an open position or want to collaborate, feel free to reach out.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-secondary">Email</span>
                    <a
                      href="mailto:neilbrianaraiz02@gmail.com"
                      className="text-sm sm:text-base font-semibold text-heading hover:text-accent transition-colors"
                    >
                      neilbrianaraiz02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-secondary">Phone</span>
                    <span className="text-sm sm:text-base font-semibold text-heading">
                      +63 963 119 7877
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-secondary">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-heading">
                      Philippines (Open to Remote Worldwide)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-4">
                <a
                  href="https://github.com/neil-araiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0a192f] border border-white/10 rounded-xl text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <img src={Github} alt="GitHub" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/neil-brian-araiz-0197623aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0a192f] border border-white/10 rounded-xl text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-[#112240]/80 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl shadow-black/20"
            >
              <h3 className="text-xl font-bold text-heading">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono text-accent">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Recruiter or Client Name"
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-xl text-primary text-sm focus:outline-none focus:border-accent/60 transition-colors placeholder:text-secondary/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono text-accent">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-xl text-primary text-sm focus:outline-none focus:border-accent/60 transition-colors placeholder:text-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-accent">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Share details about the role, project, or schedule a quick chat..."
                  className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-xl text-primary text-sm focus:outline-none focus:border-accent/60 transition-colors resize-none placeholder:text-secondary/30"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-3.5 bg-accent text-[#0a192f] font-mono font-bold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-accent/20"
                >
                  {status === "sending" ? "Transmitting..." : "Send Message"}
                </button>

                {message && (
                  <span
                    className={`font-mono text-xs ${
                      status === "success" ? "text-accent" : "text-red-400"
                    }`}
                  >
                    {message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center font-mono text-xs text-secondary space-y-3">
        <p>Designed and Built by Neil Brian Araiz</p>
        <p className="text-[11px] text-secondary/60">
          Built with React, Next.js concepts, Vite & Tailwind CSS. Hosted on modern cloud infrastructure.
        </p>
        <div className="pt-2">
          <a
            href="#home"
            className="text-accent/80 hover:text-accent hover:underline decoration-accent/40 underline-offset-4 transition-colors"
          >
            Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
