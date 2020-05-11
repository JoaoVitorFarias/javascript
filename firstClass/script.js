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

}else{

}*/
// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

//other way to write condition
//condition ? do it : else
//ex.:
age >= 18 ? console.log(fristname) :
console.log(lastName);

//23 == '23'-> true, when use == js convert the string '23' to a number to comprer with the number 23.
// 23 ==='23' -> false, when use === js do not convert anything, then comparer a string with a number is not valid.


