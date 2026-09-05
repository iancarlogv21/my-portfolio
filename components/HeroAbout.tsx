// components/HeroAbout.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Code, Globe, Mail } from "lucide-react";

export default function HeroAbout() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-8 items-start justify-between pb-12 border-b border-zinc-100 dark:border-zinc-900"
    >
      {/* Profile photo */}
      <div className="relative group w-44 h-56 md:w-48 md:h-60 shrink-0 overflow-hidden rounded-xl border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 cursor-pointer">
        {imageError ? (
          <div
            role="img"
            aria-label="Ian Carlo G. Ventura — photo unavailable"
            className="absolute inset-0 flex items-center justify-center font-mono text-xs text-zinc-400"
          >
            [Ian Carlo Photo]
          </div>
        ) : (
          <Image
            src="/IanCarlo.png"
            alt="Ian Carlo G. Ventura"
            fill
            sizes="(min-width: 768px) 192px, 176px"
            loading="eager"
            fetchPriority="high"
            className="object-cover grayscale group-hover:scale-105 group-active:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* About content */}
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
          <Briefcase
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-zinc-900 dark:text-zinc-100"
          />
          Available for Full-Stack Roles &amp; Projects
        </div>

        <h1 className="text-3xl font-bold font-mono tracking-tight">
          Ian Carlo G. Ventura
        </h1>

        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">
          I&apos;m a <strong>full-stack web developer</strong> who builds modern
          websites and apps. I love turning complex problems into seamless,
          functional web experiences. Right now, I&apos;m also exploring
          generative AI to bring smarter automation into web development.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
          <a
            href="https://github.com/Iancarlogv21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition-colors"
          >
            <Code aria-hidden="true" className="h-3.5 w-3.5" />
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ian-carlo-ventura-18b8a6296/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition-colors"
          >
            <Globe aria-hidden="true" className="h-3.5 w-3.5" />
            LinkedIn ↗
          </a>

          <a
            href="mailto:iancarlogventura@gmail.com"
            className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 active:text-zinc-900 dark:active:text-zinc-100 transition-colors"
          >
            <Mail aria-hidden="true" className="h-3.5 w-3.5" />
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}