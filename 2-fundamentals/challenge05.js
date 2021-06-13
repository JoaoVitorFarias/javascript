"use strict";

function printForecast(temps) {
  let forecast = "";
  for (let i = 0; i < temps.length; i++) {
    forecast = forecast + `... ${temps[i]}°C in ${i + 1} days`;
  }
  return forecast;
}

let message = printForecast([17, 21, 23]);
console.log(message);
