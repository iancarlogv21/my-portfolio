// components/ExperienceModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  if (!isOpen) return null;

  const timeline = [
    { 
      year: "2026", 
      title: "BS Information Technology — 4th Year", 
      subtitle: "City College of San Fernando, Pampanga", 
      desc: "Current academic standing focusing on full-stack web engineering, and enterprise system architecture" 
    },
    { 
      year: "2026", 
      title: "Capstone Project", 
      subtitle: "FONZO AutoService (FONZO Calibration and Car Services Co.)", 
      desc: "Developing automotive workshop intelligence systems, client scheduling tools, and production-ready workflow automation as our 4th-year capstone project." 
    },
    { 
      year: "2025", 
      title: "Advanced Systems & Case Studies", 
      subtitle: "FELMS & Full-Stack Systems", 
      desc: "Engineered NoSQL MongoDB aggregation pipelines, digital library management portals, and comprehensive data analytics case studies." 
    },
    { 
      year: "2025", 
      title: "Professional Certifications", 
      subtitle: "Harvard CS50P, Google Analytics, Credly", 
      desc: "Earned industry-recognized credentials in Python programming, data tracking, and cybersecurity fundamentals." 
    },
    { 
      year: "2024", 
      title: "Design and UI Portals", 
      subtitle: "Immersive Web Concepts", 
      desc: "Designed high-end brand layouts and interactive user interfaces including esports portals, luxury hotel booking, and music stores." 
    },
    { 
      year: "2023", 
      title: "Programming Foundations", 
      subtitle: "Core Web Stack (PHP, MySQL, JavaScript)", 
      desc: "Mastered relational database management, dynamic server-side scripting, and modern frontend styling with Tailwind CSS." 
    },
    { 
      year: "2022", 
      title: "Tech Community & Collaborative Activities", 
      subtitle: "Peer Programming & Academic Projects", 
      desc: "Engaged in collaborative software development machine problems, shared repositories, and peer code reviews with classmates." 
    },
    { 
      year: "2018", 
      title: "Junior High School ICT Student", 
      subtitle: "Foundational Computing & ICT", 
      desc: "Built early technological foundations covering flowcharts & flow diagrams, operating systems, input device management, software installation strategies, and email communication." 
    }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 h-screen overflow-hidden z-[99999] bg-white dark:bg-zinc-950 flex flex-col animate-in fade-in duration-200">
      
      {/* Pinned Sticky Header */}
      <div className="sticky top-0 z-20 px-6 md:px-16 py-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 md:backdrop-blur-xl backdrop-blur-md flex items-center justify-between shrink-0">
        <div>
          <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">03 — experience & timeline</h1>
          <p className="text-xs text-zinc-500 font-mono mt-1">Complete professional and academic history.</p>
        </div>
        <button 
          onClick={onClose} 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
        >
          <X className="h-4 w-4" /> Close
        </button>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm relative">
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-8 relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-600 shrink-0 mt-1 z-10 ml-0.5 md:ml-2.5" />
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-6 group-last:border-none group-last:pb-0">
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 shrink-0 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}