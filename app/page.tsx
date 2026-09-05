/* eslint-disable @typescript-eslint/no-explicit-any */
// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import HeroAbout from "@/components/HeroAbout";
import StatsBanner from "@/components/StatsBanner";
import BlogsSection from "@/components/BlogsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStack from "@/components/TechStack";
import CertificationsSection from "@/components/CertificationsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import GithubSection from "@/components/GithubSection";

/* Full-Screen Modals with Dynamic Imports */
import BlogsModal from "@/components/BlogsModal";
import ExperienceModal from "@/components/ExperienceModal";
import RecommendationsModal from "@/components/RecommendationsModal";
import dynamic from "next/dynamic";

const CertificationsModal = dynamic(() => import("@/components/CertificationsModal"), { ssr: false });
const AllProjectsModal = dynamic(() => import("@/components/AllProjectsModal"), { ssr: false });

import TechStackModal from "@/components/TechStackModal";

import { playSound } from "@/utils/sound";

/* Safe Component Casts to completely bypass external prop type restrictions */
const SafeBlogsSection = BlogsSection as any;
const SafeProjectsSection = ProjectsSection as any;
const SafeExperienceSection = ExperienceSection as any;
const SafeTechStack = TechStack as any;
const SafeCertificationsSection = CertificationsSection as any;
const SafeRecommendationsSection = RecommendationsSection as any;
const SafeGithubSection = GithubSection as any;
const SafeAllProjectsModal = AllProjectsModal as any;
const SafeCertificationsModal = CertificationsModal as any;
const SafeBlogsModal = BlogsModal as any;
const SafeExperienceModal = ExperienceModal as any;
const SafeRecommendationsModal = RecommendationsModal as any;
const SafeTechStackModal = TechStackModal as any;

export default function PortfolioPage() {
  const [isTypingOpen, setIsTypingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });
  
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);
  const [projectModalTab, setProjectModalTab] = useState<string>("all");
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [isRecModalOpen, setIsRecModalOpen] = useState(false);

  const isAnyModalOpen = 
    isTypingOpen || 
    isAllProjectsOpen || 
    isTechModalOpen || 
    isCertModalOpen || 
    isBlogModalOpen || 
    isExpModalOpen || 
    isRecModalOpen;

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAnyModalOpen]);

  useEffect(() => {
    const sectionIds = [
      "about", "blogs", "projects", "experience", 
      "tech-stack", "certifications", "recommendations", "github", "gallery"
    ];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection((prev) => (prev !== id ? id : prev));
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target instanceof Element 
        ? e.target.closest('button, a, [role="button"], .group, img, [class*="cursor-pointer"]') 
        : null;
      if (target) {
        playSound('click');
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

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
    const handleGlobalClick = (e: MouseEvent) => {
      const node = e.target as Node;
      const element = node?.nodeType === 3 ? node.parentElement : (node as Element);
      const target = element?.closest?.('button, a, [role="button"], .group, img, [class*="cursor-pointer"]');
      if (target) {
        playSound('click');
      }
    };

    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleCloseAllModals = () => {
    setIsBlogModalOpen(false);
    setIsAllProjectsOpen(false);
    setIsExpModalOpen(false);
    setIsTechModalOpen(false);
    setIsCertModalOpen(false);
    setIsRecModalOpen(false);
  };

  const handleNavigate = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    handleCloseAllModals();
    setActiveSection(sectionId);

    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (sectionId === "blogs") {
      setIsBlogModalOpen(true);
      return;
    }
    if (sectionId === "projects") {
      setProjectModalTab("all");
      setIsAllProjectsOpen(true);
      return;
    }
    if (sectionId === "experience") {
      setIsExpModalOpen(true);
      return;
    }
    if (sectionId === "tech-stack") {
      setIsTechModalOpen(true);
      return;
    }
    if (sectionId === "certifications") {
      setIsCertModalOpen(true);
      return;
    }
    if (sectionId === "recommendations") {
      setIsRecModalOpen(true);
      return;
    }
    if (sectionId === "github" || sectionId === "gallery") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans flex flex-col md:flex-row relative w-full">
      
      {/* Mobile Liquid Glass Header Bar */}
      <MobileHeader 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
        onNavigate={handleNavigate} 
      />

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100000] md:hidden backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sticky Sidebar */}
      <aside className={`fixed md:sticky top-0 inset-y-0 left-0 z-[100001] w-64 h-screen bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out border-r border-zinc-200 dark:border-zinc-800 ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}`}>
        <Sidebar 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center overflow-x-hidden w-full">
        <main className="w-full max-w-4xl px-4 md:px-12 py-8 md:py-16 space-y-16 md:space-y-24">
          <div id="about" className="space-y-6">
            <HeroAbout />
            <StatsBanner />
          </div>
          <div id="blogs"><SafeBlogsSection onOpenModal={() => { handleCloseAllModals(); setIsBlogModalOpen(true); }} /></div>
          <div id="projects">
            <SafeProjectsSection 
              onOpenAllProjects={() => { handleCloseAllModals(); setProjectModalTab("all"); setIsAllProjectsOpen(true); }} 
              onOpenModal={() => { handleCloseAllModals(); setProjectModalTab("all"); setIsAllProjectsOpen(true); }}
            />
          </div>
          <div id="experience"><SafeExperienceSection onOpenModal={() => { handleCloseAllModals(); setIsExpModalOpen(true); }} /></div>
          <div id="tech-stack"><SafeTechStack onOpenAllTech={() => { handleCloseAllModals(); setIsTechModalOpen(true); }} /></div>
          <div id="certifications"><SafeCertificationsSection onOpenModal={() => { handleCloseAllModals(); setIsCertModalOpen(true); }} /></div>
          <div id="recommendations"><SafeRecommendationsSection onOpenModal={() => { handleCloseAllModals(); setIsRecModalOpen(true); }} /></div>
          
          {/* GitHub Activity Section (07) */}
          <div id="github"><SafeGithubSection /></div>

          {/* Inline Gallery & Personal Moments Section (08) */}
          <div id="gallery" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">08. Personal & Moments</h2>
              <span className="text-xs font-mono text-zinc-500"></span>
            </div>

            {/* Swipeable Photo Strip on Mobile (Displays 2 at a time), 4-Col Grid on Desktop */}
            <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 md:gap-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { src: "/carlo.png", title: "Portrait" },
                { src: "/personal-2.jpg", title: "Workspace" },
                { src: "/personal-3.jpg", title: "Out & About" },
                { src: "/personal-4.jpg", title: "Memories" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex-shrink-0 w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 shadow-sm snap-start cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out" 
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-xs font-mono text-white tracking-wider">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

     
      

      <SafeAllProjectsModal 
        isOpen={isAllProjectsOpen} 
        onClose={handleCloseAllModals} 
        initialCategory={projectModalTab} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <SafeTechStackModal 
        isOpen={isTechModalOpen} 
        onClose={handleCloseAllModals} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <SafeCertificationsModal 
        isOpen={isCertModalOpen} 
        onClose={handleCloseAllModals} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <SafeBlogsModal 
        isOpen={isBlogModalOpen} 
        onClose={handleCloseAllModals} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <SafeExperienceModal 
        isOpen={isExpModalOpen} 
        onClose={handleCloseAllModals} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      <SafeRecommendationsModal 
        isOpen={isRecModalOpen} 
        onClose={handleCloseAllModals} 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}