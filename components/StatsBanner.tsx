// components/StatsBanner.tsx
"use client";

import { useId, useRef } from "react";
import { ArrowUpRight, GraduationCap, X } from "lucide-react";

const cards = [
  { title: "Tech Stack", content: "Next.js, Python, MongoDB, Tailwind" },
  { title: "Project Focus", content: "Scalable Web Apps & Tools" },
  { title: "Location", content: "Based in the Philippines" },
];

export default function StatsBanner() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();
  const titleId = useId();
  const descriptionId = useId();

  const headingClass =
   "inline-flex items-start gap-1 text-base font-normal leading-6 tracking-tight text-zinc-600 dark:text-zinc-400 transition-colors duration-200 group-hover:font-medium group-hover:text-zinc-700 dark:group-hover:text-zinc-300 group-focus-visible:font-medium group-focus-visible:text-zinc-700 dark:group-focus-visible:text-zinc-300";

  const arrowClass =
    "mt-1 h-2.5 w-2.5 shrink-0 text-zinc-300 dark:text-zinc-600";

  const detailClass =
    "mt-1 block text-[10px] uppercase leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-400";

  return (
    <>
      <section aria-label="Portfolio overview" className="w-full font-mono">
        <div className="grid grid-cols-2 border-t border-zinc-200 dark:border-zinc-800 sm:grid-cols-4">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-controls={dialogId}
            onClick={() => dialogRef.current?.showModal()}
            className="group min-w-0 cursor-pointer border-r border-zinc-200 py-5 pr-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-800 sm:pr-5"
          >
            <span className={headingClass}>
              Education
              <ArrowUpRight aria-hidden="true" className={arrowClass} />
            </span>

            <span className={detailClass}>
              BS Information Technology
            </span>
          </button>

          {cards.map((card, index) => (
            <div
              key={card.title}
              className={
                "group min-w-0 border-zinc-200 py-5 dark:border-zinc-800 " +
                (index === 0
                  ? "pl-4 sm:border-r sm:px-5"
                  : index === 1
                    ? "border-r border-t pr-4 sm:border-t-0 sm:px-5"
                    : "border-t pl-4 sm:border-t-0 sm:pl-5")
              }
            >
              <h2 className={headingClass}>
                {card.title}
                <ArrowUpRight aria-hidden="true" className={arrowClass} />
              </h2>

              <p className={detailClass}>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Decorative dots */}
        <div
          aria-hidden="true"
          className="mt-2 h-6 w-full text-zinc-300 dark:text-zinc-700"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "13px 12px",
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </section>

      {/* Education modal */}
      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;

          const rect = event.currentTarget.getBoundingClientRect();
          const clickedOutside =
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom;

          if (clickedOutside) {
            event.currentTarget.close();
          }
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 font-mono text-zinc-900 shadow-2xl backdrop:bg-black/50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Education
          </span>

          <button
            type="button"
            aria-label="Close education details"
            onClick={() => dialogRef.current?.close()}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:hover:bg-zinc-800"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
          <GraduationCap
            aria-hidden="true"
            className="h-8 w-8"
            strokeWidth={1.5}
          />
        </div>

        <h2 id={titleId} className="text-xl font-bold leading-snug">
          Bachelor of Science in Information Technology
        </h2>

        <div id={descriptionId}>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            City College of San Fernando, Pampanga
          </p>

          <p className="mt-6 border-t border-zinc-100 pt-4 text-[11px] uppercase tracking-wider text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            4th Year · Currently Enrolled
          </p>
        </div>
      </dialog>
    </>
  );
}