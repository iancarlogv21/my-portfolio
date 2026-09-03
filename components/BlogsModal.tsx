// components/BlogsModal.tsx
"use client";

import React, { useState } from "react";
import { X, LayoutList, LayoutGrid, ArrowLeft } from "lucide-react";
import { blogs, BlogPost } from "@/data/blogs";

interface BlogsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogsModal({ isOpen, onClose }: BlogsModalProps) {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 h-screen overflow-hidden bg-white dark:bg-zinc-950 z-50 flex flex-col animate-in fade-in duration-200">
      
      {/* Pinned Sticky Header */}
      <div className="sticky top-0 z-20 px-4 md:px-16 py-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-3xl flex items-center justify-between shrink-0">
        <div>
          <h1 className="font-mono text-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            {selectedPost ? selectedPost.title : "01 — blog & write-ups"}
          </h1>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            {selectedPost ? `${selectedPost.date} · ${selectedPost.readTime} read` : "Thoughts, tutorials, and notes on AI, engineering, and building things."}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {!selectedPost && (
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
          )}

          {selectedPost && (
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          )}

          <button 
            onClick={() => {
              setSelectedPost(null);
              onClose();
            }} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-4 md:p-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {selectedPost ? (
            <div className="space-y-6 max-w-2xl mx-auto py-4">
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover grayscale contrast-125" />
              </div>
              <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line font-sans">
                {selectedPost.content}
              </div>
            </div>
          ) : (
            <div className={`${isGrid ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
              {blogs.map((post) => (
                <div 
                  key={post.slug} 
                  onClick={() => setSelectedPost(post)}
                  className={`group cursor-pointer p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 transition ${isGrid ? "flex flex-col space-y-4" : "flex flex-col md:flex-row gap-6 items-start"}`}
                >
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
                      {post.snippet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}