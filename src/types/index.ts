export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "FinTech / Algo" | "AI / Systems" | "Web App";
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  bullets: string[];
  skills: string[];
  current?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Honor {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge?: string;
}
