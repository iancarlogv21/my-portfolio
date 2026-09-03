// components/MobileHeader.tsx
"use client";

import React from "react";
import { Menu } from "lucide-react";
import { playSound } from "@/utils/sound";

interface MobileHeaderProps {
  onOpenMobileMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MobileHeader({ onOpenMobileMenu, onNavigate }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 inset-x-0 z-40 flex items-center justify-between px-6 py-4 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-2xl border-b border-zinc-200/20 dark:border-zinc-800/20 transition-colors duration-200 shadow-xs md:hidden">
      <div 
        onClick={() => {
          playSound('click');
          onNavigate("about");
        }}
        className="cursor-pointer space-y-0.5"
      >
        <h1 className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100">
          Ian Carlo G. Ventura
        </h1>
        <p className="text-[10px] font-mono text-zinc-400">Full-Stack Web Developer</p>
      </div>

      <button
        onClick={() => {
          playSound('click');
          onOpenMobileMenu();
        }}
        className="p-2 rounded-xl bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/30 dark:border-zinc-800/30 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-95 transition cursor-pointer shadow-xs"
        aria-label="Open Menu"
      >
        <Menu className="h-4 w-4" />
      </button>
    </header>
  );
}