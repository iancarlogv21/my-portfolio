// components/ExperienceSection.tsx
"use client";

import React from "react";
import { playSound } from "@/utils/sound";

interface ExperienceSectionProps {
  onOpenModal: () => void;
}

export default function ExperienceSection({ onOpenModal }: ExperienceSectionProps) {
  const experiences = [
    {
      year: "2026",
      role: "BS Information Technology — 4th Year",
      company: "Institute of Information Technology, CCSFP",
    },
    {
      year: "2026",
      role: "Capstone Project",
      company: "FONZO AutoService",
    },
    {
      year: "2025",
      role: "Advanced Systems & Case Studies",
      company: "FELMS & Full-Stack Systems",
    },
    {
      year: "2024",
      role: "Design and UI Portals",
      company: "Immersive Web Concepts",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
          03 — Experience
        </h2>
        <button
          onClick={() => {
            playSound('click');
            onOpenModal();
          }}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          Full History →
        </button>
      </div>

      <div 
        onClick={() => {
          playSound('click');
          onOpenModal();
        }}
        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-4 md:p-6 space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 active:border-zinc-400 dark:active:border-zinc-600 transition cursor-pointer"
      >
        {experiences.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-3 border-b border-zinc-200 dark:border-zinc-800/60 last:border-none last:pb-0 group"
          >
            <div className="flex items-center gap-3 sm:w-20 shrink-0">
              <span className="text-xs font-mono text-zinc-400">{item.year}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition truncate">
                {item.role}
              </h3>
            </div>

            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 sm:text-right truncate">
              {item.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}