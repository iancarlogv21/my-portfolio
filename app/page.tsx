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

export default function PortfolioPage() {
  const [isTypingOpen, setIsTypingOpen] = useState(false);
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

  // Centralized HTML root class synchronizer for Tailwind dark mode
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
      // Find the exact center coordinates of the theme toggle button in the sidebar
      const button = document.querySelector('[aria-label="Toggle Theme"]');
      let x = 50;
      let y = window.innerHeight - 50;

      if (button) {
        const rect = button.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      // Calculate maximum radius required to cover the entire viewport
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
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex animate-diagonal-reveal">
      
      <Sidebar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={handleToggleTheme} 
        setIsTypingOpen={setIsTypingOpen}
        onGoHome={handleGoHome}
        onOpenProjects={() => { handleGoHome(); setIsAllProjectsOpen(true); }}
        onOpenDesigns={() => { handleGoHome(); setIsAllDesignsOpen(true); }}
        onOpenTech={() => { handleGoHome(); setIsTechModalOpen(true); }}
        onOpenCerts={() => { handleGoHome(); setIsCertModalOpen(true); }}
      />

      <div className="flex-1 flex justify-center overflow-x-hidden">
        <main className="w-full max-w-4xl px-8 md:px-12 py-16 space-y-16">
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