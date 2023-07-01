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

// Function to end the game
function endGame() {
  console.log("Game Over!");
  console.log(`Your score: ${score}/${wordPairs.length}`);
  disableButtons();
}

// Function to disable the answer buttons
function disableButtons() {
  synonymButton.disabled = true;
  antonymButton.disabled = true;
  neitherButton.disabled = true;
}
