"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(startIndex, mainIndex) {
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

  orderDelivery({ startIndex, mainIndex, time, address }) {
    /*console.log(
      `Order recived! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );*/
  },
  orderPasta(igr1, igr2, igr3) {
    //console.log(`Here is your pasta with ${igr1}, ${igr2} and ${igr3}`);
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
//console.log(starter, main);

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

// Spread operator
const arr1 = [2, 3, 6];
const newArr1 = [1, 8, ...arr1]; // the spread operator will put the elements of the'arr1' inside the 'newArr1'

//console.log(...newArr1); // the way to print each element individually

//join 2 arrays or more
const newArr2 = [...arr1, ...newArr1];

// Iterables:arrays, strings, maps and sets. NOT objects
const str = "John";
const arr2 = [...str, " ", "L. F."];

/*const ingredients = [
  prompt("Ingedient 1 for your pasta?"),
  prompt("Ingedient 2 for your pasta?"),
  prompt("Ingedient 3 for your pasta?"),
];

restaurant.orderPasta(...ingredients);*/

// objet copy;
const newRestaurant = { ...restaurant, founder: "Bolt" };

const [r, s, ...t] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const { sat, ...weekdays } = restaurant.openingHours;

// functions
const add = function (...numbres) {
  let total = 0;

  for (let i = 0; i < numbres.length; i++) {
    total += numbres[i];
  }
  //console.log(total);
};

add(1, 2, 3);
add(2, 3, 5, 9, 41);
add(1, 2, 85);

// logic operatos can use and return any data type, and short-circuiting
// OR
// console.log(3 || "John");
// short-circuiting - means that if the first value is a truthy value, it will
// immediately return that first value.

const guests = restaurant.numGuests || 12;

// AND
// short-circuiting - means that if the first value is a falsy value, it will
// immediately return that first value.
// console.log(0 || "John");
// console.log(12 || "John");

//Nullish coalescing operator

restaurant.numGuests = 0;
const guestsOr = restaurant.numGuests || 12; // will return 12, because 0 is false
// to solve this problem it is necessary use the nullish coalescing operator
const guestsNullish = restaurant.numGuests ?? 12;
// it is happens because nullish works with null and undefined values, not 0 or ''

//Loop for-of

for (let num of t) {
  //console.log(num);
}

// return the element with the index position
for (let num of t.entries()) {
  //console.log(num);
}

// destructuring
for (let [index, num] of t.entries()) {
  //console.log(`${index}: ${num}`);
}

// optional chaining
// if certain propertydoes not exist, then undefined is return immediately.
//console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (let day of days) {
  //console.log(restaurant.openingHours[day]?.open ?? "closed");
}

// verified the methods exist before call
const order = restaurant.order?.(1, 2) ?? "Methods does not exist";

//Looping objects
// take the keys of the object
for (const day of Object.keys(restaurant.openingHours)) {
  //console.log(day);
}

// take the values in the objects without the keys
for (const day of Object.values(restaurant.openingHours)) {
  //console.log(day);
}

// to take the keys with the values it is necessary use the entries
for (const day of Object.entries(restaurant.openingHours)) {
  //console.log(day);
}

// SET
// it is basically a colection of unique values.
// the elements in the set has not index, because the order does not matter
const orderSet = new Set(["João", "Maria", "João e Maria", "Maria", "João"]);
const sizeOrder = orderSet.size;
const hasOrder = orderSet.has("Paulo");
orderSet.add("Paulo");
orderSet.delete("João e Maria");

for (let order of orderSet) {
  //console.log(order);
}

const staff = [1, 2, 3, 2, 1, 2, 2, 1, 3, 5];
const staffUnique = [...new Set(staff)]; // remove the duplication in the array
//console.log(staffUnique);

orderSet.clear();

//MAP
// map is data structure that we can use to map values to keys
// the keys can have any type like array, string, number and etc.

const rest = new Map();
rest.set("universidade", "UnB");
rest.set("campus", "FGA");

rest.get("universidade");
rest.has("campus");
rest.has("cidade");
rest.delete("campus");
const restSize = rest.size;
rest.set(document.querySelector("h1", "Heading"));

rest.clear();

//converting objects to maps
const hoursMap = new Map(Object.entries(restaurant.openingHours));

// converting maps to array
const hoursArr = [...hoursMap];

rest.entries();
rest.keys;
rest.values;
