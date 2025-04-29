// network.js
// network.js

const offlineScreen = document.getElementById('offlineScreen');

let isOnline = true; // control gameplay

function updateOnlineStatus() {
  if (navigator.onLine) {
    offlineScreen.classList.add('hidden');
    isOnline = true;
  } else {
    offlineScreen.classList.remove('hidden');
    isOnline = false;
  }

  if (!isOnline) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
}

// Listen for connection changes -> check if their is internet connection
window.addEventListener('offline', updateOnlineStatus);
window.addEventListener('online', updateOnlineStatus);

// Check immediately after load
window.addEventListener('load', updateOnlineStatus);
