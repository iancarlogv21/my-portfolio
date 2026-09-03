// components/AllProjectsModal.tsx
"use client";

import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { portfolioItems, ProjectItem } from "@/data/projects";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
  initialCategory = "all",
}: AllProjectsModalProps) {
  const [activeTab, setActiveTab] = useState<string>(initialCategory);

  if (!isOpen) return null;

  const tabs = [
    { id: "all", label: "ALL" },
    { id: "websites-apps", label: "Websites & Apps" },
    //{ id: "funnels-pages", label: "Funnels & Pages" },
   // { id: "automation-ai", label: "Automation & AI" },
    { id: "console-application", label: "Console Applications" },
    { id: "design", label: "Design" },
   // { id: "ecommerce-posters", label: "E-Commerce Posters" },
  ];

  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter((item: ProjectItem) => item.category === activeTab);

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-[99999] bg-white dark:bg-zinc-950 overflow-y-auto p-6 md:p-12 animate-in fade-in duration-200">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Archive
            </span>
            <h2 className="text-xl font-mono font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Projects <span className="text-xs text-zinc-400 font-normal">[{portfolioItems.length}]</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 w-fit">
          {tabs.map((tab) => {
            const count = tab.id === "all" 
              ? portfolioItems.length 
              : portfolioItems.filter(i => i.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {tab.label} <span className="text-[10px] opacity-60">[{count}]</span>
              </button>
            );
          })}
        </div>

        {/* Items Grid / List */}
        <div className="flex flex-col gap-6">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center text-xs font-mono text-zinc-400 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
              No items found in this category yet.
            </div>
          ) : (
            filteredItems.map((item: ProjectItem, index: number) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 md:p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">

                  {/* Thumbnail */}
                  <div className="w-full md:w-[40%] h-52 md:h-60 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden relative shadow-inner flex-shrink-0 p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition duration-500 shadow-sm"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center flex-1 space-y-3 w-full">
                    <span className="w-fit text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>

                    <h3 className="font-semibold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition flex items-center gap-3">
                      {item.title}
                      <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition flex-shrink-0" />
                    </h3>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>

                    <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
                      {item.actionText}
                    </span>
                  </div>

                </div>
              </a>
            ))
          )}
        </div>

      </div>
    </div>
  );
}