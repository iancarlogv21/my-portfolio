// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroAbout from "@/components/HeroAbout";
import StatsBanner from "@/components/StatsBanner";
import ProjectsSection from "@/components/ProjectsSection";
import DesignPortfolio from "@/components/DesignPortfolio";
import TechStack from "@/components/TechStack";
import CertificationsSection from "@/components/CertificationsSection";
import CertificationsModal from "@/components/CertificationsModal";
import AllProjectsModal from "@/components/AllProjectsModal";
import AllDesignsModal from "@/components/AllDesignsModal";
import TypingTestModal from "@/components/TypingTestModal";
import TechStackModal from "@/components/TechStackModal";
import { Menu, X } from "lucide-react";

export default function PortfolioPage() {
  const [isTypingOpen, setIsTypingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });
  
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [isAllDesignsOpen, setIsAllDesignsOpen] = useState(false);
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "j" || e.key === "J")) {
        e.preventDefault();
        setIsTypingOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleToggleTheme = (val: boolean | ((prev: boolean) => boolean)) => {
    const nextValue = typeof val === "function" ? val(isDarkMode) : val;

    if (typeof window !== "undefined" && document.startViewTransition) {
      const button = document.querySelector('[aria-label="Toggle Theme"]');
      let x = 50;
      let y = window.innerHeight - 50;

      if (button) {
        const rect = button.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setIsDarkMode(nextValue);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            pseudoElement: "::view-transition-new(root)"
          }
        );
      });
    } else {
      setIsDarkMode(nextValue);
    }
  };

  const handleGoHome = () => {
    setIsCertModalOpen(false);
    setIsAllProjectsOpen(false);
    setIsAllDesignsOpen(false);
    setIsTechModalOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allDesignsList = [
    {
      title: "ZOL Esports Landing Page",
      desc: "Comprehensive esports organization layout featuring team rosters, tournament schedules, news blocks, and immersive yellow-gold branding.",
      src: "/zol.png",
      link: "https://iancarlo.my.canva.site/zol-esports"
    },
    {
      title: "Almost Heaven Hotel & Resort",
      desc: "Luxury hospitality booking interface highlighting room tiers, reservation selectors, resort amenities, and photo galleries.",
      src: "/Hotel.png",
      link: "https://iancarlo.my.canva.site/almost-heaven-hotel"
    },
    {
      title: "Taylor Swift TTPD Store & Tour Portal",
      desc: "The Tortured Poets Department album store and Eras Tour interactive concept page featuring music players and merch grids.",
      src: "/PrelimProj_Taylor.png",
      link: "https://iancarlo.my.canva.site/taylor-swift"
    },
    {
      title: "Cristiano Ronaldo Web Portal",
      desc: "Dynamic athletic tribute site featuring match countdowns, fixture schedules, career bios, and photo grids.",
      src: "/ronaldo-portal.png",
      link: "https://iancarlo.my.canva.site/ronaldo-portal"
    },
    {
      title: "My Photography Portfolio",
      desc: "Minimalist monochrome creative portfolio showcasing portraiture work, photographer bio, and quick contact channels.",
      src: "/icgv-photography.png",
      link: "https://iancarlo.my.canva.site/icgv-photography",
      fullWidth: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex flex-col md:flex-row relative w-full">
      
      {/* Mobile Header Bar */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-40 w-full">
        <div>
          <h1 className="font-mono font-bold text-xs text-zinc-900 dark:text-zinc-100">Ian Carlo G. Ventura</h1>
          <p className="text-[10px] font-mono text-zinc-400">Full-Stack Web Developer</p>
        </div>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Slide-out Sidebar Drawer on Mobile, Sticky Sidebar on Desktop */}
      <div className={`
        fixed md:sticky top-0 inset-y-0 left-0 z-50 w-64 h-screen bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}
      `}>
        <Sidebar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={handleToggleTheme} 
          setIsTypingOpen={(val) => { setIsTypingOpen(val); setIsMobileMenuOpen(false); }}
          onGoHome={handleGoHome}
          onOpenProjects={() => { handleGoHome(); setIsAllProjectsOpen(true); }}
          onOpenDesigns={() => { handleGoHome(); setIsAllDesignsOpen(true); }}
          onOpenTech={() => { handleGoHome(); setIsTechModalOpen(true); }}
          onOpenCerts={() => { handleGoHome(); setIsCertModalOpen(true); }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center overflow-x-hidden w-full">
        <main className="w-full max-w-4xl px-4 md:px-12 py-8 md:py-16 space-y-12 md:space-y-16">
          <HeroAbout />
          <StatsBanner />
          <ProjectsSection onOpenAllProjects={() => setIsAllProjectsOpen(true)} />
          <DesignPortfolio onOpenAllDesigns={() => setIsAllDesignsOpen(true)} />
          <TechStack onOpenAllTech={() => setIsTechModalOpen(true)} />
          <CertificationsSection onOpenModal={() => setIsCertModalOpen(true)} />
        </main>
      </div>

      <TypingTestModal isOpen={isTypingOpen} onClose={() => setIsTypingOpen(false)} />
      <AllProjectsModal isOpen={isAllProjectsOpen} onClose={() => setIsAllProjectsOpen(false)} />
      
      {isAllDesignsOpen && (
        <AllDesignsModal 
          onClose={() => setIsAllDesignsOpen(false)} 
          designs={allDesignsList} 
        />
      )}

      <TechStackModal isOpen={isTechModalOpen} onClose={() => setIsTechModalOpen(false)} />
      <CertificationsModal isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} />
    </div>
  );
}