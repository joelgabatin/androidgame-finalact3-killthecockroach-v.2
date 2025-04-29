window.onload = function() {
  
  document.getElementById('muteBtn').addEventListener('click', toggleMute);
  document.getElementById('playAgainBtn').addEventListener('click', () => {
    startGame();
  });
  
  // Start Screen logic
  const startBtn = document.getElementById('startBtn');
  const startScreen = document.getElementById('startScreen');

  startBtn.addEventListener('click', () => {
    console.log("click");
    startScreen.remove(); // ✅ REMOVE start screen from the page
    startGame(); // ✅ Start the real game
  });
  
};



let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('gameArea');


function startGame() {
  console.log("enters startgame");
  const interval = setInterval(spawnCockroach, 1000); // spawn cockroaches
  setSpawnInterval(interval); // ⬅️ tell timer.js about it
  startTimer();               // ⬅️ start countdown timer
}

function spawnCockroach() {
  if (!isOnline) return; // 🚫 Don't spawn if offline


  const cockroach = document.createElement('div');
  cockroach.classList.add('cockroach');
  const maxX = gameArea.clientWidth - 75;
  const maxY = gameArea.clientHeight - 75;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  cockroach.style.left = `${x}px`;
  cockroach.style.top = `${y}px`;

  
  cockroach.addEventListener('mousedown', () => {
    score++;
    scoreElement.textContent = score;
    playSquishSound();  

    // Save position before removing
    const posX = cockroach.style.left;
    const posY = cockroach.style.top;

    // Remove the alive cockroach
    cockroach.remove();

    // Create a dead cockroach
    const deadCockroach = document.createElement('div');
    deadCockroach.classList.add('dead-cockroach');
    deadCockroach.style.left = posX;
    deadCockroach.style.top = posY;

    gameArea.appendChild(deadCockroach);

    // Fade out dead cockroach after short delay
    setTimeout(() => {
      deadCockroach.style.opacity = 0;
    }, 1000);

    // Remove dead cockroach after fade
    setTimeout(() => {
      deadCockroach.remove();
    }, 3000);
  });

  gameArea.appendChild(cockroach);

  setTimeout(() => {
    cockroach.remove();
  }, 1000);
}


