// components/GithubSection.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { 
    ssr: false,
    loading: () => <div className="text-xs font-mono text-zinc-400 animate-pulse">Loading activity...</div>
  }
);

export default function GithubSection() {
  return (
    <div id="github" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">07. GitHub Activity</h2>
        <a 
          href="https://github.com/iancarlogv21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition tracking-wider"
        >
          iancarlogv21 ↗
        </a>
      </div>

      <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 flex justify-center overflow-hidden min-h-[140px] items-center">
        <div className="grayscale contrast-200 dark:invert opacity-90 w-full flex justify-center">
          <GitHubCalendar 
            username="iancarlogv21"
            blockSize={9}
            blockMargin={3}
            fontSize={11}
          />
        </div>
      </div>
    </div>
  );
}