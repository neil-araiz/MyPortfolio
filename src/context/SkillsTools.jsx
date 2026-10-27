import ReactIcon from "@/assets/react.svg";
import JsIcon from "@/assets/javascript.svg";
import TsIcon from "@/assets/typescript.svg";
import TailwindIcon from "@/assets/tailwind.svg";
import ViteIcon from "@/assets/vite.icon.svg";
import PythonIcon from "@/assets/python.svg";
import PostmanIcon from "@/assets/postman.svg";
import HtmlIcon from "@/assets/html.svg";
import CssIcon from "@/assets/css.svg";
import GhIcon from "@/assets/github.svg";
import GitIcon from "@/assets/git.svg";
import FigmaIcon from "@/assets/figma.svg";
import VsIcon from "@/assets/vscode.svg";
import BitBucketIcon from "@/assets/bitbucket.svg";
import ExpressIcon from "@/assets/express.svg";
import MongoDBIcon from "@/assets/mongoDB.svg";
import NodeJSIcon from "@/assets/node.svg";
import AntigravityIcon from "@/assets/antigravity.png";
import CursorIcon from "@/assets/cursor.png";
import FastApiIcon from "@/assets/fastapi.svg";
import PostgresSQLIcon from "@/assets/postgresql.svg";
import NextJSIcon from "@/assets/nextjs.svg";
import SocketIcon from "@/assets/socket.svg";

export const SkillCategories = [
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "React Native", icon: ReactIcon },
      { name: "TypeScript", icon: TsIcon },
      { name: "JavaScript", icon: JsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Vite.js", icon: ViteIcon },
      { name: "HTML5", icon: HtmlIcon },
      { name: "CSS3", icon: CssIcon },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: NodeJSIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "FastAPI", icon: FastApiIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PostgreSQL", icon: PostgresSQLIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "Socket.IO", icon: SocketIcon },
    ],
  },
  {
    category: "Tools & Development",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GhIcon },
      { name: "BitBucket", icon: BitBucketIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "VS Code", icon: VsIcon },
      { name: "Cursor", icon: CursorIcon },
      { name: "Antigravity", icon: AntigravityIcon },
    ],
  },
];

export const SkillTools = SkillCategories.flatMap((c) => c.skills);

