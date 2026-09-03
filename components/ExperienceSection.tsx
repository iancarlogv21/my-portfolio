// components/ExperienceSection.tsx
"use client";

import React from "react";

interface ExperienceSectionProps {
  onOpenModal: () => void;
}

export default function ExperienceSection({ onOpenModal }: ExperienceSectionProps) {
  const compactExperiences = [
    { year: "2026", role: "BS Information Technology — 4th Year", company: "City College of San Fernando" },
    { year: "2026", role: "OJT / Internship & Industry Practice", company: "FONZO Calibration and Car Services" },
    { year: "2025", role: "Capstone Project Developer", company: "FELMS & Full-Stack Systems" },
    { year: "2024", role: "Programming Foundations & UI Concepts", company: "Self-Driven & Academic" }
  ];

  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">03 — experience</h2>
        <button
          onClick={onOpenModal}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          full history →
        </button>
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 overflow-hidden shadow-sm">
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {compactExperiences.map((exp, index) => (
            <div key={index} className="flex items-center justify-between px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition">
              <span className="text-xs font-mono text-zinc-400 w-24 shrink-0">{exp.year}</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex-1">{exp.role}</span>
              <span className="text-xs font-mono text-zinc-500 text-right shrink-0 pl-4">{exp.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}