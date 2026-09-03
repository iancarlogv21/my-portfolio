"use client";

import React from "react";
import { X } from "lucide-react";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechStackModal({ isOpen, onClose }: TechModalProps) {
  if (!isOpen) return null;

  const categories = [
    {
      title: "FRONTEND DEVELOPMENT",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "jQuery & AJAX"]
    },
    {
      title: "BACKEND & DATABASES",
      skills: ["PHP", "Node.js", "MySQL", "MongoDB & NoSQL", "RESTful APIs", "XAMPP / MySQL Workbench"]
    },
    {
      title: "MOBILE & GAME DEV",
      skills: ["Flutter & Dart", "UI/UX Prototyping", "Flame Engine (2D)", "Custom Audio Players"]
    },
    {
      title: "TOOLS & DEVOPS",
      skills: ["Git & GitHub", "Visual Studio Code", "Postman", "MongoDB Compass", "Cisco Packet Tracer"]
    }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-[99999] bg-white dark:bg-zinc-950 overflow-y-auto p-6 md:p-12 animate-in fade-in duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Archive</span>
            <h2 className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">All Technical & Design Stack</h2>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">{cat.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}