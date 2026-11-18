import { Experience, Education, Project, SkillCategory, Honor } from "@/types";

export const personalInfo = {
  name: "Lalit Bisht",
  role: "Software Developer Intern",
  company: "Technogetic Pvt Ltd.",
  bio: "Full-Stack Software Engineer with a passion for building high-performance web systems, real-time architectures, and interactive digital experiences. Currently crafting scalable backend services and modern reactive user interfaces at Technogetic.",
  location: "Dehradun, Uttarakhand, India",
  email: "lalitbisht0105@gmail.com",
  phone: "+91 7906960372",
  github: "https://github.com/Lalit-byte",
  linkedin: "https://linkedin.com/in/lalit-bisht-b5285b269",
  status: "Available for new opportunities",
};

export const experiences: Experience[] = [
  {
    company: "Technogetic Pvt Ltd.",
    role: "Software Developer Intern",
    period: "Sep 2026 – Present",
    type: "Internship",
    location: "Onsite",
    current: true,
    bullets: [
      "Contributed to the Hospital Management System through rigorous manual testing, defect diagnosis, and developing/enhancing core feature modules.",
      "Engineered an end-to-end Learning Management System (LMS) utilizing AWS-AIDLC for scalable cloud architecture.",
      "Conducted manual QA and cross-device verification on Astro-based web platforms, guaranteeing high UI responsiveness and production stability."
    ],
    skills: ["AWS-AIDLC", "Astro", "Manual Testing", "Bug Fixing", "LMS", "QA Verification", "Feature Engineering"]
  }
];

export const educationList: Education[] = [
  {
    institution: "DIT University, Dehradun",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 – 2026",
    grade: "8.23 CGPA",
    details: "Advanced coursework in Data Structures, Database Management Systems, Distributed Computing, Cloud Architecture, and Software Engineering."
  },
  {
    institution: "National Institute of Electronics & Information Technology (NIELIT)",
    degree: "NIELIT 'A' Level (Advanced IT Diploma)",
    period: "2021 – 2023",
    details: "Specialized curriculum covering System Analysis, Object-Oriented Programming, Networking, and Database Design."
  },
  {
    institution: "National Institute of Electronics & Information Technology (NIELIT)",
    degree: "NIELIT 'O' Level (Foundational IT Diploma)",
    period: "2020 – 2021",
    details: "Foundations of Computer Hardware, Operating Systems, Web Technologies, and C Programming."
  }
];

export const projects: Project[] = [
  {
    id: "ai-fitness-app",
    title: "Full Stack AI Fitness App",
    tagline: "AI-powered personalized workout planning & nutrition guidance with Gemini API",
    category: "Full-Stack",
    description: "Developed a full-stack AI fitness platform integrating Google Gemini API for intelligent calorie estimation and personalized workout recommendations. Designed secure REST APIs, reusable React component architecture, and structured content management via SQLite and Strapi CMS. Deployed on Vercel and Render.",
    tags: ["React.js", "Strapi CMS", "Node.js", "SQLite", "Gemini AI", "REST APIs", "Vercel", "Render"],
    metrics: "Gemini AI Recommendations & Calorie Tracking",
    githubUrl: "https://github.com/Lalit-byte",
    liveUrl: "https://github.com/Lalit-byte",
    featured: true
  },
  {
    id: "resume-craft",
    title: "Resume Craft – Resume Builder Web App",
    tagline: "Full-stack resume builder with modular UI, live preview & PDF generation",
    category: "Full-Stack",
    description: "Built an end-to-end resume creation web application using React.js, Node.js, Express.js, and MongoDB. Features modular form editors, live real-time preview, client-side validation, secure protected routes, and instant server-side PDF document generation.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios", "REST APIs", "PDF Export"],
    metrics: "Instant Live Preview & PDF Download",
    githubUrl: "https://github.com/Lalit-byte",
    liveUrl: "https://github.com/Lalit-byte",
    featured: false
  },
  {
    id: "employee-data-analysis",
    title: "Employee Data Analysis & Visualization",
    tagline: "Workforce data wrangling, departmental trend modeling & visual dashboards",
    category: "AI / Systems",
    description: "Built an end-to-end employee data analytics pipeline using Python, Pandas, and NumPy to clean missing values, eliminate duplicates, and engineer domain features. Delivered department-, city-, and tenure-based insights with comprehensive Matplotlib dashboards.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analytics", "Git & GitHub"],
    metrics: "Department & Tenure Insights",
    githubUrl: "https://github.com/Lalit-byte",
    featured: false
  },
  {
    id: "desktop-todo-app",
    title: "Desktop Task Manager (Python & MySQL)",
    tagline: "Interactive desktop task scheduler with relational database persistence",
    category: "Web App",
    description: "Engineered a native desktop task management suite using Python and Tkinter with relational MySQL database persistence. Implemented full CRUD workflows, intuitive status toggling, and reliable transaction handling via mysql-connector-python.",
    tags: ["Python", "Tkinter", "MySQL", "mysql-connector", "CRUD Operations", "Desktop GUI"],
    metrics: "Persistent Relational Database Storage",
    githubUrl: "https://github.com/Lalit-byte",
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frontend & UI",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Tkinter", "Framer Motion", "Shadcn UI"]
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "REST APIs", "Strapi CMS", "Axios", "Fetch API", "AWS-AIDLC"]
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"]
  },
  {
    category: "DevOps & Tooling",
    skills: ["GitHub", "Postman", "Hopscotch", "Docker", "Vercel", "Render"]
  },
  {
    category: "Data Analysis & AI",
    skills: ["Gemini AI", "Pandas", "NumPy", "Matplotlib"]
  }
];

export const honorsList: Honor[] = [
  {
    title: "Two-Time Runner Up — Sphurti University Basketball Championship",
    organization: "DIT University Sports Committee",
    year: "2023 & 2024",
    badge: "🏀 Athletics & Leadership",
    description: "Competed as shooting guard in the prestigious inter-university basketball tournament, demonstrating athletic discipline, fast decision-making, and teamwork under pressure."
  }
];
