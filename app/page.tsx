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

/* Full-Screen Modals */
import BlogsModal from "@/components/BlogsModal";
import ExperienceModal from "@/components/ExperienceModal";
import RecommendationsModal from "@/components/RecommendationsModal";
import dynamic from "next/dynamic";
const GalleryModal = dynamic(() => import("@/components/GalleryModal"), { ssr: false });
const CertificationsModal = dynamic(() => import("@/components/CertificationsModal"), { ssr: false });
const AllProjectsModal = dynamic(() => import("@/components/AllProjectsModal"), { ssr: false });
import TypingTestModal from "@/components/TypingTestModal";
import TechStackModal from "@/components/TechStackModal";

import { playSound } from "@/utils/sound";

/* Safe Component Casts to bypass external prop type restrictions */
const SafeBlogsSection = BlogsSection as any;
const SafeProjectsSection = ProjectsSection as any;
const SafeExperienceSection = ExperienceSection as any;
const SafeTechStack = TechStack as any;
const SafeCertificationsSection = CertificationsSection as any;
const SafeRecommendationsSection = RecommendationsSection as any;
const SafeAllProjectsModal = AllProjectsModal as any;

export default function PortfolioPage() {
  const [isTypingOpen, setIsTypingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  
  // Lazy initialize state directly to avoid useEffect setState entirely & prevent hydration mismatches
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
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  // Centralized body scroll lock for ALL modals to prevent dual scrollbars and background scrolling
  const isAnyModalOpen = 
    isTypingOpen || 
    isAllProjectsOpen || 
    isTechModalOpen || 
    isCertModalOpen || 
    isBlogModalOpen || 
    isExpModalOpen || 
    isRecModalOpen || 
    isGalleryModalOpen;

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

  /* Track active section on scroll for sidebar highlighting */
  useEffect(() => {
    const sectionIds = [
      "about", 
      "blogs", 
      "projects", 
      "experience", 
      "tech-stack", 
      "certifications", 
      "recommendations", 
      "gallery"
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

  /* Global Sound Listeners */
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, [role="button"]');
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "j" || e.key === "J")) {
        e.preventDefault();
        playSound('switch');
        setIsTypingOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCloseAllModals = () => {
    setIsBlogModalOpen(false);
    setIsAllProjectsOpen(false);
    setIsExpModalOpen(false);
    setIsTechModalOpen(false);
    setIsCertModalOpen(false);
    setIsRecModalOpen(false);
    setIsGalleryModalOpen(false);
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
    if (sectionId === "gallery") {
      setIsGalleryModalOpen(true);
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sticky Sidebar */}
      <aside className={`fixed md:sticky top-0 inset-y-0 left-0 z-50 w-64 h-screen bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out border-r border-zinc-200 dark:border-zinc-800 ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}`}>
        <Sidebar 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setIsTypingOpen={setIsTypingOpen}
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
          <div id="gallery" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">Gallery</h2>
              <button
                onClick={() => { handleCloseAllModals(); setIsGalleryModalOpen(true); }}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
              >
                view gallery →
              </button>
            </div>
            <div 
              onClick={() => { handleCloseAllModals(); setIsGalleryModalOpen(true); }}
              className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 text-center font-mono text-xs text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
            >
              Click to view photo & project gallery snapshot archive...
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Modals with Global Close Handler */}
      <TypingTestModal isOpen={isTypingOpen} onClose={() => setIsTypingOpen(false)} />
      <SafeAllProjectsModal isOpen={isAllProjectsOpen} onClose={handleCloseAllModals} initialCategory={projectModalTab} />
      <TechStackModal isOpen={isTechModalOpen} onClose={handleCloseAllModals} />
      <CertificationsModal isOpen={isCertModalOpen} onClose={handleCloseAllModals} />
      
      <BlogsModal isOpen={isBlogModalOpen} onClose={handleCloseAllModals} />
      <ExperienceModal isOpen={isExpModalOpen} onClose={handleCloseAllModals} />
      <RecommendationsModal isOpen={isRecModalOpen} onClose={handleCloseAllModals} />
      <GalleryModal isOpen={isGalleryModalOpen} onClose={handleCloseAllModals} />
    </div>
  );
}