"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function EducationAndCampusGlories() {
  return (
    <section id="education-glories" className="py-12 sm:py-16 relative">
      {/* Header bar matching Image 2 */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6 select-none">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-200">
          EDUCATION &amp; CAMPUS GLORIES
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          Academics · Honors · Athletics
        </span>
      </div>

      {/* 2-Column Asymmetric Grid matching Image 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Column: Education */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Top Card: MCA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="zinc-card rounded-2xl p-5 sm:p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                8.23 CGPA
              </span>
              <span className="text-xs font-mono text-zinc-500">2023 – 2025</span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight mt-3">
              MCA (Masters in Computer Applications)
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1">
              DIT University, Dehradun, India
            </p>
          </motion.div>

          {/* Bottom Sub-grid: NIELIT 'A' & 'O' Level Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="zinc-card rounded-2xl p-4 sm:p-5 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider">
                Government Certified
              </span>
              <h4 className="text-sm font-bold text-white tracking-tight mt-1">
                NIELIT &apos;A&apos; Level
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-1">
                DSA, OS, Networks &amp; Security
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="zinc-card rounded-2xl p-4 sm:p-5 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                Foundational
              </span>
              <h4 className="text-sm font-bold text-white tracking-tight mt-1">
                NIELIT &apos;O&apos; Level
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-1">
                Web Dev, HTML, CSS &amp; JS
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Campus Glories & Athletics */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Top Card: Sphurti Basketball */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="zinc-card rounded-2xl p-5 sm:p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-200 relative overflow-hidden"
          >
            <div className="flex items-center gap-2">
              <span className="text-base select-none">🏀</span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                Two-Time Runner Up
              </span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight mt-2.5">
              Sphurti University Sports Fest
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mt-2">
              Secured Runner-Up position twice in the basketball championship. Demonstrated team leadership, athletic discipline, tactical composure, and endurance in high-pressure finals.
            </p>
          </motion.div>

          {/* Bottom Card: Technical Leadership & Peer Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="zinc-card rounded-2xl p-4 sm:p-5 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className="text-sm font-bold tracking-tight">
                Technical Leadership &amp; Peer Hackathons
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2">
              Active contributor in university hackathons and full-stack development initiatives with peer developers at DIT University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
