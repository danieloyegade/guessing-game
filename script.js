"use strict";

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const setBgColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const setNum = (num) => {
  document.querySelector(".number").textContent = num;
};

const setNumSize = (size) => {
  document.querySelector(".number").style.width = size;
};

const scoreDecrement = () => {
  score--;
  document.querySelector(".score").textContent = score;
};

const setScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const setGuess = (guess) => {
  document.querySelector(".guess").value = guess;
};

const resetNum = () => {
  num = Math.trunc(Math.random() * 20) + 1;
};

const resetScore = () => {
  score = 20;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;

  //   when there is no input
  if (!guess) {
    displayMessage("Enter a number!");

    // When the guess is outside of game parameters
  } else if (guess < 1 || guess > 20) {
    displayMessage("Enter a number between 1 and 20!");

    // when player wins the game
  } else if (guess === num) {
    setBgColor("#60b347");
    setNumSize("30rem");
    displayMessage("🎉 Correct Number!");
    setNum(num);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? "Too High!" : "Too Low!");
      scoreDecrement();
    } else {
      displayMessage("Game Over!");
      setScore(0);
      setBgColor("#D22B2B");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  resetNum();
  resetScore();
  setNum("?");
  setScore(score);
  setGuess("");
  displayMessage("Start guessing...");
  setBgColor("#222");
  setNumSize("15rem");
});

console.log(num);
