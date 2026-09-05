// components/GithubSection.tsx
"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { GitHubCalendar, type Activity } from "react-github-calendar";

export default function GithubSection() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDarkMode = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        const svg = document.querySelector(".github-calendar-container svg");
        if (svg) {
          svg.setAttribute("preserveAspectRatio", "none");
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const theme = {
    light: [
      "#f4f4f5",
      "#d4d4d8",
      "#a1a1aa",
      "#52525b",
      "#18181b",
    ],
    dark: [
      "#18181b",
      "#3f3f46",
      "#71717a",
      "#a1a1aa",
      "#f4f4f5",
    ],
  };

  const handleDataTransform = (data: Activity[]): Activity[] => {
    const total = data.reduce((sum, day) => sum + day.count, 0);
    queueMicrotask(() => {
      setTotalCount(total);
    });
    return data;
  };

  return (
    <section id="github" className="space-y-4 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
          07. GitHub Activity
        </h2>
        <a
          href="https://github.com/iancarlogv21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
        >
          @IANCARLOGV21 ↗
        </a>
      </div>

      <div className="w-full github-calendar-container">
        {!isMounted ? (
          <div className="flex min-h-[150px] items-center justify-center">
            <span className="text-xs font-mono text-zinc-400">
              Loading contributions...
            </span>
          </div>
        ) : (
          <div className="w-full">
            <GitHubCalendar
              username="iancarlogv21"
              blockSize={11}
              blockMargin={5}
              fontSize={11}
              theme={theme}
              colorScheme={isDarkMode ? "dark" : "light"}
              transformData={handleDataTransform}
            />
          </div>
        )}
      </div>

      <div>
        <p className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-300 uppercase">
          {totalCount !== null ? `${totalCount.toLocaleString()} CONTRIBUTIONS IN THE LAST YEAR` : "LOADING CONTRIBUTIONS..."}
        </p>
      </div>

      <style jsx global>{`
        .github-calendar-container footer {
          display: none !important;
        }
        .github-calendar-container svg {
          width: 100% !important;
          height: auto !important;
        }
      `}</style>
    </section>
  );
}