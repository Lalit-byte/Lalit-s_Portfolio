"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown, Mail, FileText, MapPin } from "lucide-react";
import MacDock from "@/components/layout/MacDock";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="hero" className="pt-28 pb-12 sm:pt-36 sm:pb-16 flex flex-col items-center text-center relative z-10">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-6 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>{personalInfo.status}</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </span>
      </h1>

      <p className="mt-3 text-lg sm:text-xl font-medium text-zinc-300 max-w-xl">
        {personalInfo.role} at{" "}
        <span className="text-emerald-400 font-semibold">{personalInfo.company}</span>
      </p>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mt-2">
        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
        <span>{personalInfo.location}</span>
      </div>

      {/* Bio Paragraph */}
      <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-sans">
        {personalInfo.bio}
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono transition shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center gap-2"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 border border-zinc-700 text-xs font-mono transition active:scale-95 flex items-center gap-2"
        >
          <Mail className="w-3.5 h-3.5 text-sky-400" />
          <span>Get In Touch</span>
        </a>

        <button
          onClick={onOpenResume}
          className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-mono transition active:scale-95 flex items-center gap-2"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-400" />
          <span>Resume</span>
        </button>
      </div>

      {/* Interactive macOS Dock inside the end of the First (Hero) Section */}
      <div className="mt-8 w-full flex justify-center">
        <MacDock onOpenResume={onOpenResume} />
      </div>

      {/* Section Divider */}
      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
