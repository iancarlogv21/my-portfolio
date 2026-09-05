// components/Sidebar.tsx
"use client";

import React, { useState, useSyncExternalStore } from "react";
import { 
  Sun, 
  Moon, 
  Monitor,
  User,
  FileText, 
  Volume2,
  VolumeX,
  Mail
} from "lucide-react";
import { playSound } from "@/utils/sound";

interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export default function Sidebar({ 
  isDarkMode, 
  setIsDarkMode, 
  onNavigate,
  activeSection
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

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Coordinate-driven circular ripple view transition
  const transitionTheme = (newDark: boolean, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (newDark === isDarkMode || isTransitioning) return;

    if (typeof document === 'undefined') {
      setIsDarkMode(newDark);
      return;
    }

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition) {
      setIsDarkMode(newDark);
      return;
    }

    setIsTransitioning(true);

    const rect = event?.currentTarget.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    try {
      const transition = doc.startViewTransition?.(() => {
        setIsDarkMode(newDark);
      });

      transition?.ready?.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 450,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })?.catch(() => {});

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    } catch {
      setIsDarkMode(newDark);
      setIsTransitioning(false);
    }
  };

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
    
  ];

  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between h-screen sticky top-0 bg-white dark:bg-zinc-950 select-none z-50 overflow-y-auto font-serif">
      <div className="space-y-6">
        
        {/* Profile Branding */}
        <div 
          onClick={() => onNavigate("about")}
          className="cursor-pointer group text-left space-y-0.5"
        >
          <h1 className="font-mono font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-200">
            Ian Carlo G. Ventura
          </h1>
          <p className="text-[11px] font-mono text-zinc-400">Full-Stack Web Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 font-mono text-xs ">
          {navItems.map((item) => {
            const Icon = 'icon' in item ? item.icon : undefined;
            const isProjects = item.id === "projects";
            const isActive = activeSection === item.id;

            return (
              <React.Fragment key={item.id}>
                {isProjects && (
                  <div className="pt-2 pb-1">
                    <div className="border-t border-zinc-200 dark:border-zinc-800 my-2" />
                  </div>
                )}
                
                <button 
                  onClick={(e) => {
                    playSound('click');
                    onNavigate(item.id);
                  }}
                  className={`flex items-center gap-2.5 w-full py-2 px-2.5 rounded-lg transition-all duration-200 ease-out cursor-pointer ${
                    isActive 
                      ? "text-zinc-900 dark:text-zinc-100 font-semibold bg-zinc-100/80 dark:bg-zinc-900/80" 
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  {Icon ? (
                    <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                      <Icon className={`h-3.5 w-3.5 ${isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400"}`} />
                    </div>
                  ) : (
                    <span className={`w-3.5 text-center text-xs font-mono shrink-0 transition-opacity ${isActive ? "opacity-100 text-zinc-900 dark:text-zinc-100 font-bold" : "opacity-0"}`}>
                      →
                    </span>
                  )} 
                  {item.label}
                </button>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Footer Controls */}
      <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          {/* Theme Pill Toggle */}
          <div className="flex items-center p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 gap-0.5">
            <button
              onClick={(e) => {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                transitionTheme(prefersDark, e);
              }}
              className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 ease-out cursor-pointer"
              title="System Theme"
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={(e) => transitionTheme(false, e)}
              className={`p-1.5 rounded-full transition-all duration-200 ease-out cursor-pointer ${
                mounted && !isDarkMode 
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs" 
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
              title="Light Mode"
            >
              <Sun className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={(e) => transitionTheme(true, e)}
              className={`p-1.5 rounded-full transition-all duration-200 ease-out cursor-pointer ${
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
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-95 transition-all duration-200 ease-out cursor-pointer"
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-zinc-900 dark:text-zinc-100" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-1.5 text-[10px] font-mono text-zinc-500 leading-relaxed">
          <p>For work, collabs & everything else, reach me at</p>
          <a
            href="mailto:iancarlogv21@gmail.com"
            className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold hover:font-bold hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="break-all">iancarlogv21@gmail.com</span>
          </a>
        </div>
      </div>
    </aside>
  );
}