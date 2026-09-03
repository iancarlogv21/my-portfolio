// components/RecommendationsModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";

interface RecommendationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecommendationsModal({ isOpen, onClose }: RecommendationsModalProps) {
  if (!isOpen) return null;

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
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 bg-white dark:bg-zinc-950 z-50 overflow-y-auto p-4 md:p-16 animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">06 — recommendations</h1>
            <p className="text-xs text-zinc-500 font-mono mt-1">Endorsements from mentors, leaders, and colleagues.</p>
          </div>
          <button 
            onClick={onClose} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, i) => (
            <div key={i} className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-4 shadow-sm">
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">&ldquo;{rec.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {rec.initials}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{rec.name}</h3>
                  <p className="text-xs font-mono text-zinc-400">{rec.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}