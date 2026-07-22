export const profile = {
  name: "Rubab Bashir",
  role: "Mern Developer & ML/AI Engineer",
  location: "Lahore, Pakistan",
  email: "rubabbhatti310504@gmail.com",
  phone: "0326 4534799",
  links: {
    github: "https://github.com/Rubab-Bhatti-0",
    linkedin: "https://www.linkedin.com/in/rubab-bhatti/", 
    leetcode: "https://leetcode.com/u/RUBAB_BHATTI/", 
  },
  summary:
    "Computer Science undergraduate at COMSATS University building scalable, database-driven web applications with the MERN stack, alongside practical experience in Machine Learning, and data-driven application development. Currently expanding into Generative AI, LLMs, prompt engineering, and RAG.",
  education: {
    degree: "Bachelor in Computer Science",
    school: "COMSATS University Islamabad, Lahore",
    period: "02/2024 — Present",
  },
};

export type Status = "live" | "internal" | "archived";

export interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
  featured: boolean;
  status: Status;
  github: string;
  live: string;
  category?: string;
  bullets?: string[];
  summary?: string;
}

export const experience = [
  {
    role: "Machine Learning Engineering Intern",
    org: "FlyRank",
    period: "07/2026 — 08/2026",
    location: "Remote",
    status: "running" as const,
    bullets: [
      "Working across notebooks in Google Colab, framing research questions around content opportunity scoring.",
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    org: "Teyzix Core",
    period: "06/2026 — 07/2026",
    location: "Remote",
    status: "complete" as const,
    bullets: [
      "Built ServiceHub — a multi-vendor service marketplace with JWT auth, role-based access, and project tracking.",
      "Built a Vendor Management & Quotation System to manage vendors and compare quotations, deployed on Vercel.",
      "Built a Smart Community Marketplace with real-time chat (Socket.io), Cloudinary uploads, a booking system, and an admin panel.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Decode Labs",
    period: "06/2026 — 07/2026",
    location: "Remote",
    status: "complete" as const,
    bullets: [
      "Hands-on with machine learning, data preprocessing, model evaluation, recommendation systems, and Python application development.",
    ],
  },
];


export const certifications = [
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    category: "Artificial Intelligence",
    courseUrl: "https://www.coursera.org/learn/introduction-to-ai",
    verifyUrl: "https://www.coursera.org/account/accomplishments/records/RFXNLVE6D1U2",
  },
  {
    name: "Advanced JavaScript 1: Objects, Loops, Hoisting",
    issuer: "Scrimba / Coursera",
    category: "JavaScript",
    courseUrl: "https://www.coursera.org/learn/advanced-javascript-1-objects-loops-hoisting",
    verifyUrl: "https://www.coursera.org/account/accomplishments/records/9GTS2072GJJX",
  },
  {
    name: "React Basics",
    issuer: "Meta",
    category: "Web Development",
    courseUrl: "https://www.coursera.org/learn/react-basics",
    verifyUrl: "https://www.coursera.org/account/accomplishments/records/G24NB0IVMINM",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verifyUrl: "https://verify.skilljar.com/c/mkvsyemqqs87",
  },
    {
    name: "Al Fluency Framework & Foundations",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com",
    verifyUrl: "https://verify.skilljar.com/c/ixogudy7aqdd",
  },
    {
    name: "Building with the Claude API",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verifyUrl: "https://verify.skilljar.com/c/scnwgk7zvhkw",
  },
    {
    name: "Claude code 101",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verifyUrl: "https://verify.skilljar.com/c/oicbqhhi3x2o",
  },
    {
    name: "Claude Platform 101",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "https://verify.skilljar.com/c/mcg6k6yznz7m",
  },
    {
    name: "Claude in Amazon Bedrock",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verifyUrl: "https://verify.skilljar.com/c/owmza9d9zkwk",
  },
  {
    name: "Claude Platform 101",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "",
  },
    {
    name: "Claude with Google Cloud's Vertex AI",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/Claude with Google Cloud's Vertex AI",
    verifyUrl: "https://verify.skilljar.com/c/kedynzin6qiq",
  },
    {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "https://verify.skilljar.com/c/qq7rzjf4kmz2",
  },
    {
    name: " Introduction to subagents",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "https://verify.skilljar.com/c/q63uwiviih22",
  },
    {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "https://verify.skilljar.com/c/y9bkrcgn4quf",
  },
      {
    name: "Introduction to agent skills",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "https://verify.skilljar.com/c/3i9ffyndhpkh",
  },
  
  
    {
    name: "Advanced JavaScript 2: Async JS, APIs, Operators, Objects",
    issuer: "Scrimba",
    category: "JavaScript",
    courseUrl: "",
    verifyUrl: "https://www.coursera.org/account/accomplishments/records/BSBJ7QWD3TD5",
  },
];

export const projects: Project[] = [
  {
    title: "Smart Community Service & Local Marketplace",
    period: "07/2026",
    description:
      "Full-stack marketplace where users buy/sell products, offer services, and book appointments with local providers.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Cloudinary"],
    featured: true,
    status: "live",
    github: "https://github.com/Rubab-Bhatti-0/Smart-Community-Service-Local-Marketplace-Platform",
    live: "",
    category: "WEB DEVELOPMENT",
    bullets: [
      "JWT auth with role-based access for buyers, sellers, and admins",
      "Real-time chat functionality using Socket.io for instant communication",
      "Comprehensive booking workflow: request, accept, reject, and complete",
      "Advanced search, filtering, and pagination across all service listings",
      "Cloudinary integration for seamless image uploads and management"
    ],
    summary: "A robust multi-vendor ecosystem bridging local service providers with community needs."
  },
  {
    title: "FlexiBerry",
    period: "02/2026 — 04/2026",
    description:
      "Multi-vendor installment marketplace with flexible payment plans and dynamic storefronts.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS", "Radix UI"],
    featured: true,
    status: "live",
    github: "https://github.com/Rubab-Bhatti-0/FlexiBerry_platform",
    live: "https://v0-flexi-berry-e-commerce-platform-teal.vercel.app/",
    category: "E-COMMERCE",
    bullets: [
      "Developed role-based dashboards for buyers, sellers, and administrators",
      "Implemented flexible installment payment plans for improved accessibility",
      "Designed dynamic vendor storefronts with customizable branding",
      "Engineered a full order management system with real-time tracking",
      "Built with Next.js 16 for optimized performance and SEO"
    ],
    summary: "Empowering commerce through flexible financial solutions and scalable multi-vendor architecture."
  },
  {
    title: "ServiceHub",
    period: "06/2026",
    description:
      "Multi-vendor freelancer/service marketplace with end-to-end project tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    featured: true,
    status: "live",
    github: "https://github.com/Rubab-Bhatti-0",
    live: "",
    category: "WEB DEVELOPMENT",
    bullets: [
      "Secure JWT authentication and role-based access control (RBAC)",
      "End-to-end project tracking from initial proposal to final delivery",
      "Integrated messaging system for seamless freelancer-client collaboration",
      "Responsive UI designed for both desktop and mobile accessibility",
      "Scalable backend architecture to handle concurrent service requests"
    ],
    summary: "Connecting skilled freelancers with clients through a secure and transparent tracking platform."
  },
  {
    title: "Vendor Management & Quotation System",
    period: "06/2026",
    description:
      "Enables organizations to manage vendors, create and track quotation requests, compare vendor quotations, and monitor statuses through a responsive web app.",
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    featured: false,
    status: "live" as Status,
    github: "https://github.com/Rubab-Bhatti-0/Vendor-Management-Quotation-System",
    live: "",
  },
  {
    title: "L.E.N.S.",
    period: "11/2025 — 12/2025",
    description:
      "AI-based traffic monitoring system for license enforcement and surveillance.",
    stack: ["Python", "OpenCV", "Tkinter", "SQL Server", "Twilio API"],
    featured: true,
    status: "archived",
    github: "https://github.com/Rubab-Bhatti-0/L.E.N.S.---License-Enforcement-Numberplate-Surveillance",
    live: "",
    category: "AI & COMPUTER VISION",
    bullets: [
      "Detected red-light violations, overspeeding, and wrong-way driving in real-time",
      "Utilized OpenCV for high-accuracy vehicle tracking and plate recognition",
      "Integrated SQL Server for robust logging and historical violation analysis",
      "Automated SMS alerts for immediate violation notification via Twilio API",
      "Designed a functional GUI using Tkinter for system monitoring"
    ],
    summary: "Enhancing road safety through automated, intelligent traffic enforcement and real-time surveillance."
  },
  {
    title: "AI Internship Projects",
    period: "06/2026",
    description:
      "A Rule-Based Chatbot, an Iris Flower Classifier (KNN), and a Tech Stack Recommendation System using TF-IDF and cosine similarity.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    featured: false,
    status: "archived" as Status,
    github: "https://github.com/Rubab-Bhatti-0/DecodeLabs-Internship",
    live: "",
  },
  {
    title: "ConnectVerse",
    period: "05/2025 — 06/2025",
    description:
      "Social networking app in Java — profiles, posts, and friend/content suggestions. Graphs and HashMaps for connections, a Priority Queue for recency, SQL for storage, plus full auth and feed personalization.",
    stack: ["Java", "SQL", "GUI"],
    featured: false,
    status: "archived" as Status,
    github: "https://github.com/Rubab-Bhatti-0/ConnectVerse",
    live: "",
  },
  {
    title: "AutoCare — Vehicle Service Centre Management",
    period: "11/2025 — 12/2025",
    description:
      "Database-driven system to digitize workshop operations: secure auth, customer & vehicle records, service tracking, automated billing. Applies joins, grouping, CRUD, foreign keys, and normalization.",
    stack: ["SQL", "DBMS"],
    featured: false,
    status: "archived" as Status,
    github: "https://github.com/Rubab-Bhatti-0/Vehicle-Service-Centre-Management-System-AutoCare-",
    live: "",
  },
  {
    title: "Weather App",
    period: "06/2026",
    description:
      "Weather forecasting app fetching real-time data from the OpenWeather API, with input validation and dynamic content rendering.",
    stack: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    featured: false,
    status: "live" as Status,
    github: "https://github.com/Rubab-Bhatti-0/Weather_App",
    live: "",
  },
];

export const skillModules = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "MySQL", "SQL Server", "REST APIs", "Socket.io"],
  },
  {
   label: "AI & ML",
items: [
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Cufflinks",
  "Scikit-learn",
  "OpenCV",
  "Model Evaluation",
  "Recommendation Systems"
],
  },
  {
    label: "Auth & Security",
    items: ["JWT", "bcrypt", "Role-Based Access Control"],
  },
  {
    label: "Core CS",
    items: ["OOP", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Cloudinary", "Vercel", "Render"],
  },
];
