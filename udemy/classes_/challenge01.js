var massMark = prompt("What is Mark's mass? (in kg)"); 
var heightMark = prompt("What is Mark's height? (in m)");
var massJohn = prompt("What is John's mass? (in kg)"); 
var heightJohn = prompt("What is John's height? (in m)"); 


var bmiJohn = massJohn/ (heightJohn*heightJohn);
var bmiMark = massMark/ (heightMark*heightMark);

var bmi= bmiMark>bmiJohn;
alert("Is Mark's BMI higher then John's?" + ' ' + bmi);