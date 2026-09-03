// utils/sound.ts
let lastHoverTime = 0;
let lastClickTime = 0;
let activeHoverAudio: HTMLAudioElement | null = null;
let activeClickAudio: HTMLAudioElement | null = null;

export const playSound = (type: 'hover' | 'click' | 'switch') => {
  if (typeof window === 'undefined') return;

  // Respect global mute state stored in localStorage
  if (localStorage.getItem('portfolio_muted') === 'true') return;

  const now = Date.now();

  try {
    if (type === 'hover') {
      if (now - lastHoverTime < 300) return; // Cooldown to prevent spamming
      lastHoverTime = now;

      // Stop any existing hover sound before starting a new one
      if (activeHoverAudio) {
        activeHoverAudio.pause();
        activeHoverAudio.currentTime = 0;
      }

      const audio = new Audio('/sounds/hover.mp3');
      audio.volume = 0.4; // Comfortable level for hover
      activeHoverAudio = audio;
      
      audio.play().catch(() => {
        // Autoplay safety catch
      });

      audio.onended = () => {
        if (activeHoverAudio === audio) {
          activeHoverAudio = null;
        }
      };
    } else {
      // Prevent rapid mobile touch + click double-triggers within 250ms
      if (now - lastClickTime < 250) return;
      lastClickTime = now;

      // Immediately kill any active hover sound so they never mix
      if (activeHoverAudio) {
        activeHoverAudio.pause();
        activeHoverAudio.currentTime = 0;
        activeHoverAudio = null;
      }

      // If a click/switch is already playing, cut it off to prevent doubling
      if (activeClickAudio) {
        activeClickAudio.pause();
        activeClickAudio.currentTime = 0;
      }

      const soundFile = type === 'switch' ? '/sounds/switch.mp3' : '/sounds/click.mp3';
      const audio = new Audio(soundFile);
      audio.volume = 0.50; // Max volume
      activeClickAudio = audio;

      audio.play().catch(() => {
        // Autoplay safety catch
      });

      audio.onended = () => {
        if (activeClickAudio === audio) {
          activeClickAudio = null;
        }
      };
    }
  } catch {
    // Ignored
  }
};