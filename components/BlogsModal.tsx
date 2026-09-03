// components/BlogsModal.tsx
"use client";

import React, { useState } from "react";
import { X, LayoutList, LayoutGrid } from "lucide-react";

interface BlogsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogsModal({ isOpen, onClose }: BlogsModalProps) {
  const [isGrid, setIsGrid] = useState(false);

  if (!isOpen) return null;

  const posts = [
    {
      title: "Building Scalable NoSQL Aggregations with MongoDB in PHP",
      date: "August 2026",
      readTime: "5 min",
      desc: "A deep dive into optimizing digital library management systems and database query pipelines for high-performance retrieval.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop&grayscale"
    },
    {
      title: "Automating Automotive Workshop Operations with Modern Web Stacks",
      date: "August 2026",
      readTime: "4 min",
      desc: "Lessons learned building FONZO AutoService: streamlining client scheduling, maintenance tracking, and operational analytics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop&grayscale"
    },
    {
      title: "Cross-Platform Mobile Development: Crafting Custom UI Components in Flutter",
      date: "May 2026",
      readTime: "6 min",
      desc: "Exploring asset manifest readers, custom audio playback controls, and 2D game mechanics using Dart and the Flame engine.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop&grayscale"
    },
    {
      title: "Transitioning from Relational Schemas to NoSQL for Inventory Systems",
      date: "April 2026",
      readTime: "3 min",
      desc: "Why flexible document stores simplify product variations and stock tracking in modern enterprise applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop&grayscale"
    }
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 bg-white dark:bg-zinc-950 z-50 overflow-y-auto p-4 md:p-16 animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">01 — blog & write-ups</h1>
            <p className="text-xs text-zinc-500 font-mono mt-1">Thoughts, tutorials, and notes on AI, engineering, and building things.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <button
                onClick={() => setIsGrid(false)}
                className={`p-1.5 rounded-md transition cursor-pointer ${!isGrid ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-700"}`}
                title="List View"
              >
                <LayoutList className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsGrid(true)}
                className={`p-1.5 rounded-md transition cursor-pointer ${isGrid ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" : "text-zinc-400 hover:text-zinc-700"}`}
                title="Grid View"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>

            <button 
              onClick={onClose} 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
            >
              <X className="h-4 w-4" /> Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`${isGrid ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
          {posts.map((post, i) => (
            <div key={i} className={`group cursor-pointer p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 transition ${isGrid ? "flex flex-col space-y-4" : "flex flex-col md:flex-row gap-6 items-start"}`}>
              <div className={`${isGrid ? "w-full h-48" : "w-full md:w-48 h-32 shrink-0"} rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950`}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition duration-500" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>{post.date}</span>
                  <span>Read · {post.readTime}</span>
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}