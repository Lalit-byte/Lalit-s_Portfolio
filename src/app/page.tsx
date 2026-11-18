"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import CurrentStatus from "@/components/sections/CurrentStatus";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import EducationAndCampusGlories from "@/components/sections/EducationAndCampusGlories";
import GitHubHeatmap from "@/components/sections/GitHubHeatmap";
import FolderPhysicsCanvas from "@/components/canvas/FolderPhysicsCanvas";
import ContactSection from "@/components/sections/ContactSection";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Floating Top Glass Navigation */}
      <Navbar />

      {/* Main Content Column (60% to 65% Viewport Width, matching Sumit Chaubey aesthetic) */}
      <main className="relative z-10 w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto space-y-0">
        {/* 1. Hero / First Page (with macOS Dock at section end) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Technical Stack (Matching Image 1: 3x6 Grid with AWS-AIDLC & Postman) */}
        <TechStack />

        {/* 3. Current Status */}
        <CurrentStatus />

        {/* 4. Work Experience */}
        <Experience />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. Education & Campus Glories (Matching Image 2: DIT MCA, NIELIT & Sphurti Basketball) */}
        <EducationAndCampusGlories />

        {/* 7. GitHub Contributions & Activity (Matching Image 3: 3 Stats Cards + Heatmap + Links) */}
        <GitHubHeatmap />
      </main>

      {/* 8. Grand Centered macOS Blue Folder Name Canvas ("Lalit Bisht") */}
      <FolderPhysicsCanvas />

      {/* 9. macOS Mail Window & Get in Touch Contact Section (Unified Dark Theme) */}
      <ContactSection />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
