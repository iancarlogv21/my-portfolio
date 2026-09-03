// utils/sound.ts
let lastHoverTime = 0;
let activeHoverAudio: HTMLAudioElement | null = null;

export const playSound = (type: 'hover' | 'click' | 'switch') => {
  if (typeof window === 'undefined') return;

  // Respect global mute state stored in localStorage
  if (localStorage.getItem('portfolio_muted') === 'true') return;

  try {
    if (type === 'hover') {
      const now = Date.now();
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
      // If clicking or switching, immediately kill any active hover sound so they never mix
      if (activeHoverAudio) {
        activeHoverAudio.pause();
        activeHoverAudio.currentTime = 0;
        activeHoverAudio = null;
      }

      const soundFile = type === 'switch' ? '/sounds/switch.mp3' : '/sounds/click.mp3';
      const audio = new Audio(soundFile);
      audio.volume = 0.50; // Max volume (100%) to fully utilize your boosted audio file
      audio.play().catch(() => {
        // Autoplay safety catch
      });
    }
  } catch {
    // Ignored
  }
};