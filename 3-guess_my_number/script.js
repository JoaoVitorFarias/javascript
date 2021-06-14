"use strict";

// What is the DOM?
//Document object model: structured representation of HTML document allows
//js to acess HTML elements and stylesto manipulate them.

let numberSecret = Math.trunc(Math.random() * 20) + 1; // random number between 1to 20.
let score = 5;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!!!";
  } else if (guess === numberSecret) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Correct number!!!";
      document.querySelector(".number").textContent = numberSecret;

      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#60b347";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      document.querySelector(".message").textContent = "GAME OVER";
      document.querySelector("body").style.backgroundColor = "#ca1111";
    }
  } else if (guess != numberSecret) {
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        guess > numberSecret ? "Too high" : "Too low";
    } else if (score === 0) {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "GAME OVER";
      document.querySelector("body").style.backgroundColor = "#ca1111";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  numberSecret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
