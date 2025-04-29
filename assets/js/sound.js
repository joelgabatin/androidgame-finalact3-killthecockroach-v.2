// sound.js

// Load sounds
const squishSound = new Audio('assets/sounds/squish.mp3');
const backgroundMusic = new Audio('assets/sounds/background-music.mp3');

// Background music settings
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5; // 50% volume

// Try to play background music immediately
document.addEventListener('DOMContentLoaded', () => {
  backgroundMusic.play().catch(() => {
    // If autoplay is blocked, wait for first user click
    document.addEventListener('click', () => {
      backgroundMusic.play();
    }, { once: true });
  });

  spawnCockroach();
});

// Function to play squish sound
function playSquishSound() {


  if (isMuted) {
  } else {
    squishSound.currentTime = 0;
    squishSound.play();
  }
}
