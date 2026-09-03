// components/TechStack.tsx
"use client";

import React from "react";
import { playSound } from "@/utils/sound";

interface TechStackProps {
  onOpenAllTech?: () => void;
}

export default function TechStack({ onOpenAllTech }: TechStackProps) {
  const stack = [
    "PHP", "Laravel", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "MongoDB", "MySQL", "Tailwind CSS", "Flutter", "TypeScript"
  ];

  return (
    <section id="tech-stack" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">04 — stack</h2>
        {onOpenAllTech && (
          <button
            onClick={() => {
              playSound('click');
              onOpenAllTech();
            }}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
          >
            view all →
          </button>
        )}
      </div>

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 shadow-sm">
        <div className="flex flex-wrap gap-2.5">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 active:border-zinc-400 dark:active:border-zinc-600 transition shadow-sm cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}