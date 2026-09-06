// components/RecommendationsSection.tsx
"use client";

import React from "react";
import { playSound } from "@/utils/sound";

interface RecommendationsSectionProps {
  onOpenModal: () => void;
}

export default function RecommendationsSection({ onOpenModal }: RecommendationsSectionProps) {
  const recommendations = [
    {
      name: "Ver Garcia",
      role: "Backend & Database Architect",
      initials: "VG",
      text: "Working alongside Ian on our 4-member capstone team has been seamless. His mastery of full-stack architecture kept our workshop intelligence system on track."
    },
    {
      name: "Ryan Tadeo",
      role: "Frontend & UI Engineer",
      initials: "RT",
      text: "Ian brings incredible technical discipline and drive to our team. Whenever we ran into tough workflow automation bugs, he always stepped up with clean solutions."
    },
    {
      name: "Ruel Mercado",
      role: "Systems Architect Partner",
      initials: "RM",
      text: "Collaborating with Ian showed me how detail-oriented and resourceful he is when tackling complex backend logic and databases."
    }
  ];

  return (
    <section id="recommendations" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">06 — recommendations</h2>
        <button
          onClick={() => {
            playSound('click');
            onOpenModal();
          }}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition uppercase tracking-wider cursor-pointer self-start sm:self-auto"
        >
          all recommendations →
        </button>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-4 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 active:border-zinc-500 transition">
            <p 
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              &ldquo;{rec.text}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                {rec.initials}
              </div>
              <div>
                <h3 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{rec.name}</h3>
                <p className="text-[10px] font-mono text-zinc-400">{rec.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}