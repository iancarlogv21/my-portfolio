"use client";

import React from "react";
import { X, ExternalLink } from "lucide-react";

interface DesignItem {
  title: string;
  desc: string;
  src: string;
  link: string;
  fullWidth?: boolean;
}

interface AllDesignsModalProps {
  onClose: () => void;
  designs: DesignItem[];
}

export default function AllDesignsModal({ onClose, designs }: AllDesignsModalProps) {
  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-[99999] bg-white dark:bg-zinc-950 overflow-y-auto p-6 md:p-12 animate-in fade-in duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Archive</span>
            <h2 className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">All UI / Web Designs</h2>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>

        {/* Designs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <a
              key={index}
              href={design.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between space-y-6 group ${
                design.fullWidth ? "md:col-span-2" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="w-full h-48 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden relative shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition flex items-center justify-between">
                    {design.title}
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{design.desc}</p>
                </div>
              </div>

              <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
                {'{ VIEW LIVE }'} ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}