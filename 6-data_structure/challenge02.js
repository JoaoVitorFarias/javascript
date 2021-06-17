"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (let [goal, players] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${players}`);
}

// 2.
let total = 0;
let index = 0;
for (let odd of Object.entries(game.odds)) {
  total += odd[1];
  index++;
}
console.log(total / index);

//3.
for (let [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${team === "x" ? "draw" : "victory " + game[team]}: ${odd}`
  );
}
