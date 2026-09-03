// components/BlogSection.tsx
"use client";

import React, { useState } from "react";
import { blogs } from "@/data/blogs";
import BlogsModal from "./BlogsModal";
import { playSound } from "@/utils/sound";

export default function BlogSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const topBlogs = blogs.slice(0, 3);

  return (
    <section className="space-y-4">
      {/* Header with bottom border */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          01 — blog
        </h2>
        <button
          onClick={() => {
            playSound('click');
            setIsModalOpen(true);
          }}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          ALL POSTS →
        </button>
      </div>

      {/* Blog List with clean horizontal dividers */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800/60">
        {topBlogs.map((post) => (
          <div
            key={post.slug}
            onClick={() => {
              playSound('click');
              setIsModalOpen(true);
            }}
            className="group py-4 px-2 -mx-2 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40 active:bg-zinc-200/60 dark:active:bg-zinc-900/60 transition cursor-pointer flex items-start justify-between gap-4"
          >
            <div className="space-y-1 flex-1 min-w-0 pr-4">
              <h3 className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 group-active:text-zinc-600 dark:group-active:text-zinc-300 transition">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                {post.snippet}
              </p>
            </div>
            
            {/* Fixed-width monospaced date container ensuring perfect vertical alignment */}
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 text-right shrink-0 pt-0.5 w-20">
              {post.date}
            </div>
          </div>
        ))}
      </div>

      <BlogsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}