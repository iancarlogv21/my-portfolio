// components/CertificationsModal.tsx
"use client";

import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const categories = [
    {
      name: "PROGRAMMING & SECURITY",
      certs: [
        {
          title: "CS50's Introduction to Programming with Python",
          issuer: "HARVARD UNIVERSITY",
          link: "https://cs50.harvard.edu/certificates/276e5090-9e13-4260-9254-7a75c9918224",
          iconType: "harvard"
        },
        {
          title: "Cybersecurity Fundamentals",
          issuer: "CREDLY VERIFIED",
          link: "https://www.credly.com/badges/e6a4c68e-6997-4780-ac57-6c754c74a83b",
          iconType: "ibm"
        },
        {
          title: "Data Fundamentals",
          issuer: "CREDLY VERIFIED",
          link: "https://www.credly.com/badges/77434a96-2c22-43ec-9df0-305c317c3d9a",
          iconType: "ibm"
        }
      ]
    },
    {
      name: "ANALYTICS & AI",
      certs: [
        {
          title: "Google Analytics Certification",
          issuer: "GOOGLE",
          link: "https://www.credential.net/920fee44-2935-4275-85b9-fe2ca2034a02#acc.rlJdPYFQ",
          iconType: "google"
        },
        {
          title: "Getting Started with Generative AI",
          issuer: "CREDLY VERIFIED",
          link: "https://www.credly.com/badges/1bf10f7d-3607-43f5-a5ef-3b5d843e701a",
          iconType: "ibm"
        },
        {
          title: "Information Technology Fundamentals",
          issuer: "CREDLY VERIFIED",
          link: "https://www.credly.com/badges/5c32394f-3801-4b16-bcb7-81152ca0248f",
          iconType: "ibm"
        }
      ]
    }
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "harvard":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src="/harvard-white-removebg-preview.png" 
            alt="Harvard Logo" 
            className="w-full h-full object-contain scale-125"
          />
        );
      case "google":
        return (
          <svg className="w-10 h-10" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.31 7.27 24 12 24z"/>
            <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.19C.43 8.15 0 9.92 0 12s.43 3.85 1.19 5.4l4.08-3.16z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.27 0 3.18 2.69 1.19 6.6l4.08 3.16c.95-2.85 3.6-4.96 6.73-4.96z"/>
          </svg>
        );
      case "ibm":
      default:
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src="/nav_logo.svg" 
            alt="IBM SkillsBuild Logo" 
            className="w-full h-full object-contain scale-95 dark:invert dark:brightness-200"
          />
        );
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 left-0 md:left-64 z-[99999] bg-white dark:bg-zinc-950 overflow-y-auto p-6 md:p-12 animate-in fade-in duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Archive</span>
            <h2 className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100">All Certifications & Credentials</h2>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition flex items-center gap-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            <X className="h-4 w-4" /> Close
          </button>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">{cat.name}</h3>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.certs.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center justify-between space-y-6 group"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-3.5 shadow-inner overflow-hidden">
                      {renderIcon(cert.iconType)}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition line-clamp-2">{cert.title}</h4>
                      <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">{cert.issuer}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition tracking-widest">
                        {'{ VERIFY }'} ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}