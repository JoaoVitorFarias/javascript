var averageJohn = (89+120+103)/3;
var averageMike = (116+94+123)/3;
var averageMary = (97+134+105)/3;


if (averageJohn>averageMike && averageJohn>averageMary){
  console.log("Jhon's team is the Winner!!! Score: "+averageJohn);
}else if(averageMike>averageJohn && averageMike>averageMary) {
  console.log("Mike's team is the Winner!!! Score: "+averageMike);
}else if(averageMary>averageJohn && averageMary>averageMike){
  console.log("Mary's team is the Winner!!! Score: "+averageMary);
}else{
  console.log("The teams tied with the score : "+averageMike); 
}
