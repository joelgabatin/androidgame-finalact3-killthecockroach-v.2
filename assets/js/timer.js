// timer.js

let timeLeft = 90; // 2 minutes
let timerInterval;
let spawnInterval;
let spawnSpeed = 1000; // start with 1 second
const timerElement = document.getElementById('timer');

function startTimer() {
  timerElement.textContent = timeLeft;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  // Every 20 seconds, increase speed
  if (timeLeft % 10 === 0 && timeLeft !== 90 && timeLeft > 0) {
    increaseSpawnSpeed();
  }

  if (timeLeft <= 0) {
    endGame();
  }
}
function increaseSpawnSpeed() {
  spawnSpeed = Math.max(200, spawnSpeed - 150); // Decrease spawn time
  clearInterval(spawnInterval);
  spawnInterval = setInterval(spawnCockroach, spawnSpeed);

  console.log("⚡ Speed increased! New spawn every " + spawnSpeed + " ms");

  showSpeedUpNotification(); // 👈 Show notification!
}

function showSpeedUpNotification() {
  const notification = document.getElementById('speedUpNotification');
  notification.classList.remove('hidden');
  notification.classList.add('show-speed');

  // Hide after 1 second
  setTimeout(() => {
    notification.classList.remove('show-speed');
    notification.classList.add('hidden');
  }, 1000);
}


function endGame() {
  clearInterval(spawnInterval);
  clearInterval(timerInterval);


  // Show game over screen
  const gameOverScreen = document.getElementById('gameOverScreen');
  const finalScore = document.getElementById('finalScore');
  finalScore.textContent = score; // Set the final score

  gameOverScreen.classList.remove('hidden');
}


function setSpawnInterval(interval) {
  spawnInterval = interval;
}



