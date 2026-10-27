import React from "react";
import IdessLogo from "@/assets/idess.png";
import Seminar from "@/assets/seminar.png";

export const Blog = () => {
  const blogs = [
    {
      image: IdessLogo,
      category: "Industry Experience",
      title: "My Internship Experience at Idess IT",
      description:
        "My internship at Idess IT allowed me to apply my frontend and full-stack development skills to real-world projects. I collaborated with a professional engineering team, participated in agile workflows, and gained invaluable hands-on production experience.",
      link: "https://neilaraiz.blogspot.com/",
    },
    {
      image: Seminar,
      category: "Professional Growth",
      title: "Seminars, Webinars & Tech Events",
      description:
        "Actively participated in industry seminars, technical webinars, and university events that broadened my perspective on modern software engineering practices, cloud systems, and continuous professional growth.",
      link: "https://neilbrianaraiz.blogspot.com/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto px-4 sm:px-6">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="group bg-[#112240]/80 hover:bg-[#112240] border border-white/5 hover:border-accent/30 rounded-2xl overflow-hidden shadow-xl shadow-black/20 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="relative aspect-video overflow-hidden bg-[#0a192f] border-b border-white/5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0a192f]/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="p-6 sm:p-7 space-y-3">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                {blog.category}
              </span>
              <h3 className="text-xl font-bold text-heading group-hover:text-accent transition-colors leading-snug">
                {blog.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-accent hover:underline decoration-accent/40 underline-offset-4"
            >
              <span>Read Full Article</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
