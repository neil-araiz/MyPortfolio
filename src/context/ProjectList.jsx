import DialectoImg from "@/assets/dialecto.png";
import STARSImg from "@/assets/iram.png";
import MyWebImg from "@/assets/my_web.png";
import RAGImg from "@/assets/rag.png";

export const projects = [
    {
    role: "Full-Stack Developer with AI Integration",
    title: "AI RAG Assistant",
    description:"Developed a full-stack Retrieval-Augmented Generation (RAG) web application that allows users to upload PDF documents and interact with them through an AI-powered chat interface. Implemented document processing including PDF text extraction, chunking, embedding generation, and vector similarity search. Built a chat interface with source citations, providing AI answers with page-level references. Implemented session-based chat history per document using Neon for persistent storage and conversation continuity.",
    techStack: [
      "Next.js",
      "FastAPI",
      "Neon",
      "Embeddings",
      "pgvector",
    ],
    direction: "left",
    link: "https://neil-ai-rag.vercel.app",
    image: RAGImg,
  },
  {
    role: "Full-Stack Developer",
    title: "mysEaLearn (Mobile)",
    description:
      "Developed a mobile learning platform for seafarers, supporting training delivery, progress tracking, and community interaction. Designed and implemented mobile UI components and integrated backend services and APIs. Implemented real-time communication features using Socket.IO to support in-app chat and discussions. Integrated Google Play Billing to enable in-app purchases and subscription-based access to learning content.",
    techStack: [
      "React Native (Expo)",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Google Play Billing",
    ],
    direction: "right",
    link: "https://play.google.com/store/apps/details?id=com.idessit.mysealearn",
  },
  {
    role: "Full-Stack Developer",
    title: "mysEaLearn (Web)",
    description:
      "Supported the frontend development of the web-based learning platform for seafarers, focusing on UI implementation and usability. Integrated PayPal to enable secure payments and paywall functionality for web-based course access. Collaborated with backend services to connect frontend components with existing APIs.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "PayPal API",
    ],
    direction: "left",
    link: "https://mysealearn.com",
    image: MyWebImg,
  },

  {
    role: "Lead Frontend Developer",
    title: "STARS: Student Transcript and Academic Records System",
    description:
      "A web-based system designed to manage and maintain academic records for elementary students from Grades 1 to 6. It enables efficient storage, retrieval, report generation, and controlled release of student records. As the lead frontend developer, I was responsible for developing the frontend interface and integrating it with backend APIs to ensure seamless data interaction and functionality.",
    techStack: ["React", "Tailwind CSS", "Express", "Node.js", "PostgresSQL"],
    direction: "right",
    link: "https://bit.ly/IRAM-SYSTEM-INSTALLER",
    image: STARSImg,
  },
  {
    role: "Frontend Developer",
    title:
      "DIALECTO: A Filipino Dialect Learning System Utilizing Speech Recognition",
    description:
      "Dialecto is a web-based educational platform aimed at helping Filipino elementary students learn local dialects. It includes features such as voice recognition, interactive quizzes, and progress tracking to support effective language learning. As the frontend developer, I was responsible for developing responsive and user-friendly interfaces suited for young users.",
    techStack: ["React", "Tailwind CSS", "Express", "Node.js", "PostgresSQL"],
    direction: "left",
    link: "https://www.dialecto-app.com",
    image: DialectoImg,
  },
];
