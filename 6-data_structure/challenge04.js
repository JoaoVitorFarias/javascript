"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
console.log(text.value);
const button = document.querySelector("button");

function formatWord(textElement) {
  let [first, second] = textElement.trim().split("_");
  return (
    first.replace(first[0], first[0].toLowerCase()) +
    second.replace(second[0], second[0].toUpperCase())
  );
}

button.addEventListener("click", function () {
  const textArr = text.value.split("\n");
  let textAux = "";

  for (let i = 0; i < textArr.length; i++) {
    textAux = formatWord(textArr[i]);
    console.log(`${textAux.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});
