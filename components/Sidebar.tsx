// components/Sidebar.tsx
"use client";

import React from "react";
import { Sun, Moon, Terminal } from "lucide-react";

interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  setIsTypingOpen: (val: boolean) => void;
  onOpenProjects: () => void;
  onOpenDesigns: () => void;
  onOpenTech: () => void;
  onOpenCerts: () => void;
  onGoHome: () => void;
}

export default function Sidebar({ 
  isDarkMode, 
  setIsDarkMode, 
  setIsTypingOpen,
  onOpenProjects,
  onOpenDesigns,
  onOpenTech,
  onOpenCerts,
  onGoHome
}: SidebarProps) {
  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between h-screen sticky top-0 bg-white dark:bg-zinc-950 transition-colors duration-200 select-none z-50">
      <div className="space-y-8">
        {/* Profile Branding / Home Trigger */}
        <div 
          onClick={onGoHome}
          className="cursor-pointer group text-left"
        >
          <h1 className="font-mono font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition">Ian Carlo G. Ventura</h1>
          <p className="text-[11px] font-mono text-zinc-400">Full-Stack Web Developer</p>
        </div>

        {/* Navigation Links mapped to Modals / Home */}
        <nav className="space-y-2 font-mono text-xs">
          <button 
            onClick={onGoHome}
            className="block text-left w-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={onOpenProjects}
            className="block text-left w-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            Projects & Systems
          </button>
          <button 
            onClick={onOpenDesigns}
            className="block text-left w-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            UI / Web Designs
          </button>
          <button 
            onClick={onOpenTech}
            className="block text-left w-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            Tech & Stack
          </button>
          <button 
            onClick={onOpenCerts}
            className="block text-left w-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition cursor-pointer"
          >
            Certifications
          </button>
        </nav>

        {/* Typing Test Trigger */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setIsTypingOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" /> Typing Test
            </span>
            <span className="text-[10px] text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800 px-1.5 py-0.5 rounded">Alt+J</span>
          </button>
        </div>
      </div>

      {/* Footer Controls & Copyright */}
      <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Sun className="h-4 w-4 hidden dark:block" />
            <Moon className="h-4 w-4 block dark:hidden" />
          </button>
          <span className="text-[10px] font-mono text-zinc-400">v1.0.0</span>
        </div>

        <div className="text-[11px] font-mono text-zinc-500 break-all">
          iancarlogv21@gmail.com
        </div>
      </div>
    </aside>
  );
}