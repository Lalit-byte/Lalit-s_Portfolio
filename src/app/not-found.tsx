"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home after 3 seconds if an invalid path was entered
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-mono text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Page Not Found
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base max-w-md mb-8">
        The route you visited does not exist. Lalit Bisht&apos;s portfolio is located at the root address (<code className="text-emerald-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono">/</code>). Redirecting automatically in 3 seconds...
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
