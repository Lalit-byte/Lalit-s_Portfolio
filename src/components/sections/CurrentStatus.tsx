"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Briefcase, MapPin, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function CurrentStatus() {
  return (
    <section id="status" className="py-8 sm:py-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="zinc-card rounded-2xl p-5 sm:p-6 border border-zinc-800/90 relative overflow-hidden"
      >
        {/* Ambient subtle glow in top right */}
        <div className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                  CURRENT STATUS
                </h2>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-mono mt-0.5">
                Active &amp; Open to High-Impact Engineering Roles
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dehradun, India</span>
          </div>
        </div>

        {/* Status Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-zinc-500 uppercase text-[10px] tracking-wider">Role</span>
            <div className="flex items-center gap-1.5 text-zinc-200 font-semibold font-sans">
              <Briefcase className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Software Dev Intern</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">@ Technogetic Pvt Ltd.</p>
          </div>

          <div className="space-y-1">
            <span className="text-zinc-500 uppercase text-[10px] tracking-wider">Primary Stack</span>
            <div className="flex items-center gap-1.5 text-zinc-200 font-semibold font-sans">
              <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Next.js · TypeScript · Node</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">PostgreSQL · AWS-AIDLC</p>
          </div>

          <div className="space-y-1">
            <span className="text-zinc-500 uppercase text-[10px] tracking-wider">Current Focus</span>
            <div className="flex items-center gap-1.5 text-zinc-200 font-semibold font-sans">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Full-Stack &amp; Scalable Systems</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">Building low-latency apps</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full border-b border-zinc-800/80 mt-10 sm:mt-12" />
    </section>
  );
}
