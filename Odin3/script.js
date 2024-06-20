let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    displayResult("It's a tie!");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  updateScoreboard();
}

function displayResult(message) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = message;
}

function updateScoreboard() {
  const humanScoreElement = document.getElementById('human-score');
  const computerScoreElement = document.getElementById('computer-score');
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}
