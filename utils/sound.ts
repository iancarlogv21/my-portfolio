// utils/sound.ts

// Preload audio elements once to avoid runtime creation overhead and main-thread stutter
const audioCache: Record<string, HTMLAudioElement> = {};

export const playSound = (type: 'click' | 'switch' | 'hover') => {
  if (typeof window === 'undefined') return;

  // Check if user has muted sounds locally
  const isMuted = localStorage.getItem('portfolio_muted') === 'true';
  if (isMuted) return;

  // Map sound types to their source files (adjust paths if your files are named differently)
  const soundFiles: Record<string, string> = {
    click: '/sounds/click.mp3',   // Replace with your actual sound file paths
    switch: '/sounds/switch.mp3',
    hover: '/sounds/hover.mp3',
  };

  const path = soundFiles[type];
  if (!path) return;

  try {
    let audio = audioCache[type];
    if (!audio) {
      audio = new Audio(path);
      audio.volume = 0.2; // Keep volume low and crisp
      audioCache[type] = audio;
    }

    // Rewind to start instantly for rapid consecutive taps
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore browser autoplay restriction errors silently
    });
  } catch {
    // Fail gracefully if audio assets aren't loaded
  }
};