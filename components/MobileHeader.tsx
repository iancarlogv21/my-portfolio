// components/MobileHeader.tsx
"use client";

import React from "react";
import { Menu } from "lucide-react";
import { playSound } from "@/utils/sound";

interface MobileHeaderProps {
  onOpenMobileMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MobileHeader({ 
  onOpenMobileMenu, 
  onNavigate 
}: MobileHeaderProps) {
  return (
    <header className="md:hidden sticky top-0 z-50 w-full h-14 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center justify-between select-none shrink-0">
      {/* Brand / Name */}
      <button 
        onClick={() => {
          playSound('click');
          onNavigate("about");
        }}
        className="text-left cursor-pointer"
      >
        <h1 className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate max-w-[200px]">
          Ian Carlo G. Ventura
        </h1>
        <p className="text-[10px] font-mono text-zinc-400">Full-Stack Developer</p>
      </button>

      {/* Menu Trigger */}
      <button
        onClick={() => {
          playSound('click');
          onOpenMobileMenu();
        }}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 active:scale-95 cursor-pointer"
        aria-label="Open Navigation Menu"
      >
        <Menu className="h-4 w-4" />
      </button>
    </header>
  );
}