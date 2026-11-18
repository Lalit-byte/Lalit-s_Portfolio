"use client";

import React from "react";
import { honorsList } from "@/data/portfolioData";
import { Trophy, Medal } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 sm:py-16 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Trophy className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            05. Honors &amp; Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Extracurricular Achievements
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {honorsList.map((honor, idx) => (
          <div
            key={idx}
            className="zinc-card rounded-2xl p-6 border border-zinc-800 hover:border-amber-500/30 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Medal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {honor.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {honor.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {honor.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                    {honor.badge}
                  </span>
                )}
                <span className="text-xs font-mono text-zinc-500">{honor.year}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mt-3">
              {honor.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
