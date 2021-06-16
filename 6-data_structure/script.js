"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({ startIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//Destructuring array
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

let [first, , third] = restaurant.categories;

//change the values
const temp = first;
first = third;
third = temp;

// it is the same that:
[first, third] = [third, first];

const [starter, main] = restaurant.order(1, 2);
console.log(starter, main);

const nested = [1, 5, [2, 3]];
const [i, , j] = nested;
const [k, , [m, n]] = nested; // destructuring inside the destructuring

//Destructuring object
// the variables need to have the same name the object's attribute
const { name, categories, openingHours } = restaurant;

// it is the way to use a variable with a different name than object's attributes
const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;

let d = 12;
let e = 23;
const obj = { d: 1, e: 25, f: 45 };
({ d, e } = obj);

// nested object
const {
  fri: { open: openHour, close: closeHour },
} = openingHours;

restaurant.orderDelivery({
  time: "22:30",
  address: "Quadra 01 Setor Oeste, Gama-DF",
  mainIndex: 1,
  startIndex: 3,
});
