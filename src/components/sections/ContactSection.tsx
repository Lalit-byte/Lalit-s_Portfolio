"use client";

import React, { useState, useEffect } from "react";
import { Send, Calendar, Copy, Check, VolumeX } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const subjectOptions = [
  { label: "A project idea", placeholder: "Hey Lalit, I've got this idea for..." },
  { label: "Freelance work", placeholder: "Hey Lalit, we are looking for a developer to help us build..." },
  { label: "A full-time role", placeholder: "Hey Lalit, we came across your portfolio and have an engineering opportunity..." },
  { label: "Just saying hi", placeholder: "Hey Lalit, loved your portfolio and wanted to connect!" },
];

export default function ContactSection() {
  const [selectedSubject, setSelectedSubject] = useState("A project idea");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
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

  const currentPlaceholder =
    subjectOptions.find((s) => s.label === selectedSubject)?.placeholder ||
    "Hey Lalit, I've got this idea for...";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSendMail = () => {
    const name = senderName.trim() || "Visitor";
    const body = message.trim() || "Hi Lalit, I would love to connect with you regarding an opportunity.";
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `${selectedSubject} - from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
  };

  const handleUnbloat = () => {
    alert("✨ Pure, lightweight Next.js architecture: Zero runtime bloat, ultra-smooth interactions!");
  };

  return (
    <section
      id="contact"
      className="w-full relative z-10 py-16 sm:py-24 border-t border-zinc-800/80 overflow-hidden text-zinc-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Pill Badge (Dark Glass matching theme) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-750 shadow-lg">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white text-[11px] font-bold overflow-hidden shadow-inner">
              L
            </div>
            <span className="text-xs font-semibold text-zinc-200 tracking-tight">
              {personalInfo.name}
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-1 mb-8 sm:mb-10 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Got something fun to build?
          </h2>
        </div>

        {/* Main Layout: Wide Dark macOS Mail Window + Accent Yellow Sticky Note */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* macOS Mail Window (Dark Zinc Theme) */}
          <div className="w-full lg:flex-1 max-w-2xl rounded-2xl bg-zinc-900/90 text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden border border-zinc-750/90 backdrop-blur-xl transition-all">
            {/* Window Header bar */}
            <div className="px-4 py-3 bg-zinc-850/90 border-b border-zinc-800 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-2xs" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-2xs" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-2xs" />
              </div>
              <span className="text-xs font-semibold text-zinc-400 font-sans tracking-tight">
                New Message
              </span>
              <button
                onClick={handleSendMail}
                className="text-zinc-500 hover:text-zinc-200 transition"
                title="Send Mail"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="p-5 sm:p-6 space-y-4 text-xs font-sans">
              {/* To: Row */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-zinc-500 font-medium w-12 text-xs">To:</span>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sky-400 text-xs font-medium">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold">
                      L
                    </div>
                    <span className="font-semibold text-zinc-200">{personalInfo.name}</span>
                  </div>
                  <span className="text-zinc-400 text-xs font-mono">{personalInfo.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-zinc-800 transition active:scale-95"
                  title="Copy Email"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Subject: Row */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-zinc-800/80 flex-wrap">
                <span className="text-zinc-500 font-medium w-12 text-xs">Subject:</span>
                <div className="flex flex-wrap gap-2 items-center">
                  {subjectOptions.map((subj) => {
                    const isSelected = selectedSubject === subj.label;
                    return (
                      <button
                        key={subj.label}
                        type="button"
                        onClick={() => setSelectedSubject(subj.label)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition active:scale-95 ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-xs font-semibold"
                            : "border border-zinc-750 bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 hover:text-white"
                        }`}
                      >
                        {subj.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* From: Row */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-zinc-800/80">
                <span className="text-zinc-500 font-medium w-12 text-xs">From:</span>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name"
                  className="flex-1 bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {/* Message Area */}
              <div className="pt-1">
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={currentPlaceholder}
                  className="w-full bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed font-sans"
                />
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSendMail}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Quick%2015-minute%20intro%20call`}
                    className="px-3.5 py-2 rounded-xl border border-zinc-750 bg-zinc-800/80 hover:bg-zinc-750 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Or grab 15 minutes</span>
                  </a>
                </div>
                <span className="text-[11px] text-zinc-500 font-sans">
                  Opens in your mail app
                </span>
              </div>
            </div>
          </div>

          {/* Yellow Sticky Note (Accented physical desk artifact) */}
          <div className="w-full lg:w-72 sticky-note p-6 rounded-xs relative shrink-0 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-amber-300/30">
            {/* Frosted Tape */}
            <div className="tape-strip w-16 h-5 absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-[1px] rotate-[-1deg]" />
            <p className="text-[11px] font-bold tracking-wider uppercase text-amber-800/80 mb-2 font-mono">
              PSST
            </p>
            <p className="text-sm leading-relaxed text-[#713F12] font-medium font-sans">
              A rough idea is plenty. Working out what it should be is{" "}
              <mark className="bg-[#FDE047] text-[#713F12] px-1 py-0.5 rounded-xs font-semibold">
                half the fun
              </mark>{" "}
              and we can do that part together.
            </p>
            {/* Dog-ear fold */}
            <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none overflow-hidden">
              <div className="w-7 h-7 bg-amber-300 shadow-xs transform rotate-45 translate-x-3.5 translate-y-3.5" />
            </div>
          </div>
        </div>

        {/* Footer (Dark theme matching other sections) */}
        <footer className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs select-none text-zinc-400">
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
        </footer>
      </div>
    </section>
  );
}
