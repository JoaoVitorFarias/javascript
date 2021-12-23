// Generic customer
/*
function Customer(name, cpf, email, money){
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.money = money;
    this.deposit = function (value){
        this.money += value;
    }
}

const john = new Customer("John", "123456789", "john@email.com", 1254.36);

function CustomerSaving (name, cpf, email, money, savingMoney){
    Customer.call(this, name,cpf, email, money);
    this.savingMoney = savingMoney;
}

const mary = CustomerSaving("Mary", "23456", "mary@email.com", 123, 10002);

CustomerSaving.prototype.depositSave = function (value) {
    this.savingMoney += value;
}

mary.depositSave(1254);
*/
// Class

class Customer {
    constructor(name, email,cpf, money){
        this.name=name;
        this.email=email;
        this.cpf=cpf;
        this.money=money;
    }

    deposit(value){
        this.money += value;
    }

    getMoney(){
        console.log(this.money);
    }
}

const paul = new Customer("Paul", "paul@email.com", "1234645214", 1500);

class CustomerSaving extends Customer {
    constructor(name, email,cpf, money, savingMoney){
        super(name, email,cpf, money); // set attributes that extends of the father class
        this.savingMoney = savingMoney;
    }

    depositSaving(value){
        return this.savingMoney += value;
    }
}

const ana = new CustomerSaving("Ana", "ana@email.com", "1234556", 1500, 2500);