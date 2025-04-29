// reset.js

const playAgainBtn = document.getElementById('playAgainBtn');

playAgainBtn.addEventListener('click', () => {
  resetGame();
});

function resetGame() {
  // Hide Game Over screen
  gameOverScreen.classList.add('hidden');

  // Show Game Area
  gameArea.classList.remove('hidden');
  muteBtn.classList.remove('hidden');

  // Clear existing intervals
  clearInterval(spawnInterval);
  clearInterval(timerInterval);

  // Reset spawn speed
  spawnSpeed = 1000; // ✅ Reset to 1 second
  console.log("Reset spawn speed to " + spawnSpeed + "ms");

  // Reset score
  score = 0;
  scoreElement.textContent = score;

  // Reset timer
  timeLeft = 90;
  timerElement.textContent = timeLeft;

  // Clear cockroaches
  gameArea.innerHTML = '';
}


