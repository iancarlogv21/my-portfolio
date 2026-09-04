// components/GithubSection.tsx
"use client";

import React, { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubSection() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDarkMode = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const customTheme = {
    light: ['#f4f4f5', '#e4e4e7', '#a1a1aa', '#52525b', '#18181b'],
    dark: ['#18181b', '#27272a', '#52525b', '#a1a1aa', '#f4f4f5'],
  };

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

      <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 flex flex-col items-center justify-center overflow-x-auto min-h-[140px]">
        {!isMounted ? (
          <div className="text-xs font-mono text-zinc-400 animate-pulse py-4">Loading activity...</div>
        ) : (
          <div className="w-full flex justify-center">
            <GitHubCalendar 
              username="iancarlogv21"
              blockSize={9}
              blockMargin={3}
              fontSize={11}
              theme={customTheme}
              colorScheme={isDarkMode ? "dark" : "light"}
            />
          </div>
        )}
      </div>
    </div>
  );
}