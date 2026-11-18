"use client";

import React from "react";
import { X, Download, FileText, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="zinc-card max-w-lg w-full rounded-2xl p-6 space-y-4 border border-zinc-700 shadow-2xl relative">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-white font-mono">Lalit_Bisht_Resume.pdf</h3>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-base transition p-1 rounded-md hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Candidate:</span>
            <span className="text-white">{personalInfo.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Current Role:</span>
            <span>Software Developer Intern @ Technogetic Pvt Ltd.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Education:</span>
            <span>MCA @ DIT University (8.23 CGPA)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Certifications:</span>
            <span>NIELIT &apos;A&apos; Level &amp; NIELIT &apos;O&apos; Level</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Honors:</span>
            <span>Two-Time Runner Up, Sphurti University Basketball 🏀</span>
          </div>
          <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 leading-relaxed font-sans">
            Specialized in Next.js, TypeScript, Node.js, PostgreSQL, Docker, and Real-Time Systems.
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800 flex justify-end gap-2.5">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition"
          >
            Close
          </button>
          <a
            href="/Lalit_Bisht_Resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs font-mono flex items-center gap-1.5 transition shadow-md active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
