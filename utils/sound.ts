// utils/sound.ts
let lastHoverTime = 0;

export const playSound = (type: 'hover' | 'click' | 'switch') => {
  if (typeof window === 'undefined') return;

  // Respect global mute state stored in localStorage
  if (localStorage.getItem('portfolio_muted') === 'true') return;

  // Throttle hover sounds so they don't play too fast or overlap aggressively
  if (type === 'hover') {
    const now = Date.now();
    if (now - lastHoverTime < 250) return; // 250ms cooldown per hover trigger
    lastHoverTime = now;
  }

  try {
    let soundFile = '/sounds/click.mp3';
    if (type === 'hover') soundFile = '/sounds/hover.mp3';
    if (type === 'switch') soundFile = '/sounds/switch.mp3';

    const audio = new Audio(soundFile);
    audio.volume = type === 'hover' ? 0.1 : 0.2; // Softer volume for hover
    audio.play().catch(() => {
      // Autoplay safety catch
    });
  } catch {
    // Ignored
  }
};