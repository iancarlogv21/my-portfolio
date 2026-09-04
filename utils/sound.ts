// utils/sound.ts
let lastPlayedTime = 0;

export const playSound = (type: 'click' | 'switch') => {
  if (typeof window === 'undefined') return;
  
  const isMuted = localStorage.getItem('portfolio_muted') === 'true';
  if (isMuted) return;

  // Throttle to prevent mobile double-triggering (touchstart + click cascade)
  const now = Date.now();
  if (now - lastPlayedTime < 200) return;
  lastPlayedTime = now;

  const soundFiles: Record<string, string> = {
    click: '/sounds/click.mp3',
    switch: '/sounds/switch.mp3',
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