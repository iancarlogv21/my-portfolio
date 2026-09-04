"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw } from "lucide-react";
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

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"]
];

export default function TypingTestModal({ isOpen, onClose }: TypingTestModalProps) {
  const [activeText, setActiveText] = useState(() => 
    SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)]
  );
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTest = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * SAMPLE_TEXTS.length);
    setActiveText(SAMPLE_TEXTS[randomIndex]);
    setInput("");
    setStartTime(null);
    setElapsedSeconds(0);
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // Timer effect while typing
  useEffect(() => {
    if (startTime && !isCompleted) {
      timerRef.current = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        setElapsedSeconds(seconds);
        
        if (seconds > 0) {
          const wordsTyped = input.length / 5;
          const calculatedWpm = Math.round((wordsTyped / seconds) * 60);
          setWpm(calculatedWpm);
        }
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isCompleted, input.length]);

  // Keyboard listeners for Esc, Tab, and visual key press tracking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        resetTest();
        inputRef.current?.focus();
      }

      setActiveKey(e.key.toLowerCase());
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isOpen, onClose, resetTest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCompleted) return;
    const value = e.target.value;
    
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }

    setInput(value);

    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === activeText[i]) correctChars++;
    }
    const calcAcc = value.length > 0 ? Math.round((correctChars / value.length) * 100) : 100;
    setAccuracy(calcAcc);

    if (value.length >= activeText.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      const totalMinutes = Math.max((Date.now() - (startTime || Date.now())) / 60000, 0.01);
      const calculatedWpm = Math.round((activeText.length / 5) / totalMinutes);
      setWpm(calculatedWpm);
      setAccuracy(calcAcc);
      setIsCompleted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl font-mono text-zinc-100 my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Speed Typing Challenge
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 hover:bg-zinc-900 transition text-zinc-400 hover:text-zinc-100"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mb-8 text-zinc-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-100">{wpm}</div>
              <div className="text-[10px] tracking-widest uppercase text-zinc-500 mt-1">WPM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-100">{accuracy}%</div>
              <div className="text-[10px] tracking-widest uppercase text-zinc-500 mt-1">ACC</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zinc-100">{elapsedSeconds}s</div>
              <div className="text-[10px] tracking-widest uppercase text-zinc-500 mt-1">TIME</div>
            </div>
          </div>

          {/* Prompt Display */}
          <div className="my-6 rounded-xl bg-zinc-900/50 p-5 leading-relaxed text-sm sm:text-base tracking-wide overflow-x-auto whitespace-pre-wrap break-all border border-zinc-900">
            {activeText.split("").map((char, index) => {
              let color = "text-zinc-600";
              if (index < input.length) {
                color =
                  input[index] === char
                    ? "text-zinc-100 font-medium"
                    : "text-rose-400 bg-rose-950/50 rounded px-0.5";
              }
              return (
                <span key={index} className={color}>
                  {char}
                </span>
              );
            })}
          </div>

          {/* Hidden Input */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            disabled={isCompleted}
            className="opacity-0 absolute -top-10 -left-10 pointer-events-none"
            autoFocus
          />

          {isCompleted && (
            <div className="flex justify-center mb-6">
              <button
                onClick={resetTest}
                className="flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Restart Test
              </button>
            </div>
          )}

          {/* Visual Keyboard */}
          <div className="mt-8 flex flex-col items-center gap-1.5 opacity-80 select-none">
            {KEYBOARD_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1.5">
                {row.map((key) => {
                  const isActive = activeKey === key;
                  return (
                    <div
                      key={key}
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border text-xs font-medium uppercase transition-all duration-100 ${
                        isActive
                          ? "border-zinc-400 bg-zinc-800 text-zinc-100 scale-95"
                          : "border-zinc-800 bg-zinc-900/80 text-zinc-400"
                      }`}
                    >
                      {key}
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="flex gap-1.5 mt-0.5">
              <div
                className={`flex h-8 sm:h-9 w-40 sm:w-48 items-center justify-center rounded-lg border text-[10px] tracking-widest uppercase transition-all duration-100 ${
                  activeKey === " "
                    ? "border-zinc-400 bg-zinc-800 text-zinc-100 scale-95"
                    : "border-zinc-800 bg-zinc-900/80 text-zinc-400"
                }`}
              >
                space
              </div>
            </div>
          </div>

          {/* Footer Shortcuts */}
          <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-center items-center gap-6 text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400">tab</kbd> restart
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400">esc</kbd> close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}