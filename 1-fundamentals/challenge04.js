let tip = 0;
let bill = 275;

(bill >= 50 && bill <= 300) ? tip = bill * 0.15 : tip = bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total  value ${bill + tip}`);