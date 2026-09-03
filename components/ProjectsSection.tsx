// components/ProjectsSection.tsx
"use client";

import React from "react";

interface ProjectsProps {
  onOpenAllProjects: () => void;
}

export default function ProjectsSection({ onOpenAllProjects }: ProjectsProps) {
  const projects = [
    {
      id: "fonzo",
      title: "FONZO AutoService",
      category: "Capstone Project",
      desc: "Enterprise automotive management system featuring client scheduling, maintenance tracking, and operational analytics.",
      src: "/FONZO.png",
      link: "https://fonzo-calibrations.onrender.com/",
    },
    {
      id: "felms",
      title: "FELMS — Library Management System",
      category: "Academic System",
      desc: "High-performance digital catalog and circulation platform utilizing NoSQL MongoDB aggregation pipelines.",
      src: "/FELMS.png",
    }
  ];

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">02 — projects</h2>
        <button
          onClick={onOpenAllProjects}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          all projects →
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => (
          <div 
            key={index}
            className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-4 space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition shadow-sm flex flex-col justify-between"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 relative group shadow-inner">
              <img 
                src={p.src} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-2 px-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{p.category}</span>
                {p.link ? (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-1"
                  >
                    View Live ↗
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-400">Private Repository</span>
                )}
              </div>

              <h3 className="text-base font-bold tracking-tight">{p.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}