// components/StatsBanner.tsx
import React from "react";

export default function StatsBanner() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-sm font-bold">Education</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">City College of San Fernando</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-sm font-bold">Full-Stack Stack</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">Next.js, Python, MongoDB, Tailwind</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-sm font-bold">Project Focus</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">Scalable Web Apps & Tools</div>
      </div>
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="text-sm font-bold">Backend & APIs</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">RESTful Services & Databases</div>
      </div>
    </section>
  );
}