// List of word pairs
const wordPairs = [
  { word1: "happy", word2: "joyful", type: "s" },
  { word1: "big", word2: "small", type: "a" },
  { word1: "hot", word2: "cold", type: "a" },
  { word1: "fast", word2: "slow", type: "a" },
  { word1: "happy", word2: "sad", type: "a" },
  { word1: "smart", word2: "stupid", type: "a" },
  { word1: "angry", word2: "calm", type: "a" },
  { word1: "joyful", word2: "sad", type: "n" },
  { word1: "big", word2: "fast", type: "n" },
  { word1: "small", word2: "stupid", type: "n" }
];

// Game variables
let currentPairIndex = 0;
let score = 0;

// DOM elements
const wordPairElement = document.getElementById("word-pair");
const synonymButton = document.getElementById("synonym-btn");
const antonymButton = document.getElementById("antonym-btn");
const neitherButton = document.getElementById("neither-btn");
const scoreElement = document.getElementById("score");
const scoreMessage = document.getElementById("score-message")
const tokenMessage = document.getElementById("token-amount")
const claimToken = document.getElementById("claim-btn")
const playButton = document.getElementById("play-btn");
const gameContainer = document.getElementById("game-container");
const timerElement = document.createElement("div");
// const appHeader = document.getElementById('app-header')
timerElement.classList.add("timer");
document.body.appendChild(timerElement);

// Add click event listener to play button
playButton.addEventListener("click", startGame);

// Function to start the game
function startGame() {
  // appHeader.style.display = "none";
  gameContainer.style.display = "block";
  playButton.style.display - 'none';
  displayWordPair();
  startTimer(60); // 60 seconds timer
}

// Function to start the timer
function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;
  let intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(intervalId);
      endGame();
    }
  }, 1000);
}


// Display initial word pair
displayWordPair();

// Add click event listeners to buttons
synonymButton.addEventListener("click", () => handleAnswer("s"));
antonymButton.addEventListener("click", () => handleAnswer("a"));
neitherButton.addEventListener("click", () => handleAnswer("n"));

// Function to display the current word pair
function displayWordPair() {
  const wordPair = wordPairs[currentPairIndex];
  wordPairElement.textContent = `${wordPair.word1} - ${wordPair.word2}`;
}

// Function to handle the player's answer
function handleAnswer(answer) {
  const wordPair = wordPairs[currentPairIndex];

  if (answer === wordPair.type) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong answer.");
  }

  currentPairIndex++;
  updateScore();

  if (currentPairIndex < wordPairs.length) {
    displayWordPair();
  } else {
    endGame();
  }
}

// Function to update the score on the GUI
function updateScore() {
  scoreElement.textContent = `Score: ${score}/${wordPairs.length}`;
}


// Function to disable the answer buttons
function disableButtons() {
  synonymButton.disabled = true;
  antonymButton.disabled = true;
  neitherButton.disabled = true;
}

function endGame() {
  scoreMessage.textContent = `You scored a total of: ${score}/${wordPairs.length}`;
  tokenMessage.textContent = `... meaning you have earned ${score} free YouCoins`;
  claimToken.style.display = 'block';

  disableButtons();
}