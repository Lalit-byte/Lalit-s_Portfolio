"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Stack", href: "#tech-stack" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Academics", href: "#education-glories" },
  { label: "Activity", href: "#heatmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("tech-stack");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tech-stack", "work", "projects", "education-glories", "heatmap", "contact"];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4">
      <nav className="nav-glass rounded-full px-5 py-2.5 flex items-center justify-between gap-4 sm:gap-6 max-w-2xl w-full">
        {/* Monogram */}
        <a href="#hero" className="font-bold text-sm tracking-tight text-white flex items-center gap-1 group">
          <span className="font-mono text-emerald-400 font-semibold">&lt;</span>
          <span>lalit.dev</span>
          <span className="font-mono text-emerald-400 font-semibold">/&gt;</span>
        </a>

        {/* Jump Links */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
