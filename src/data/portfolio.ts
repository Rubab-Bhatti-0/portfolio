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
    "Computer Science undergraduate at COMSATS University building scalable, database-driven web applications with the MERN stack, alongside practical experience in Machine Learning, Computer Vision, and data-driven application development. Currently expanding into Generative AI, LLMs, prompt engineering, and RAG.",
  education: {
    degree: "Bachelor in Computer Science",
    school: "COMSATS University Islamabad, Lahore",
    period: "02/2024 — Present",
  },
};

export type Status = "live" | "internal" | "archived";

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
    verifyUrl: "",
  },
  {
    name: "Advanced JavaScript 1: Objects, Loops, Hoisting",
    issuer: "Scrimba / Coursera",
    category: "JavaScript",
    courseUrl: "https://www.coursera.org/learn/advanced-javascript-1-objects-loops-hoisting",
    verifyUrl: "",
  },
  {
    name: "React Basics",
    issuer: "Meta",
    category: "Web Development",
    courseUrl: "https://www.coursera.org/learn/react-basics",
    verifyUrl: "",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    verifyUrl: "",
  },
  {
    name: "Claude Platform 101",
    issuer: "Anthropic",
    category: "Anthropic",
    courseUrl: "https://anthropic.skilljar.com/claude-platform-101",
    verifyUrl: "",
  },
];

export const projects = [
  {
    title: "Smart Community Service & Local Marketplace",
    period: "07/2026",
    description:
      "Full-stack marketplace where users buy/sell products, offer services, and book appointments with local providers. JWT auth with role-based access, real-time chat via Socket.io, a booking request-accept-reject-complete workflow, and search/filter/pagination across listings.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Cloudinary"],
    featured: true,
    status: "live" as Status,
    github: "https://github.com/Rubab-Bhatti-0/Smart-Community-Service-Local-Marketplace-Platform",
    live: "",
  },
  {
    title: "FlexiBerry",
    period: "02/2026 — 04/2026",
    description:
      "Multi-vendor installment marketplace with role-based dashboards for buyers, sellers, and admins, flexible payment plans, dynamic vendor storefronts, and full order management.",
    stack: ["Next.js 16", "TypeScript", "TailwindCSS", "Radix UI"],
    featured: true,
    status: "live" as Status,
    github: "https://github.com/Rubab-Bhatti-0/FlexiBerry_platform",
    live: "https://v0-flexi-berry-e-commerce-platform-teal.vercel.app/",
  },
  {
    title: "ServiceHub",
    period: "06/2026",
    description:
      "Multi-vendor freelancer/service marketplace with JWT auth, role-based access control, and end-to-end project tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    featured: true,
    status: "live" as Status,
    github: "https://github.com/Rubab-Bhatti-0",
    live: "",
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
    title: "L.E.N.S. — License Enforcement Numberplate Surveillance",
    period: "11/2025 — 12/2025",
    description:
      "AI-based traffic monitoring system detecting red-light violations, overspeeding, wrong-way driving, and illegal parking. OpenCV for vehicle tracking and plate recognition, SQL Server for violation logging, Twilio API for automated SMS alerts.",
    stack: ["Python", "OpenCV", "Tkinter", "SQL Server", "Twilio API"],
    featured: true,
    status: "archived" as Status,
    github: "ithub.com/Rubab-Bhatti-0/L.E.N.S.---License-Enforcement-Numberplate-Surveillance",
    live: "",
  },
  {
    title: "AI Internship Projects",
    period: "06/2026",
    description:
      "A Rule-Based Chatbot, an Iris Flower Classifier (KNN), and a Tech Stack Recommendation System using TF-IDF and cosine similarity.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    featured: false,
    status: "archived" as Status,
    github: "https://github.com/Rubab-Bhatti-0",
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
    items: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "Model Evaluation", "Recommendation Systems"],
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
