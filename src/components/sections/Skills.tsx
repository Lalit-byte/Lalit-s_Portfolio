"use client";

import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { Cpu, Terminal, Layout, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Terminal,
  "Frontend & UI": Layout,
  "Backend & Systems": Server,
  "Databases & Storage": Database,
  "DevOps & Tooling": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            04. Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Terminal;
          return (
            <div
              key={idx}
              className="zinc-card rounded-2xl p-5 space-y-3 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-emerald-400 border-b border-zinc-800/80 pb-2.5">
                <Icon className="w-4 h-4" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-750 text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
