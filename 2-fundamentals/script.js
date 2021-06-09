'use strict'; // help to find bugs

// Functions
// Function declaration: function that can be used before it's declared
function calculeteAge(birthYear, year) {
    return year - birthYear;
}

let ageJohn = calculeteAge(2000, 2021);


// Function expression: Essentially a function value stored in a variable
var whatDoYouDo = function (job, fristName) {
    switch (job) {
        case 'teacher':
            return fristName + 'teachers kids how to code';
            break;
        case 'driver':
            return fristName + 'driver from Uber';
            break;
        case 'designer':
            return fristName + 'designs beautiful websites';
            break;
        default:
            return fristName + 'is unemployed';
    }
}
console.log(whatDoYouDo('designer', 'John'));

// Arrow function
const ageJohn2 = (birthYear) => 2020 - birthYear;
let age1 = ageJohn2(1996);

const yearUnitRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUnitRetirement(2000, "John"));


//Arrays
// Arrays deleclared with const can have the elements mutate, because it isn't primitive values.
// but replace all the array isn't possible
let names = ['John', 'Ana', 'Odete'];
let years = new Array(1999, 2001, 2020);

console.log(names[0]);// take the element in a specific position
console.log(names); // take the length of the array and all of the elements
console.log(names.length);// take only the length

names.push('Paul');// add element in the end 
names.unshift('Rose');// add a element in the beginning
names.pop();// remove elements from the end
names.shift();// remove element from the beginning
names.indexOf('Ana'); //return the position of the data
names.includes('Ana'); // verified if the param is in the array and return a boolean value.

let john1 = ['John', 1990, 'teacher']// An array can have different data types


// Objects and properties

let john = {
    fristName: 'John',
    lastName: 'Farias',
    birthYear: 2000,
    family: ['Ana', 'Lessy', 'Fera'],
    job: 'unemployed',
    isMarried: false,
    calAge: function () {
        return 20220 - this.birthYear;
    }
};

console.log(john);// print all the informations.
console.log(john.job); // print a specifical information.
console.log(john['lastName']);
let x = 'lastName';
console.log(john[x]);// search for a variable with this name.

john.lastName = 'designer';
john['isMarried'] = true;

let jane = new Object(); // create a empty object.
jane.firstName = 'Jane';
jane.birthYear = 2005;
jane['lastName'] = 'Silve';

const interestedIn = prompt('What do you want to know about me? fristName, lastName, birthYear, family, job');
console.log(john[interestedIn]);

// call methods
john.calAge();
john['claAge']();


// Loops
for (let i = 0; i < 20; i++) {
    console.log(i);
}

let j = 0;
while (j < 200) {
    console.log(j);
    j++;
}