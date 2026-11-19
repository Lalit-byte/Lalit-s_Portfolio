"use client";

import React, { useState, useEffect } from "react";
import { VolumeX } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      setLiveTime(now.toLocaleTimeString("en-US", options) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnbloat = () => {
    alert("✨ Pure, lightweight Next.js architecture: Zero runtime bloat, ultra-smooth interactions!");
  };

  return (
    <footer className="w-full relative z-10 py-10 border-t border-zinc-800/80 text-zinc-400 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        {/* Sound Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-750 text-zinc-300 text-xs font-mono shadow-xs hover:bg-zinc-800 hover:text-white transition flex items-center gap-2 active:scale-95"
          >
            {soundEnabled ? (
              <>
                <span className="flex items-end gap-0.5 h-3 w-3">
                  <span className="w-0.5 bg-blue-500 rounded-full h-1.5 animate-pulse" />
                  <span className="w-0.5 bg-blue-500 rounded-full h-3" />
                  <span className="w-0.5 bg-blue-500 rounded-full h-2 animate-pulse" />
                </span>
                <span>sound on</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                <span>sound off</span>
              </>
            )}
          </button>
        </div>

        {/* Center Monogram & Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-zinc-400 font-sans">
          <span className="font-semibold text-zinc-200">© {personalInfo.name}</span>
          <span>·</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline underline-offset-2"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline underline-offset-2"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-white transition underline underline-offset-2"
          >
            Email
          </a>
          <span className="text-zinc-500 hidden sm:inline">· 📍 Dehradun</span>
          {liveTime && <span className="text-zinc-500 hidden md:inline">{liveTime}</span>}
        </div>

        {/* Right Tagline & Unbloat */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-zinc-500 hidden xl:inline">
            Built with Next.js and a few too many component libraries.
          </span>
          <button
            onClick={handleUnbloat}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-750 text-zinc-300 text-xs font-mono shadow-xs hover:bg-zinc-800 hover:text-white transition active:scale-95"
            title="Minimalist UI toggle"
          >
            Unbloat
          </button>
        </div>
      </div>
    </footer>
  );
}
