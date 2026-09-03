// utils/sound.ts

const audioCache: Record<string, HTMLAudioElement> = {};

export const playSound = (type: 'click' | 'switch' | 'hover') => {
  if (typeof window === 'undefined') return;

  const isMuted = localStorage.getItem('portfolio_muted') === 'true';
  if (isMuted) return;

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
    audio.play().catch(() => {
      // Silently catch autoplay/interaction restrictions on mobile
    });
  } catch {
    // Fail gracefully
  }
};