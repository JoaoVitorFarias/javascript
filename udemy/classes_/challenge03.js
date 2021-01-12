function tip_calculator (bill){
  if (bill<50){
    return (bill*0.2);
  }else if (bill >= 50 && bill <= 200){
    return (bill*0.15);
  }else{
    return (bill*0.1);
  }
}

var prices = [124,48,268];
var tips = [tip_calculator(prices[0]),tip_calculator(prices[1]),tip_calculator(prices[2])];

prices[0]+= tips[0];
prices[1]+= tips[1];
prices[2]+= tips[2];

console.log(tips);
console.log(prices)

