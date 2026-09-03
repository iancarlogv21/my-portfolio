// components/AllBlogsModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/data/blogs";

interface AllBlogsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSound: () => void;
}

export default function AllBlogsModal({ isOpen, onClose, onSound }: AllBlogsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-base font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            All Blog Posts ({blogs.length})
          </h2>
          <button
            onClick={() => {
              onSound();
              onClose();
            }}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {blogs.map((post) => (
            <div
              key={post.slug}
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{post.date}</span>
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{post.snippet}</p>
              <div className="pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  onClick={onSound}
                  className="text-xs font-mono text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-300 transition cursor-pointer"
                >
                  Read All →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}