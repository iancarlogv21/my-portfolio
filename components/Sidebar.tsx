// components/Sidebar.tsx
"use client";

import React, { useState, useSyncExternalStore } from "react";
import { 
  Sun, 
  Moon, 
  Monitor,
  Terminal, 
  User,
  FileText, 
  Volume2,
  VolumeX
} from "lucide-react";
import { playSound } from "@/utils/sound";

interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  setIsTypingOpen: (val: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Sidebar({ 
  isDarkMode, 
  setIsDarkMode, 
  setIsTypingOpen,
  onNavigate
}: SidebarProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('portfolio_muted') === 'true';
  });

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem('portfolio_muted', String(nextMuted));
    if (!nextMuted) {
      playSound('switch');
    }
  };

  const navItems = [
    { label: "About", id: "about", icon: User },
    { label: "Blogs", id: "blogs", icon: FileText },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Stack", id: "tech-stack" },
    { label: "Certifications", id: "certifications" },
    { label: "Recommendations", id: "recommendations" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between h-screen sticky top-0 bg-white dark:bg-zinc-950 select-none z-50 overflow-y-auto">
      <div className="space-y-6">
        
        {/* Profile Branding */}
        <div 
          onClick={() => onNavigate("about")}
          className="cursor-pointer group text-left space-y-0.5"
        >
          <h1 className="font-mono font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition">
            Ian Carlo G. Ventura
          </h1>
          <p className="text-[11px] font-mono text-zinc-400">Full-Stack Web Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 font-mono text-xs border-b border-zinc-200 dark:border-zinc-800 pb-5">
          {navItems.map((item) => {
            const Icon = 'icon' in item ? item.icon : undefined;
            const isProjects = item.id === "projects";

            return (
              <React.Fragment key={item.id}>
                {isProjects && (
                  <div className="pt-2 pb-1">
                    <div className="border-t border-zinc-200 dark:border-zinc-800 my-2" />
                  </div>
                )}
                
                <button 
                  onClick={() => {
                    playSound('click');
                    onNavigate(item.id);
                  }}
                  className={`flex items-center gap-2.5 w-full py-2 px-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 active:bg-zinc-200 dark:active:bg-zinc-900 cursor-pointer ${!Icon ? "pl-[10px]" : ""}`}
                >
                  {Icon ? (
                    <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                      <Icon className="h-3.5 w-3.5 text-zinc-400" />
                    </div>
                  ) : null} 
                  {item.label}
                </button>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Tools */}
        <div className="space-y-1 font-mono text-xs border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <button
            onClick={() => {
              playSound('click');
              setIsTypingOpen(true);
            }}
            className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 active:bg-zinc-200 dark:active:bg-zinc-900 cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <Terminal className="h-3.5 w-3.5 text-zinc-400" /> Typing Test
            </span>
            <span className="text-[10px] text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded">Alt + J</span>
          </button>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          {/* Theme Pill Toggle */}
          <div className="flex items-center p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 gap-0.5">
            <button
              onClick={() => {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setIsDarkMode(prefersDark);
              }}
              className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
              title="System Theme"
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => {
                setIsDarkMode(false);
              }}
              className={`p-1.5 rounded-full cursor-pointer ${
                mounted && !isDarkMode 
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs" 
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
              title="Light Mode"
            >
              <Sun className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => {
                setIsDarkMode(true);
              }}
              className={`p-1.5 rounded-full cursor-pointer ${
                mounted && isDarkMode 
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs" 
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
              title="Dark Mode"
            >
              <Moon className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Circular Mute/Unmute Button */}
          <button
            onClick={handleToggleMute}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-95 cursor-pointer"
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-zinc-900 dark:text-zinc-100" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        <div className="text-[10px] font-mono text-zinc-500 leading-relaxed pt-2 border-t border-zinc-200 dark:border-zinc-800">
          For work, collabs & everything else, reach me at <span className="text-zinc-900 dark:text-zinc-100 font-semibold break-all">iancarlogv21@gmail.com</span>
        </div>
      </div>
    </aside>
  );
}