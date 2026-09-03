// components/BlogsSection.tsx
"use client";

import React from "react";

interface BlogsSectionProps {
  onOpenModal: () => void;
}

export default function BlogsSection({ onOpenModal }: BlogsSectionProps) {
  const posts = [
    {
      title: "Being Cringe Is Part of Putting Yourself Out There",
      date: "Aug 2026",
      desc: "Reflections on overcoming hesitation, building publicly, and embracing the creator journey as a developer."
    },
    {
      title: "Build Competitors, Not Copies",
      date: "Aug 2026",
      desc: "Why innovating on existing paradigms outperforms simple cloning in full-stack architecture and product design."
    },
    {
      title: "Stop Focusing Only on the AI Model. Start Building AI Harnesses.",
      date: "Jul 2026",
      desc: "An AI harness is the system surrounding an AI model that makes it reliable, safe, and dependable. Learn why harness engineering is the next big shift."
    }
  ];

  return (
    <section id="blogs" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">01 — blog</h2>
        <button
          onClick={onOpenModal}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition uppercase tracking-wider cursor-pointer"
        >
          all posts →
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition cursor-pointer group">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
              <span>{post.date}</span>
            </div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition">{post.title}</h3>
            {post.desc && <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{post.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}