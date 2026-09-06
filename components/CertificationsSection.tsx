// components/CertificationsSection.tsx
"use client";

import React from "react";

interface CertSectionProps {
  onOpenModal: () => void;
}

export default function CertificationsSection({ onOpenModal }: CertSectionProps) {
  return (
    <section id="certifications" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">05 — certifications</h2>
        <button
          onClick={onOpenModal}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer self-start sm:self-auto"
        >
          all certifications →
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <a 
          href="https://cs50.harvard.edu/certificates/276e5090-9e13-4260-9254-7a75c9918224" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition shadow-sm flex flex-col items-center text-center justify-between space-y-6 group"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-3">
            <img src="/harvard-white-removebg-preview.png" alt="Harvard" className="w-full h-full object-contain scale-125" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">CS50s Introduction to Programming with Python</h3>
            <p className="text-[11px] font-mono text-zinc-400 uppercase">Harvard University</p>
          </div>
          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
            {'{ VERIFY }'} ↗
          </span>
        </a>

        <a 
          href="https://www.credential.net/920fee44-2935-4275-85b9-fe2ca2034a02" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition shadow-sm flex flex-col items-center text-center justify-between space-y-6 group"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-3">
            <svg className="w-10 h-10" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.31 7.27 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.15 0 9.92 0 12s.43 3.85 1.19 5.4l4.08-3.16z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.27 0 3.18 2.69 1.19 6.6l4.08 3.16c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Google Analytics Certification</h3>
            <p className="text-[11px] font-mono text-zinc-400 uppercase">Google</p>
          </div>
          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
            {'{ VERIFY }'} ↗
          </span>
        </a>

        <a 
          href="https://www.credly.com/badges/e6a4c68e-6997-4780-ac57-6c754c74a83b" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition shadow-sm flex flex-col items-center text-center justify-between space-y-6 group"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-3 overflow-hidden">
            <img src="/nav_logo.svg" alt="IBM" className="w-full h-full object-contain scale-95 dark:invert dark:brightness-200" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Cybersecurity Fundamentals</h3>
            <p className="text-[11px] font-mono text-zinc-400 uppercase">Credly Verified</p>
          </div>
          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
            {'{ VERIFY }'} ↗
          </span>
        </a>
      </div>
    </section>
  );
}