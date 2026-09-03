// components/GalleryModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  if (!isOpen) return null;

  const galleryItems = [
    { title: "ZOL Esports Portal", desc: "Esports landing page layout & branding.", src: "/zol.png" },
    { title: "Almost Heaven Hotel", desc: "Luxury hospitality reservation interface.", src: "/Hotel.png" },
    { title: "FONZO AutoService", desc: "Automotive workshop intelligence system.", src: "/FONZO.png" },
    { title: "FELMS Library", desc: "NoSQL digital catalog management portal.", src: "/FELMS.png" }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 bg-white dark:bg-zinc-950 z-50 overflow-y-auto p-4 md:p-16 animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">07 — gallery & archives</h1>
            <p className="text-xs text-zinc-500 font-mono mt-1">Snapshot archive of systems and design concepts.</p>
          </div>
          <button 
            onClick={onClose} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-4 space-y-3 shadow-sm">
              <div className="w-full h-56 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}