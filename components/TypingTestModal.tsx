"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw, Zap, Terminal, Cpu } from "lucide-react";
import confetti from "canvas-confetti";

interface TypingTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_TEXTS = [
  "const deploy = async () => { console.log('Building scalable web applications'); };",
  "function optimizeQuery(database, query) { return database.aggregate(query); }",
  "interface SystemConfig { readonly endpoint: string; timeoutMs: number; }",
  "docker build -t felms-app:latest --build-arg NODE_ENV=production .",
  "git commit -m 'refactor: streamline MongoDB aggregation pipeline performance'"
];

export default function TypingTestModal({ isOpen, onClose }: TypingTestModalProps) {
  // Lazy initialization automatically picks a random snippet fresh every time the modal mounts
  const [activeText, setActiveText] = useState(() => 
    SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)]
  );
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetTest = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * SAMPLE_TEXTS.length);
    setActiveText(SAMPLE_TEXTS[randomIndex]);
    setInput("");
    setStartTime(null);
    setWpm(null);
    setAccuracy(null);
    setIsCompleted(false);
  }, []);

  // Effect is strictly used for keyboard listeners (Escape and Alt+J) and autofocusing on mount
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.altKey && (e.key === "j" || e.key === "J" || e.code === "KeyJ")) {
        e.preventDefault();
        resetTest();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, resetTest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setInput(value);

    // Completion check
    if (value.length >= activeText.length) {
      const elapsedMinutes = (Date.now() - (startTime || Date.now())) / 60000;
      const wordsTyped = value.length / 5;
      const calculatedWpm = Math.round(wordsTyped / (elapsedMinutes || 0.01));

      let correctChars = 0;
      for (let i = 0; i < activeText.length; i++) {
        if (value[i] === activeText[i]) correctChars++;
      }
      const calculatedAccuracy = Math.round((correctChars / activeText.length) * 100);

      setWpm(calculatedWpm);
      setAccuracy(calculatedAccuracy);
      setIsCompleted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 font-mono text-zinc-900 dark:text-zinc-100 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Speed Typing Challenge</span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prompt Display */}
          <div className="my-5 sm:my-6 rounded-lg bg-zinc-50 dark:bg-zinc-900 p-3 sm:p-4 leading-relaxed text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-all">
            {activeText.split("").map((char, index) => {
              let color = "text-zinc-400 dark:text-zinc-600";
              if (index < input.length) {
                color =
                  input[index] === char
                    ? "text-emerald-500 font-bold"
                    : "text-rose-500 bg-rose-100 dark:bg-rose-950/40";
              }
              return (
                <span key={index} className={color}>
                  {char}
                </span>
              );
            })}
          </div>

          {/* Input Area */}
          {!isCompleted ? (
            <div className="space-y-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Start typing code snippet here..."
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 sm:px-4 py-2.5 text-xs sm:text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition"
              />
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400 px-1">
                <span className="flex items-center gap-1">
                  <Terminal className="h-3 w-3" /> Auto-generates syntax snippets
                </span>
                <span className="hidden sm:inline">Shortcut: Alt + J</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">{wpm}</div>
                <div className="text-xs text-zinc-500">WPM</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-500">{accuracy}%</div>
                <div className="text-xs text-zinc-500">Accuracy</div>
              </div>
              <button
                onClick={resetTest}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-xs font-semibold text-white dark:text-zinc-900 transition hover:opacity-90"
              >
                <RefreshCw className="h-3 w-3" /> Retry / New Code
              </button>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-zinc-400 gap-2">
            <span>Press Esc to exit or Alt + J to reset</span>
            <span className="flex items-center gap-1">
              <Cpu className="h-3 w-3 text-zinc-500" /> Developer Benchmark
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}