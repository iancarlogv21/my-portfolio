"use client";

import React from "react";
import { X, ExternalLink } from "lucide-react";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
}: AllProjectsModalProps) {
  if (!isOpen) return null;

  const projects = [
    {
      title: "FONZO AutoService",
      tag: "CAPSTONE PROJECT",
      desc: "Enterprise automotive management system featuring client scheduling, maintenance tracking, and operational analytics.",
      src: "/FONZO.png",
      link: "https://fonzo-calibrations.onrender.com/",
      live: true,
    },
    {
      title: "FELMS — Library Management System",
      tag: "ACADEMIC SYSTEM",
      desc: "High-performance digital catalog and circulation platform utilizing NoSQL MongoDB aggregation pipelines.",
      src: "/FELMS.png",
      link: "https://github.com/iancarlogv",
      live: false,
    },
    {
      title: "cs50p-review (CS50P Final Project)",
      tag: "PYTHON PACKAGE",
      desc: "A custom command-line tool and code reviewer for Python. Install it via terminal with `pip install cs50p-python-reviewer-ian`, then simply type `cs50p-review` to run it.",
      src: "/cs50project.png",
      link: "https://github.com/iancarlogv21/cs50p-python-reviewer",
      live: true,
    },
  ];

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-[99999] bg-white dark:bg-zinc-950 overflow-y-auto p-6 md:p-12 animate-in fade-in duration-200">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Archive
            </span>

            <h2 className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">
              All Projects & Systems
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 md:p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">

                {/* Project Image - LEFT */}
                <div className="w-full md:w-[40%] h-52 md:h-64 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden relative shadow-inner flex-shrink-0 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.src}
                    alt={proj.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition duration-500 shadow-sm"
                  />
                </div>

                {/* Project Information - RIGHT */}
                <div className="flex flex-col justify-center flex-1 space-y-4 w-full">

                  <span className="w-fit text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                    {proj.tag}
                  </span>

                  <h3 className="font-semibold text-xl tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition flex items-center gap-3">
                    {proj.title}

                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition flex-shrink-0" />
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Project Link Text */}
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest pt-2">
                    {proj.title.includes("cs50p-review")
                      ? "{ VIEW REPOSITORY } ↗"
                      : proj.live
                      ? "{ VIEW PACKAGE } ↗"
                      : "{ PRIVATE REPOSITORY }"}
                  </span>

                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}