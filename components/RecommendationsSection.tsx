// components/RecommendationsSection.tsx
"use client";

import React from "react";

interface RecommendationsSectionProps {
  onOpenModal: () => void;
}

export default function RecommendationsSection({ onOpenModal }: RecommendationsSectionProps) {
  const recommendations = [
    {
      name: "Henry Aguda",
      role: "Secretary, Department of Information and Communications Technology (DICT)",
      initials: "HA",
      text: "Ian, I believe, would be the next Philippine unicorn. He is technically skilled and demonstrates remarkable dedication to full-stack engineering."
    },
    {
      name: "Joshua Shailes",
      role: "Senior AI Data Scientist",
      initials: "JS",
      text: "It was a real pleasure to work with Ian. He's not only a fantastic professional who consistently delivers high-quality work, but he's also an amazing person to have on the team."
    },
    {
      name: "Cris Lawrence Adrian Militante",
      role: "Integrations Product Lead",
      initials: "CM",
      text: "Ian was the most talented software engineer I've mentored in a long time. He's a fast learner, and he always makes sure to deliver quality output."
    }
  ];

  return (
    <section id="recommendations" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">06 — recommendations</h2>
        <button
          onClick={onOpenModal}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          all recommendations →
        </button>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-4 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition">
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">&ldquo;{rec.text}&rdquo;</p>
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