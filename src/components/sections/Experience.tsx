"use client";

import React from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="work" className="py-12 sm:py-16 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Briefcase className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            01. Career
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 timeline-node" />

            <div className="zinc-card rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white tracking-tight">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                        Present
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-emerald-400 mt-0.5">{exp.company}</p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-1 select-none font-mono">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/80 text-[11px] font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
