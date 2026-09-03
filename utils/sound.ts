// utils/sound.ts
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
    const audio = new Audio(path);
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Ignore autoplay restrictions
    });
  } catch {
    // Fail gracefully
  }
};