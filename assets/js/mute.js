// mute.js
document.getElementById('muteBtn').addEventListener('click', toggleMute);

let isMuted = false;


// Mute/Unmute function
function toggleMute() {
  isMuted = !isMuted;
  
  if (isMuted) {
    backgroundMusic.pause();
    squishSound.pause();
  } else {
    backgroundMusic.play();
    squishSound.play();
  }
  
  updateMuteButtonIcon();
}

// Update the mute button icon
function updateMuteButtonIcon() {
  const muteIcon = document.getElementById('muteBtnIcon');
  
  if (isMuted) {
    muteIcon.className = 'fas fa-volume-mute';
  } else {
    muteIcon.className = 'fas fa-volume-up';
  }
}
