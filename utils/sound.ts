// utils/sound.ts

const audioCache: Record<string, HTMLAudioElement> = {};

export const playSound = (type: 'click' | 'switch' | 'hover') => {
  if (typeof window === 'undefined') return;

  const isMuted = localStorage.getItem('portfolio_muted') === 'true';
  
  // Automatically bypass sound on mobile devices to completely eliminate main-thread audio lag
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMuted || isMobile) return;

  const soundFiles: Record<string, string> = {
    click: '/sounds/click.mp3',
    switch: '/sounds/switch.mp3',
    hover: '/sounds/hover.mp3',
  };

  const path = soundFiles[type];
  if (!path) return;

  try {
    let audio = audioCache[type];
    if (!audio) {
      audio = new Audio(path);
      audio.volume = 0.10;
      audioCache[type] = audio;
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    // Fail gracefully
  }
};