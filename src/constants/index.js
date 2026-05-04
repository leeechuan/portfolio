import {
  webdev,
  mobiledev,
  architecture,
  odc,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  python,
  expressjs,
  temus,
  deloitte,
  ripplegym,
  yellowribbon,
  emberlighttales,
  kopisiudai,
  nusmarket,
  firstportfolio,
  langchain,
  spline,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Mobile Developer",
    icon: mobiledev,
  },
  {
    title: "Architecture Specialist",
    icon: architecture,
  },
  {
    title: "Outsystems Cloud",
    icon: odc,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "spline",
    icon: spline,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "langchain",
    icon: langchain,
  },
];

const experiences = [
  {
    title: "Associate Tech Lead | Consultant",
    company_name: "Deloitte Singapore",
    icon: deloitte,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Production support and enhancements on a legacy project.",
      "Leads a team of developers, conducting code reviews and bridging techno functional gap.",
      "Engages clients with technical solutioning and CICD approaches."
    ],
  },
  {
    title: "Software Engineer L2",
    company_name: "Temus",
    icon: temus,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Engineered and delivered technical solutions across multiple stakeholders and third-party integrations, reducing manual processes and enhancing system interoperability.",
      "Spearheaded the development of an internal developer tool that reduced commit conflicts and dependency errors by 40%, increasing team efficiency."
    ],
  },
  {
    title: "Software Engineer L1",
    company_name: "Temus",
    icon: temus,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Development of commercial grade web applications using HTML, CSS and Javascript.",
      "Cross collaboration with other functional teams, to create an AI powered solution for internal use",
      "Engaging in backend development tasks including caching mechanisms and cart checkout functionalities."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yellow Ribbon",
    description:
      "An AI powered application, providing end to end job support and mental wellness checks for ex-offenders in Singapore. This Hackathon Project came in second place out of 72 global teams and raised a total of USD $5,000 for Yellow Ribbon.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: yellowribbon,
    source_code_link: "https://www.youtube.com/watch?v=GXJX09D-Yds",
  },
  {
    name: "Emberlight Tales",
    description:
      "A 2D top-down action RPG built from scratch in Java. Features A* pathfinding, responsive combat, farming systems, dynamic day/night cycles, and over 30 interactable NPCs across a world of towns, dungeons, and caves.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "custom-engine",
        color: "green-text-gradient",
      },
      {
        name: "game-dev",
        color: "pink-text-gradient",
      },
    ],
    image: emberlighttales,
    source_code_link: "https://github.com/leeechuan/emberlighttales",
  },
  {
    name: "NUS Market",
    description:
      "A student-centric marketplace for the NUS community. Features a live area activity heatmap, Stripe Integration, and Ollama for local LLM use cases.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Ollama",
        color: "pink-text-gradient",
      },
    ],
    image: nusmarket,
    source_code_link: "https://www.youtube.com/watch?v=1jPtYttyQcQ",
  },
  {
    name: "Ripple",
    description:
      "Reactive web gym application built with MERN stack. Features user authentication, data archival of weekly workouts and content management for a local product listing page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ripplegym,
    source_code_link: "https://theripplegym.vercel.app/",
  },
  {
    name: "Kopi",
    description:
      "A project done as part of Build for the Future Hackathon 2023. The application came in 3rd place for demos and ranked 13th overall out of 67 teams.",
    tags: [
      {
        name: "non-profit",
        color: "blue-text-gradient",
      },
      {
        name: "openAI API",
        color: "green-text-gradient",
      },
      {
        name: "hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: kopisiudai,
    source_code_link: "https://www.youtube.com/watch?v=jSQqT_oC680&",
  },
  {
    name: "First Portfolio",
    description:
      "My very first website! Learnt HTML and CSS basics with this project with the help of Udemy courses and youtube videos (and of course stack overlow).",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: firstportfolio,
    source_code_link: "https://leeechuan.github.io/portfolio-old/",
  },
];

export { services, technologies, experiences, testimonials, projects };
