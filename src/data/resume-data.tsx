import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jaishree Singh",
  initials: "JS",
  location: "Mumbai, India, IST",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "Software Engineer focused on high-quality, scalable solutions.",
  summary:
    "I'm a budding Full Stack Engineer dedicated to guiding projects from inception to launch. I specialize in leading teams and cultivating environments conducive to peak performance. My skills include TypeScript, React.js, Node.js, Java and Python for developing scalable and user-friendly solutions. I actively engage in hackathons and contribute to open-source projects, leveraging the latest technologies to deliver innovative solutions that meet client needs",
  avatarUrl: "https://avatars.githubusercontent.com/u/73012522?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "jaishrees23102001@gmail.com",
    tel: "+919082646408",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Jaishree2310",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaishree-singh-6332a51b9",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/Jaishre23100",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Mumbai",
      degree: "Bachelor's of Engineering in CSE(Iot and Cyber Security including Blockchain Technology)",
      start: "2020",
      end: "2024",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Remix",
    "Next.js",
    "Node.js",
    "Java",
    "Python",
    "SQL",
    "REST API",
    "MongoDB",
    "Figma",
  ],
  projects: [
     {
      title: "Glassy UI",
      techStack: ["React", "Typescript", "Javascript", "Html","CSS"],
      description:
      "Elegant Glassmorphism Components for Modern UIs",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://glassyui.vercel.app/",
      },
    },
    {
      title: "kobun.app",
      techStack: ["React", "Typescript", "Javascript", "Html","CSS"],
      description:
      "Effortlessly create personalized content bundles",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://kobun.app/",
      },
    },
     {
      title: "UX/UI Portfolio",
      techStack: ["React", "Javascript", "Html"," Tailwind CSS"],
      description:
      "My Product Design Portfolio",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://jaishreesingh.com",
      },
    },
    {
      title: "NoteMaker",
      techStack: ["Python", "Django", "Javascript", "Html","CSS"],
      description:
      "An Automated Note Maker using Deepgram for accurate speech-to-text conversion and PDF creation.",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://notemaker-app-2rw7.onrender.com/",
      },
    },
    {
      title: "ERP",
      techStack: ["Node.js", "Express", "MongoDB", "React"],
      description:
        "Optimized student services with improved UI, security, and OCR for auto-filling forms.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/aditya955/ERP",
      },
    },
    {
      title: "Realtime Sentiment Analysis",
      techStack: ["Python", "Jupyter notebook","TensorFlow", "Neural Network", "Kaggle Dataset"],
      description:
        "Developed a CNN for real-time facial expression classification using OpenCV",
      logo: JarockiMeLogo,
      link: {
        label: "gist.github.com",
        href: "https://gist.github.com/Jaishree2310/bb0f29adfeb7758e8a04724165df2f5e",
      },
    },
    {
      title: "Fitness-Club",
      techStack: ["Typescript", "JavaScript","HTML", "CSS"],
      description:
        "FitClub is a straightforward and visually appealing landing page specifically crafted for gyms and fitness centers.",
      logo: JarockiMeLogo,
      link: {
        label: "netlify.com",
        href: "https://fitness-club-jaishree.netlify.app/",
      },
    },
    {
      title: "OnlineTest_App",
      techStack: ["Java", "OOPs"],
      description:
        "OOP project for creating and managing online tests.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://github.com/Jaishree2310/OnlineTestApp",
      },
    },
    {
      title: "FoddieFood",
      techStack: ["React.js", "Tailwind CSS", "HTML",""],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "fofood",
        href: "",
      },
    },
  ],
  work: []
} as const;
