'use strict';

var john = {
  name: 'John Smith',
  mass: 0,
  height: 0,
  bmi: function () {
    this.mass = prompt("What is John's mass? (in kg)");
    this.height = prompt("What is John's height? (in m)");
    return this.mass / (this.height * this.height);
  }
};

var mark = {
  name: 'Mark Lee',
  mass: 0,
  height: 0,
  bmi: function () {
    this.mass = prompt("What is Mark's mass? (in kg)");
    this.height = prompt("What is Mark's height? (in m)");
    return this.mass / (this.height * this.height);
  }
};

var markBmi = mark.bmi();
var johnBmi = john.bmi();

if (markBmi > johnBmi) {
  alert("Mark's BMI is higher then John's.");
} else if (markBmi < johnBmi) {
  alert("John's BMI is higher then Mark's.");
} else {
  alert("Mark's BMI is the same as John's.");
}
