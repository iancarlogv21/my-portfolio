// components/RecommendationsModal.tsx[cite: 7]
"use client";

import React from "react";
import MobileHeader from "@/components/MobileHeader";

interface RecommendationsModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenMobileMenu?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export default function RecommendationsModal({ 
  isOpen, 
  onOpenMobileMenu, 
  onNavigate 
}: RecommendationsModalProps) {
  if (!isOpen) return null;

  const recommendations = [
    {
      name: "Ver Garcia",
      role: "Backend & Database Architect",
      initials: "VG",
      text: "Working alongside Ian on our 4-member capstone team has been seamless. His mastery of full-stack architecture and rapid problem-solving kept our workshop intelligence system on track."
    },
    {
      name: "Ryan Tadeo",
      role: "Frontend & UI Engineer",
      initials: "RT",
      text: "Ian brings incredible technical discipline and drive to our team. Whenever we ran into tough workflow automation bugs, he always stepped up to find clean, scalable solutions."
    },
    {
      name: "Jean Claude",
      role: "Systems Analyst & QA Lead",
      initials: "JC",
      text: "Ian's dedication to building high-quality web applications is unmatched. His focus on clean code and user-centric design made collaborating on our capstone project a great experience."
    },
    {
      name: "Ruel Mercado",
      role: "Systems Architect Partner",
      initials: "RM",
      text: "Collaborating with Ian on our digital library and system architectures showed me how detail-oriented and resourceful he is when tackling complex backend and database logic."
    }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 h-screen overflow-hidden z-[99999] bg-white dark:bg-zinc-950 flex flex-col animate-in fade-in duration-200">
      
      {/* Persistent Global Mobile Header */}
      {onOpenMobileMenu && onNavigate && (
        <div className="md:hidden shrink-0">
          <MobileHeader 
            onOpenMobileMenu={onOpenMobileMenu} 
            onNavigate={onNavigate} 
          />
        </div>
      )}

      {/* Scrollable Content Body with Natural Scrolling Title */}
      <div className="flex-1 overflow-y-auto p-6 md:p-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Archive</span>
            <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">06 — recommendations</h1>
            <p className="text-xs text-zinc-500 font-mono mt-1">Endorsements from capstone teammates and collaborative partners.</p>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-4 shadow-sm">
                <p 
                  className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  &ldquo;{rec.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {rec.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{rec.name}</h3>
                    <p className="text-xs font-mono text-zinc-400">{rec.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}