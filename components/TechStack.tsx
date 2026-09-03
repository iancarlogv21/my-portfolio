"use client";

import React from "react";

interface TechStackProps {
  onOpenAllTech?: () => void;
}

export default function TechStack({ onOpenAllTech }: TechStackProps) {
  const frontendSkills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "jQuery & AJAX"
  ];

  return (
    <section id="tech-stack" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">03 — Technical & Design Stack</h2>
        {onOpenAllTech && (
          <button
            onClick={onOpenAllTech}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-1 uppercase tracking-wider cursor-pointer"
          >
            View All →
          </button>
        )}
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 shadow-sm space-y-4">
        <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">Frontend Development</h3>
        <div className="flex flex-wrap gap-2.5">
          {frontendSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}