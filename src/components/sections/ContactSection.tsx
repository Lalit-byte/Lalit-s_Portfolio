"use client";

import React, { useState } from "react";
import { Send, Copy, Check, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
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
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const currentPlaceholder =
    subjectOptions.find((s) => s.label === selectedSubject)?.placeholder ||
    "Hey Lalit, I've got this idea for...";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSendMail = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const bodyText = message.trim();
    if (!bodyText) {
      setFeedback({ type: "error", message: "Please type a message before sending." });
      return;
    }

    setIsSending(true);
    setFeedback({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          subject: selectedSubject,
          message: bodyText,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback({
          type: "success",
          message: "Message sent directly to Lalit's inbox! Thank you for reaching out.",
        });
        setMessage("");
        setSenderName("");
        setSenderEmail("");
      } else {
        // Fallback or API key missing error
        setFeedback({
          type: "error",
          message: data.error || "Failed to deliver email. Please check your Resend API key.",
        });
      }
    } catch {
      // Network error fallback
      setFeedback({
        type: "error",
        message: "Network error occurred while contacting the server.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleFallbackMailto = () => {
    const name = senderName.trim() || "Visitor";
    const body = message.trim() || "Hi Lalit, I would love to connect with you regarding an opportunity.";
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `${selectedSubject} - from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
  };

  return (
    <section
      id="contact"
      className="w-full relative z-10 pt-6 pb-10 sm:pt-8 sm:pb-12 overflow-hidden text-zinc-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                type="button"
                onClick={() => handleSendMail()}
                disabled={isSending}
                className="text-zinc-500 hover:text-zinc-200 transition disabled:opacity-40"
                title="Send Mail"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSendMail} className="p-5 sm:p-6 space-y-4 text-xs font-sans">
              {/* Feedback Alert if present */}
              {feedback.type === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-2.5 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feedback.message}</span>
                </div>
              )}

              {feedback.type === "error" && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 flex items-start justify-between gap-2 text-xs font-mono">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{feedback.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleFallbackMailto}
                    className="underline text-sky-400 hover:text-white shrink-0"
                  >
                    Send via Mail app
                  </button>
                </div>
              )}

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
                  type="button"
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

              {/* From: Row (Name) */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-zinc-800/80">
                <span className="text-zinc-500 font-medium w-12 text-xs">From:</span>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name or company"
                  className="flex-1 bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {/* Email: Row (Reply-To) */}
              <div className="flex items-center gap-3 pb-3.5 border-b border-zinc-800/80">
                <span className="text-zinc-500 font-medium w-12 text-xs">Email:</span>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="your.email@example.com (so I can reply back)"
                  className="flex-1 bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none font-mono text-[11.5px]"
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
                    type="submit"
                    disabled={isSending}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct inbox delivery</span>
                </span>
              </div>
            </form>
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
      </div>
    </section>
  );
}
