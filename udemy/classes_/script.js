var firstWords = 'Hello World!!!!';
var secondWord = 'bobao';

console.log(firstWords+' '+secondWord);

// alert put a pop-up in the window
alert(firstWords+' '+secondWord);

// prompt is like JoptionPane, it's a small window that you can recive a input
var city = prompt('what is the city you live?');
console.log(city);

// the math operators (+,-,*,/) is the same ass in others languages

// logical operators
var age1=25, age2 = 36;
var age = age1 > age2; // the variable recive the boolean value from the logical operation
console.log(age);

// typeof serve to know the type of the data thre's in the variable
console.log(typeof age);

/*if(condition){
  do it;
}else if(condition){
  do it;
}else{
  do it;
}*/
// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

//other way to write condition
//condition ? do it : else
//ex.:
age >= 18 ? console.log(fristName) : console.log(lastName);

//23 == '23'-> true, when use == js convert the string '23' to a number to comprer with the number 23.
// 23 === '23' -> false, when use === js do not convert anything, then comparer a string with a number is not valid.

// Functions

function calculeteAge (birthYear, year){
  return year-birthYear;
}

var ageJohn = calculeteAge(2000,2020);

// Function Statements and Expressions

// Function Expression 
var whatDoYouDo = function (job, fristName){
  switch(job){
    case 'teacher':
      return fristName+'teachers kids how to code';
      break;
    case 'driver':
      return fristName+'driver from Uber';
      break;
    case'designer':
      return fristName+'designs beautiful websites';
      break;
    default:
      return fristName+'is unemployed';
  }
}
console.log(whatDoYouDo('designer','John'));

//Arrays
var names = ['John', 'Ana', 'Odete'];
var years = new Array(1999,2001,2020);

console.log(names[0]);// take the element in a specific position
console.log(names); // take the length of the array and all of the elements
console.log(names.length);// take only the length

names.push('Paul');// add element in the end 
names.unshift('Rose');// add a element in the beginning
names.pop();// remove elements from the end
names.shift();// remove element from the beginning
names.indexOf('Ana'); //return the position of the data

var john = ['John', 1990, 'teacher']// An array can have different data types

// Objects and properties

var john = {
  fristName: 'John',
  lastName: 'Farias',
  birthYear: 2000,
  family: ['Ana', 'Lessy', 'Fera'],
  job: 'unemployed',
  isMarried: false,
  calAge: function(birthYear) {
    return 20220-this.birthYear;
  }
};

console.log(john);// print all the informations.
console.log(john.job); // print a specifical information.
console.log(john['lastName']); 
var x = 'lastName';
console.log(john[x]);// search for a variable with this name.

john.lastName = 'designer';
john['isMarried'] = true;

var jane = new Object(); // create a empty object.
jane.firstName = 'Jane';
jane.birthYear = 2005;
jane['lastName'] = 'Silve'; 

// Loops
for (var i = 0; i < 20; i++){
  console.log(i);
}

var j = 0;
while (j < 200){
  console.log(j);
  i++;
}