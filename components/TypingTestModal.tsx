"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw, Trophy, Zap } from "lucide-react";
import confetti from "canvas-confetti";

interface TypingTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_TEXT =
  "const deploy = async () => { console.log('Building scalable web applications'); };";

export default function TypingTestModal({ isOpen, onClose }: TypingTestModalProps) {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. Wrap in useCallback to stabilize the function for React
  const resetTest = useCallback(() => {
    setInput("");
    setStartTime(null);
    setWpm(null);
    setAccuracy(null);
    setIsCompleted(false);
  }, []);

  // 2. Make the update asynchronous to prevent cascading renders
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        resetTest();
        inputRef.current?.focus();
      }, 50);
      
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [isOpen, resetTest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setInput(value);

    // Completion check
    if (value.length >= SAMPLE_TEXT.length) {
      const elapsedMinutes = (Date.now() - (startTime || Date.now())) / 60000;
      const wordsTyped = value.length / 5;
      const calculatedWpm = Math.round(wordsTyped / (elapsedMinutes || 0.01));

      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < SAMPLE_TEXT.length; i++) {
        if (value[i] === SAMPLE_TEXT[i]) correctChars++;
      }
      const calculatedAccuracy = Math.round((correctChars / SAMPLE_TEXT.length) * 100);

      setWpm(calculatedWpm);
      setAccuracy(calculatedAccuracy);
      setIsCompleted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 font-mono text-zinc-900 dark:text-zinc-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>Speed Typing Challenge</span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prompt Display */}
          <div className="my-6 rounded-lg bg-zinc-50 dark:bg-zinc-900 p-4 leading-relaxed text-sm">
            {SAMPLE_TEXT.split("").map((char, index) => {
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

          {/* Hidden Input Area */}
          {!isCompleted ? (
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Start typing here..."
              className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition"
            />
          ) : (
            <div className="flex items-center justify-around rounded-xl bg-zinc-100 dark:bg-zinc-900 p-4">
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
                className="flex items-center gap-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-3 py-2 text-xs font-semibold text-white dark:text-zinc-900"
              >
                <RefreshCw className="h-3 w-3" /> Retry
              </button>
            </div>
          )}

          <div className="mt-4 flex justify-between text-xs text-zinc-400">
            <span>Press Esc or Close button to exit</span>
            <span className="flex items-center gap-1">
              <Trophy className="h-3 w-3" /> Quick Benchmark
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}