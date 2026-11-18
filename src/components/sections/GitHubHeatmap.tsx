"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Flame, User, ExternalLink, ArrowRight, Github } from "lucide-react";

interface DayCell {
  level: number;
  count: number;
  date: string;
}

export default function GitHubHeatmap() {
  const [hoverText, setHoverText] = useState<string>("Hover over any day to see activity");
  const [reposCount, setReposCount] = useState<number>(21);
  const [totalContributions, setTotalContributions] = useState<number>(184);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // GitHub contribution color scheme (Dark mode)
  const colors = ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"];
  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

  // Default baseline 52 weeks of contributions
  const [weeks, setWeeks] = useState<DayCell[][]>(() => {
    const grid: DayCell[][] = [];
    const today = new Date();
    for (let w = 51; w >= 0; w--) {
      const col: DayCell[] = [];
      for (let d = 0; d < 7; d++) {
        const dateObj = new Date(today);
        dateObj.setDate(today.getDate() - (w * 7 + (6 - d)));
        const dateStr = dateObj.toISOString().split("T")[0];
        // Subtle baseline distribution
        const rand = (w * 7 + d) % 11;
        const level = rand > 8 ? 2 : rand > 5 ? 1 : 0;
        const count = level === 2 ? 3 : level === 1 ? 1 : 0;
        col.push({ level, count, date: dateStr });
      }
      grid.push(col);
    }
    return grid;
  });

  // Method 1: Fetch live GitHub statistics & calendar data on mount
  useEffect(() => {
    let isMounted = true;

    async function fetchLiveGitHub() {
      try {
        // 1. Fetch public profile stats
        fetch("https://api.github.com/users/Lalit-byte")
          .then((res) => (res.ok ? res.json() : null))
          .then((userData) => {
            if (userData && isMounted && typeof userData.public_repos === "number") {
              setReposCount(userData.public_repos);
            }
          })
          .catch(() => {});

        // 2. Fetch live contribution calendar
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/Lalit-byte?y=last");
        if (!res.ok) return;
        const data = await res.json();

        if (data && data.contributions && Array.isArray(data.contributions) && isMounted) {
          const days: { date: string; count: number; level: number }[] = data.contributions;

          if (data.total && typeof data.total.lastYear === "number") {
            setTotalContributions(data.total.lastYear);
          } else {
            const sum = days.reduce((acc, curr) => acc + (curr.count || 0), 0);
            setTotalContributions(sum);
          }

          // Group into 7-day columns (weeks)
          const cols: DayCell[][] = [];
          let currentWeek: DayCell[] = [];

          days.forEach((day) => {
            currentWeek.push({
              level: Math.min(4, Math.max(0, day.level || 0)),
              count: day.count || 0,
              date: day.date,
            });
            if (currentWeek.length === 7) {
              cols.push(currentWeek);
              currentWeek = [];
            }
          });
          if (currentWeek.length > 0) {
            cols.push(currentWeek);
          }

          // Keep the last 52 weeks
          setWeeks(cols.slice(-52));
          setIsLoading(false);
        }
      } catch (err) {
        console.warn("GitHub live contributions fetch fallback", err);
      }
    }

    fetchLiveGitHub();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatDayTooltip = (cell: DayCell) => {
    try {
      const d = new Date(cell.date);
      const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      return `${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${formatted}`;
    } catch {
      return `${cell.count} contributions on ${cell.date}`;
    }
  };

  return (
    <section id="heatmap" className="py-12 sm:py-16 relative">
      {/* Header bar matching Image 3 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4 mb-6 select-none">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
            <Github className="w-4 h-4" />
          </div>
          <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-200">
            GITHUB CONTRIBUTIONS &amp; ACTIVITY
          </h2>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live GitHub Feed {isLoading ? "(Connecting...)" : "(@Lalit-byte)"}</span>
        </div>
      </div>

      {/* Top 3 Metric Cards matching Image 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {/* Card 1: REPOS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="zinc-card rounded-2xl p-5 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700 transition"
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-wider">REPOS</span>
            <FolderGit2 className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-white font-mono">{reposCount}</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">Public repositories</p>
        </motion.div>

        {/* Card 2: STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="zinc-card rounded-2xl p-5 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700 transition"
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-wider">STATUS</span>
            <Flame className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold text-emerald-400 font-sans">Active</span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">Regular commits</p>
        </motion.div>

        {/* Card 3: PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="zinc-card rounded-2xl p-5 flex flex-col justify-between border border-zinc-800 hover:border-zinc-700 transition"
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-wider">PROFILE</span>
            <User className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="my-2">
            <a
              href="https://github.com/Lalit-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-extrabold text-white font-mono truncate hover:text-emerald-400 transition"
            >
              @Lalit-byte
            </a>
          </div>
          <p className="text-xs text-zinc-400 font-sans">Open Source builder</p>
        </motion.div>
      </div>

      {/* Main Contribution Heatmap Card matching Image 3 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="zinc-card rounded-2xl p-5 sm:p-6 border border-zinc-800 space-y-4"
      >
        {/* Card Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Contribution Heatmap
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">Past 12 Months</span>
        </div>

        {/* Dynamic Tooltip status bar */}
        <div className="text-xs font-mono text-zinc-400 flex justify-between items-center bg-zinc-950/40 px-3 py-1.5 rounded-lg border border-zinc-800/50">
          <span>{hoverText}</span>
          <span className="text-emerald-400 font-bold">{totalContributions} commits in past year</span>
        </div>

        {/* Months Label row */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="min-w-[700px] flex justify-between text-[11px] font-mono text-zinc-500 pl-8 pr-2 mb-1">
            {months.map((m, idx) => (
              <span key={idx}>{m}</span>
            ))}
          </div>

          {/* Grid with Day of week labels on left */}
          <div className="flex gap-2 min-w-[700px]">
            {/* Days labels */}
            <div className="flex flex-col justify-between text-[10px] font-mono text-zinc-500 py-0.5 select-none w-6">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* 52 Columns of 7 Days */}
            <div className="flex gap-1 flex-1 justify-between">
              {weeks.map((col, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {col.map((cell, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoverText(formatDayTooltip(cell))}
                      onMouseLeave={() => setHoverText("Hover over any day to see activity")}
                      className="w-2.5 h-2.5 rounded-[2px] transition-transform hover:scale-135 cursor-pointer"
                      style={{
                        backgroundColor: colors[cell.level] || colors[0],
                        border: cell.level === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      }}
                      title={formatDayTooltip(cell)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Track matching Image 3 */}
          <div className="mt-4 flex items-center justify-between text-zinc-600 px-1">
            <span className="text-xs select-none">◀</span>
            <div className="h-1 flex-1 mx-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-600 rounded-full w-2/3" />
            </div>
            <span className="text-xs select-none">▶</span>
          </div>
        </div>

        {/* Heatmap Footer Legend Bar matching Image 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-zinc-800/80 gap-2 text-xs font-mono text-zinc-400">
          <span>Real-time commit records via GitHub</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            {colors.map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-[2px] inline-block"
                style={{ backgroundColor: c }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Navigation Links matching Image 3 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 text-xs font-mono">
        <a
          href="https://github.com/Lalit-byte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-300 hover:text-white transition group"
        >
          <Github className="w-4 h-4 text-purple-400" />
          <span className="group-hover:underline">View full GitHub activity (@Lalit-byte)</span>
          <ExternalLink className="w-3 h-3 text-zinc-500" />
        </a>

        <a
          href="https://github.com/Lalit-byte?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition group"
        >
          <span className="group-hover:underline">Browse all repositories</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="w-full border-b border-zinc-800/80 mt-12 sm:mt-16" />
    </section>
  );
}
