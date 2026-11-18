"use client";

import React, { useEffect, useState } from "react";
import { SiX, SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaRegFileLines } from "react-icons/fa6";

interface MacDockProps {
  onOpenResume: () => void;
}

export default function MacDock({ onOpenResume }: MacDockProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    {
      label: "GitHub",
      href: "https://github.com/Lalit-byte",
      external: true,
      icon: SiGithub,
      bg: "bg-zinc-800",
      text: "text-white",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/lalit-bisht-b5285b269",
      external: true,
      icon: FaLinkedinIn,
      bg: "bg-[#0A66C2]",
      text: "text-white",
    },
    {
      label: "Twitter",
      href: "https://x.com",
      external: true,
      icon: SiX,
      bg: "bg-black border border-zinc-700/80",
      text: "text-white",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      external: true,
      icon: SiInstagram,
      bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      text: "text-white",
    },
  ];

  return (
    <div
      className={`transition-all duration-500 z-40 ${
        isScrolled
          ? "fixed right-4 top-1/2 -translate-y-1/2 flex flex-col p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-750 backdrop-blur-xl shadow-2xl gap-2.5 scale-100 opacity-100"
          : "relative flex flex-row items-center justify-center p-2 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md gap-2.5 w-fit mx-auto mt-6"
      }`}
    >
      {dockItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-xl ${item.bg} ${item.text} shadow-md transition-all duration-200 hover:scale-115 active:scale-95`}
            title={item.label}
          >
            <Icon className="w-4 h-4" />
            {/* Tooltip */}
            <span
              className={`pointer-events-none absolute font-mono text-[11px] whitespace-nowrap rounded-md bg-zinc-900 border border-zinc-700 px-2.5 py-1 text-zinc-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50 ${
                isScrolled
                  ? "right-full mr-3 top-1/2 -translate-y-1/2"
                  : "-top-9 left-1/2 -translate-x-1/2"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}

      {/* Resume PDF Action with react-icons FaRegFileLines */}
      <button
        onClick={onOpenResume}
        className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 shadow-md transition-all duration-200 hover:scale-115 active:scale-95"
        title="View Resume"
      >
        <FaRegFileLines className="w-4 h-4 text-zinc-950" />
        <span
          className={`pointer-events-none absolute font-mono text-[11px] whitespace-nowrap rounded-md bg-zinc-900 border border-zinc-700 px-2.5 py-1 text-zinc-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50 ${
            isScrolled
              ? "right-full mr-3 top-1/2 -translate-y-1/2"
              : "-top-9 left-1/2 -translate-x-1/2"
          }`}
        >
          View Resume
        </span>
      </button>
    </div>
  );
}
