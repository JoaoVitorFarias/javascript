"use strict";

const bookingArr = [];

const createBooking = function (
  flightNumber,
  numberPassengers = 1,
  price = 250 * numberPassengers
) {
  const booking = {
    flightNumber,
    numberPassengers,
    price,
  };

  bookingArr.push(booking);
  console.log(booking);
};

// in js, it can't pass arguments by reference (like pointers in C/C++), only by value.

// functions accepting callback functions
const oneWord = (str) => str.replaceAll(" ", "").toLowerCase();

const upperFristWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`${fn(str)}`);
};

//transformer("João Vitor Lopes de Farias ", upperFristWord);
//transformer("João Vitor Lopes de Farias ", oneWord);

// functions returning functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
*/

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHello = greet("Hello");
greetHello("Bolt");
greetHello("John");

greet("Hi")("People");

//immediately invoked function expression (IIFE)
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will never run again"))();

//Closures
/*
A function always has access to the variable environment of the execution
context;in which it was created, even after a debt execution context is gone.
The closures is then basically this variable environment attached to the function.
A clouser gives a function acess to all the variables of its parent function, even 
that parent function has return.
A closure makes sure that a function doesn't loose connection to variables that existed
at the function birth place.
The closure is automatically create by js.
*/

let f;

const g = function () {
  const a = 22;

  f = function () {
    console.log(a * 3);
  };
};

g();
f();

/*
setTimeOut(function () {
  console.log("Hi");
}, 1000);
*/
