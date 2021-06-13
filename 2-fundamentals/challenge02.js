'use strict';

function calTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

const total = [];
total.push(calTip(bills[0]) + bills[0]);
total.push(calTip(bills[1]) + bills[1]);
total.push(calTip(bills[2]) + bills[2]);

console.log(total);