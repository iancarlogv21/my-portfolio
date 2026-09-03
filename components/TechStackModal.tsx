// components/TechStackModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";
import { playSound } from "@/utils/sound";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechStackModal({ isOpen, onClose }: TechModalProps) {
  if (!isOpen) return null;

  const categories = [
    {
      title: "FRONTEND",
      skills: [
        "Next.js", 
        "React.js", 
        "Vue.js", 
        "TypeScript", 
        "Tailwind CSS", 
        "JavaScript (ES6+)", 
        "HTML5 / CSS3", 
        "Lucide Icons",
        "Web Audio API"
      ]
    },
    {
      title: "BACKEND & DATABASES",
      skills: [
        "PHP", 
        "Laravel", 
        "Python", 
        "Django", 
        "Node.js", 
        "MySQL", 
        "MongoDB & NoSQL", 
        "RESTful APIs", 
        "XAMPP / MySQL Workbench"
      ]
    },
    {
      title: "MOBILE & GAME DEV",
      skills: [
        "Flutter & Dart", 
        "Flame Engine (2D)", 
        "UI/UX Prototyping", 
        "Custom Audio Players"
      ]
    },
    {
      title: "DEVELOPER TOOLS & ENVIRONMENTS",
      skills: [
        "Git", 
        "GitHub", 
        "GitLab", 
        "Bitbucket", 
        "Visual Studio Code", 
        "JetBrains IntelliJ", 
        "PyCharm", 
        "Postman", 
        "MongoDB Compass", 
        "Cisco Packet Tracer"
      ]
    },
    {
      title: "COLLABORATION & WORKSPACE",
      skills: [
        "Slack", 
        "Discord", 
        "Microsoft Teams", 
        "JIRA", 
        "Trello", 
        "ClickUp"
      ]
    }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 h-screen overflow-hidden z-[99999] bg-white dark:bg-zinc-950 flex flex-col animate-in fade-in duration-200">
      
      {/* Pinned Sticky Header */}
      <div className="sticky top-0 z-20 px-6 md:px-12 py-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 md:backdrop-blur-xl backdrop-blur-md flex items-center justify-between shrink-0">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Archive</span>
          <h2 className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">All Technical & Design Stack</h2>
        </div>
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
        >
          <X className="h-4 w-4" /> Close
        </button>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Categories Grid */}
          <div className="space-y-12">
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">{cat.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => playSound('click')}
                      className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md active:border-zinc-500 dark:active:border-zinc-500 active:scale-95 active:shadow-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm cursor-pointer text-left"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}