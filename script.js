'use strict';
// import confetti.js;
const btns = document.querySelectorAll('.btn');
const textContainer = document.querySelector('.text-container');
let playerScore = 0,
  computerScore = 0;

const playerDisplayScore = document.querySelector('.player-score-span');
const computerDisplayScore = document.querySelector('.computer-score-span');
const backgroundPopup = document.querySelector('.background-popup');
const popup = document.querySelector('.popup');
const popupText = document.querySelector('.popup-text');
const popupButton = document.querySelector('.popup-again-button');
// //////////////////////////////////////////////////////////////////

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoices = ['scissors', 'rock', 'paper'];
  console.log(`Computer choice: ${computerChoices[randomNumber]}`);
  return computerChoices[randomNumber];
}

// //////////////////////////////////////////////////////////////////

function finalScore(user, score) {
  backgroundPopup.classList.remove('hidden');
  if (user === 'Player') {
    popupText.innerText = `${user} Won 🎉`;
    popupText.style.color = 'green';
  } else {
    popupText.innerText = `${user} Won 😟`;
    popupText.style.color = 'red';
  }
}

// //////////////////////////////////////////////////////////////////

function game(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    textContainer.innerHTML = 'draw';
    return 'draw';
  }

  if (
    (computerChoice === 'scissors' && playerChoice === 'rock') ||
    (computerChoice === 'rock' && playerChoice === 'paper') ||
    (computerChoice === 'paper' && playerChoice === 'scissors')
  ) {
    textContainer.innerHTML = 'Player win';
    playerDisplayScore.innerHTML = ++playerScore;
    if (playerScore === 5) {
      finalScore('Player', playerScore);
    }
    return 'player win';
  }

  if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'paper' && playerChoice === 'rock') ||
    (computerChoice === 'scissors' && playerChoice === 'paper')
  ) {
    textContainer.innerHTML = 'Computer win';
    computerDisplayScore.innerHTML = ++computerScore;
    if (computerScore === 5) {
      finalScore('Computer', computerScore);
    }
    return 'player lose';
  }
}

// //////////////////////////////////////////////////////////////////

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    game(e.currentTarget.classList[1], computerPlay());
    console.log(playerScore, computerScore);
  });
});

// //////////////////////////////////////////////////////////////////

popupButton.addEventListener('click', () => {
  location.reload();
});
