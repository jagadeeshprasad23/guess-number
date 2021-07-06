'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //no number
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Enter Valid number';
  }
  //correct guess
  else if (guessNumber === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'correct number ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.padding = '2rem 20%';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //guess is high
  else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess is high
  else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '2rem 10%';

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'guess the number ';
  document.querySelector('.number').textContent = '?';
});
