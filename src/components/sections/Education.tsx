"use client";

import React from "react";
import { educationList } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            02. Academics &amp; Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="zinc-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-600" />
                  {edu.period}
                </span>
                {edu.grade && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {edu.grade}
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-emerald-400">{edu.institution}</p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans border-t border-zinc-800/80 pt-3">
              {edu.details}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
