import React from "react";

export const Project = () => {
  return (
    <div className="flex flex-col items-center space-y-20 cursor-default">
      <div className="flex items-center w-full h-[85vh] relative">
        <div className="w-1/2 h-full bg-accent"></div>
        <div className="absolute flex flex-col justify-around w-1/2 h-[85%] right-[10%] bg-background-light shadow-lg px-10 py-5">
          <p className="text-lg font-sans font-semibold text-secondary tracking-widest">
            Frontend Developer
          </p>
          <p className="text-4xl font-sans font-bold text-background-primary tracking-widest">
            DIALECTO: A Filipino Dialect Learning System Utilizing Speech
            Recognition
          </p>
          <p className="font-sans text-background-primary">
            Dialecto is a web-based educational platform aimed at helping
            Filipino elementary students learn local dialects. It includes
            features such as voice recognition, interactive quizzes, and
            progress tracking to support effective language learning. As the
            frontend developer, I was responsible for developing responsive and
            user-friendly interfaces suited for young users.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              React
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Tailwind CSS
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Express
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Node.js
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              PostgresSQL
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center w-full h-[85vh] relative">
        <div className="w-1/2 h-full bg-accent"></div>
        <div className="absolute flex flex-col justify-around w-1/2 h-[85%] left-[10%] bg-background-light shadow-lg px-10 py-5">
          <p className="text-lg font-sans font-semibold text-secondary tracking-widest">
            Lead Frontend Developer
          </p>
          <p className="text-4xl font-sans font-bold text-background-primary tracking-widest">
            Student Transcript and Academic Records System
          </p>
          <p className="font-sans text-background-primary">
            A web-based system designed to manage and maintain academic records
            for elementary students from Grades 1 to 6. It enables efficient
            storage, retrieval, report generation, and controlled release of
            student records. As the lead frontend developer, I was responsible
            for developing the frontend interface and integrating it with
            backend APIs to ensure seamless data interaction and functionality.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              React
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Tailwind CSS
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Express
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              Node.js
            </span>
            <span className="text-white font-sans font-semibold bg-background-primary px-5 py-1 flex items-center rounded-full">
              PostgresSQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
