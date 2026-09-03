import React from "react";

export default function StatsBanner() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-xl font-bold">4th Year</div>
        <div className="text-[11px] text-zinc-500">BSIT Candidate</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-xl font-bold">Harvard CS50P</div>
        <div className="text-[11px] text-zinc-500">Certified Python Dev</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-xl font-bold">Full-Stack</div>
        <div className="text-[11px] text-zinc-500">PHP, React, MongoDB</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-xl font-bold">UI / UX</div>
        <div className="text-[11px] text-zinc-500">Figma & Canva Pro</div>
      </div>
    </section>
  );
}