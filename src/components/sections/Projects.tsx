"use client";

import React from "react";
import { projects } from "@/data/portfolioData";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { FolderCode, Github, ExternalLink, Zap } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <FolderCode className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            03. Engineering Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj) => (
          <SpotlightCard
            key={proj.id}
            className={`flex flex-col justify-between ${
              proj.featured ? "md:col-span-2 border-emerald-500/20" : ""
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  {proj.category}
                </span>

                <div className="flex items-center gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
                      title="View GitHub Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-emerald-400/90 mt-1">
                  {proj.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {proj.description}
              </p>

              {proj.metrics && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/90 border border-zinc-700 text-xs font-mono text-emerald-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{proj.metrics}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-zinc-800/80 mt-4 flex flex-wrap gap-1.5">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-750 text-[11px] font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
