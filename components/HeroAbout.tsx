// components/HeroAbout.tsx
import React from "react";
import { Code, Globe, Mail } from "lucide-react";

export default function HeroAbout() {
  return (
    <section id="about" className="flex flex-col md:flex-row gap-8 items-start justify-between pb-12 border-b border-zinc-100 dark:border-zinc-900">
      
      {/* Profile Image Frame with Desktop Hover & Mobile Touch Shadow/Scale Effects */}
      <div className="w-44 h-56 md:w-48 md:h-60 rounded-xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-md hover:shadow-2xl active:shadow-2xl shrink-0 border-2 border-zinc-300 dark:border-zinc-700 relative group transition-all duration-300 cursor-pointer">
        <img 
          src="/ian-photo.jpg" 
          alt="Ian Carlo G. Ventura" 
          className="w-full h-full object-cover group-hover:scale-105 active:scale-105 transition duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback text if image hasn't loaded yet */}
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-zinc-400 pointer-events-none -z-10">
          [Ian Carlo Photo]
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for Full-Stack Roles & Projects
        </div>
        <h1 className="text-3xl font-bold font-mono tracking-tight">Ian Carlo G. Ventura</h1>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">
          I&apos;m a <strong>full-stack web developer</strong> who builds modern websites and apps. I love turning complex problems into seamless, functional web experiences. Right now, I&apos;m also exploring generative AI to bring smarter automation into web development.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
          <a href="https://github.com/Iancarlogv21" target="_blank" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition">
            <Code className="h-3.5 w-3.5" /> GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/ian-carlo-ventura-18b8a6296/" target="_blank" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition">
            <Globe className="h-3.5 w-3.5" /> LinkedIn ↗
          </a>
          <a href="mailto:iancarlogventura@gmail.com" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition">
            <Mail className="h-3.5 w-3.5" /> Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}