"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiGooglegemini,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiDocker,
  SiStrapi,
  SiPandas,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbChartDots } from "react-icons/tb";

interface TechItem {
  name: string;
  category: string;
  isFeatured?: boolean;
  renderIcon: () => React.ReactNode;
}

const techItems: TechItem[] = [
  // ================= ROW 1 =================
  {
    name: "React.js",
    category: "Frontend",
    isFeatured: true,
    renderIcon: () => (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 w-8 h-8 bg-cyan-400/30 rounded-full blur-md pointer-events-none" />
        <SiReact className="w-7 h-7 sm:w-8 sm:h-8 text-[#00D8FF] relative z-10 transition-transform duration-200" />
      </div>
    ),
  },
  {
    name: "TypeScript",
    category: "Frontend",
    renderIcon: () => (
      <SiTypescript className="w-7 h-7 sm:w-8 sm:h-8 text-[#3178C6] rounded transition-transform duration-200" />
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    renderIcon: () => (
      <SiNodedotjs className="w-7 h-7 sm:w-8 sm:h-8 text-[#5FA04E] transition-transform duration-200" />
    ),
  },
  {
    name: "Gemini AI",
    category: "AI & LLMs",
    renderIcon: () => (
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 w-8 h-8 bg-purple-500/30 rounded-full blur-md pointer-events-none" />
        <SiGooglegemini className="w-7 h-7 sm:w-8 sm:h-8 text-[#818CF8] relative z-10 transition-transform duration-200" />
      </div>
    ),
  },
  {
    name: "Next.js",
    category: "Full Stack",
    renderIcon: () => (
      <SiNextdotjs className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-200" />
    ),
  },
  {
    name: "Python",
    category: "Languages",
    renderIcon: () => (
      <SiPython className="w-7 h-7 sm:w-8 sm:h-8 text-[#3776AB] group-hover:text-[#FFD43B] transition-colors duration-200" />
    ),
  },

  // ================= ROW 2 =================
  {
    name: "AWS & Cloud",
    category: "Cloud & AI",
    renderIcon: () => (
      <FaAws className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF9900] transition-transform duration-200" />
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    renderIcon: () => (
      <SiTailwindcss className="w-7 h-7 sm:w-8 sm:h-8 text-[#38BDF8] transition-transform duration-200" />
    ),
  },
  {
    name: "Express.js",
    category: "Backend",
    renderIcon: () => (
      <SiExpress className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-100 transition-transform duration-200" />
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    renderIcon: () => (
      <SiMongodb className="w-7 h-7 sm:w-8 sm:h-8 text-[#47A248] transition-transform duration-200" />
    ),
  },
  {
    name: "MySQL",
    category: "Database",
    renderIcon: () => (
      <SiMysql className="w-8 h-8 sm:w-9 sm:h-9 text-[#00758F] transition-transform duration-200" />
    ),
  },
  {
    name: "SQLite",
    category: "Database",
    renderIcon: () => (
      <SiSqlite className="w-7 h-7 sm:w-8 sm:h-8 text-[#0EA5E9] transition-transform duration-200" />
    ),
  },

  // ================= ROW 3 =================
  {
    name: "Git & GitHub",
    category: "Tools",
    renderIcon: () => (
      <SiGit className="w-7 h-7 sm:w-8 sm:h-8 text-[#F05032] transition-transform duration-200" />
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    renderIcon: () => (
      <SiDocker className="w-7 h-7 sm:w-8 sm:h-8 text-[#2496ED] transition-transform duration-200" />
    ),
  },
  {
    name: "Strapi CMS",
    category: "Backend",
    renderIcon: () => (
      <SiStrapi className="w-7 h-7 sm:w-8 sm:h-8 text-[#4945FF] transition-transform duration-200" />
    ),
  },
  {
    name: "Pandas",
    category: "Data Analysis",
    renderIcon: () => (
      <SiPandas className="w-7 h-7 sm:w-8 sm:h-8 text-[#E70488] transition-transform duration-200" />
    ),
  },
  {
    name: "Matplotlib",
    category: "Analytics",
    renderIcon: () => (
      <TbChartDots className="w-7 h-7 sm:w-8 sm:h-8 text-[#10B981] transition-transform duration-200" />
    ),
  },
  {
    name: "Postman",
    category: "API Platform",
    renderIcon: () => (
      <SiPostman className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF6C37] transition-transform duration-200" />
    ),
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="p-0 py-0 relative">
      {/* Subtle chrome stars at the bottom right matching image reference */}
      <div className="absolute right-[-24px] bottom-14 hidden lg:flex flex-col items-center gap-1 opacity-60 pointer-events-none select-none">
        <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9L12 0Z" />
        </svg>
        <svg className="w-3.5 h-3.5 text-zinc-500 translate-x-2.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9L12 0Z" />
        </svg>
      </div>

      {/* Header bar matching exact reference image */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-5 select-none">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-200">
          TECHNICAL STACK
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          FULL Stack · Cloud · AI
        </span>
      </div>

      {/* 3x6 Responsive Grid matching reference image (10% more compact) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-2.5">
        {techItems.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: idx * 0.02 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-200 min-h-[105px] sm:min-h-[112px] ${
              item.isFeatured
                ? "bg-[#121316]/95 border border-cyan-500/35 shadow-[0_0_20px_-3px_rgba(6,182,212,0.18)]"
                : "bg-[#121215]/85 hover:bg-[#18181c]/95 border border-zinc-800/80 hover:border-zinc-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-lg"
            }`}
          >
            {/* React-Icons Emblem with Scale on Hover */}
            <div className="h-8 sm:h-9 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-200">
              {item.renderIcon()}
            </div>

            {/* Name */}
            <h3 className="text-xs sm:text-[12.5px] font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors leading-tight">
              {item.name}
            </h3>

            {/* Category */}
            <p className="text-[9.5px] sm:text-[10px] font-mono text-zinc-400 mt-0.5 leading-tight">
              {item.category}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-10 sm:mt-14" />
    </section>
  );
}
