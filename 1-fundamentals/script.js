let firstWord = 'Hello';
let secondWord = 'World!!!!';

console.log(firstWord + ' ' + secondWord);

// alert put a pop-up in the window
//alert(firstWord + ' ' + secondWord);

// JavaScript has dynamic typing: We do not have to manually define the data type of
// the value stored in a variable. Instead, data types are determined automatically

// prompt is like JoptionPane, it's a small window that you can recive a input
let city = prompt('what is the city you live?');
console.log(city);

// the math operators (+,-,*,/) is the same ass in others languages.

// logical operators
let age1 = 25, age2 = 36;
let age = age1 > age2; // the variable recive the boolean value from the logical operation
console.log(age);

// typeof serve to know the type of the data that's in the variable
console.log(typeof age);

let talk = `${firstWord}, Mary` // one of the ways to add a variable to another

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


// Convert variables
// Number(var1);
// String(var2);
// Boolean(0);


//Switch
let job = 'designer';
let firstName = 'John';

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