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
import { GitHubIcon, LinkedInIcon, XIcon, BehanceIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jaishree Singh",
  initials: "JS",
  location: "Mumbai, India, IST",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "Software Engineer focused on high-quality, scalable solutions.",
  summary:
    "I'm a Software Engineer dedicated to guiding projects from inception to launch. I specialize in leading teams and cultivating environments conducive to peak performance. My skills include TypeScript, React.js, Node.js, Express, SQL, MongoDB, Java, and Python for developing scalable and user-friendly solutions. I actively engage in hackathons and contribute to open-source projects, leveraging the latest technologies to deliver innovative solutions that meet client needs",
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
      degree: "Bachelor's of Engineering in Computer Engineering",
      start: "2020",
      end: "2024",
      CGPA: "9",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Remix",
    "Next.js",
    "Node.js",
    "Express.js",
    "Redux",
    "Java",
    "Python",
    "SQL",
    "REST API",
    "MongoDB",
    "AWS",
    "Google Cloud",
    "Figma",
  ],
   work: [
    {
      company: "kobun.app",
      link: "https://kobun.app/",
      badges: ["Remote", "React", "Redux", "TypeScript", "Express.js"],
      title: "Software Engineer",
      // logo: ,
      start: " July 2024",
      end: null,
      description: (
        <>
          Kobun is a service that helps users curate web content (such as articles, blogs, and newsletters) into a sleek,
          personalized magazine delivered straight to their Amazon Kindle. 

          <ul className="list-inside list-disc">
          </ul>
        </>
      ),
    },
  ],
  projects: [
     {
      title: "Glassy UI",
      techStack: ["React", "Typescript", "Javascript", "Html", "CSS"],
      description:
      "Elegant Glassmorphism Components for Modern UIs",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://glassyui.vercel.app/",
      },
    },
    {
      title: "Form_Building",
      techStack: ["React", "Next.js", "Javascript", "Context API", "HTML", "Tailwind CSS"],
      description:
      "Next.js app for a form builder",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://form-build-umber.vercel.app/",
      },
    },
    {
      title: "Chat-Application",
      techStack: ["React", "InstantDB", "IndexedDB", "HTML", "Tailwind CSS", "JavaScript"],
      description:
      "A React.js based application that mimics WhatsApp Web with real-time messaging and offline capabilities.",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://chat-application-orpin-eight.vercel.app/",
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
      title: "Simon Game",
      techStack: ["Javascript", "Html", "CSS"],
      description:
      "Simple Simon Game created using Bootstrap for the UI and Vanilla JavaScript for the functionality. It replicates the classic memory game where players must repeat an increasing sequence of colors.",
      logo: ParabolLogo,
      link: {
        label: "render.com",
        href: "https://simon-game-blue-alpha.vercel.app/",
      },
    },
  ]
} as const;
