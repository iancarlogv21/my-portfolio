"use client";

import React from "react";

interface DesignPortfolioProps {
  onOpenAllDesigns: () => void;
}

export default function DesignPortfolio({ onOpenAllDesigns }: DesignPortfolioProps) {
  const designs = [
    {
      title: "ZOL Esports Landing Page",
      desc: "Comprehensive esports organization layout featuring team rosters, tournament schedules, news blocks, and immersive yellow-gold branding.",
      src: "/zol.png",
      link: "https://iancarlo.my.canva.site/zol-esports"
    },
    {
      title: "Almost Heaven Hotel & Resort",
      desc: "Luxury hospitality booking interface highlighting room tiers, reservation selectors, resort amenities, and photo galleries.",
      src: "/Hotel.png",
      link: "https://iancarlo.my.canva.site/almost-heaven-hotel"
    },
    {
      title: "Taylor Swift TTPD Store & Tour Portal",
      desc: "The Tortured Poets Department album store and Eras Tour interactive concept page featuring music players and merch grids.",
      src: "/PrelimProj_Taylor.png",
      link: "https://iancarlo.my.canva.site/taylor-swift"
    },
    {
      title: "Cristiano Ronaldo Web Portal",
      desc: "Dynamic athletic tribute site featuring match countdowns, fixture schedules, career bios, and photo grids.",
      src: "/ronaldo-portal.png",
      link: "https://iancarlo.my.canva.site/ronaldo-portal"
    }
  ];

  return (
    <section id="designs" className="space-y-6">
      <div className="flex items-center justify-between relative z-20">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
          02 — UI/UX & Web Design Portfolio (Canva & Figma)
        </h2>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onOpenAllDesigns();
          }}
          className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-1 uppercase tracking-wider cursor-pointer px-2 py-1 bg-transparent"
        >
          All Designs →
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {designs.map((item, index) => (
          <a 
            key={index}
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 group block hover:border-zinc-400 dark:hover:border-zinc-600 transition"
          >
            <div className="h-48 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden flex items-center justify-center text-xs font-mono text-zinc-400">
              <span 
                className="absolute inset-0 bg-top bg-cover opacity-90 group-hover:scale-105 transition duration-300" 
                style={{ backgroundImage: `url('${item.src}')` }}
              ></span>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition">{item.title}</h3>
                <span className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-1">
                  View Live ↗
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}