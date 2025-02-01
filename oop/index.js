// OOP Concepts and doing some practice
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "My name is: ".concat(this.name, " and age is: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person("Noman", 69);
// console.log(person1.introduce());
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance < amount) {
            return "You don't have efficient balance";
        }
        this.balance = this.balance - amount;
        return this.balance;
    };
    return BankAccount;
}());
var nomanAccount = new BankAccount(9000);
nomanAccount.deposit(4000);
console.log(nomanAccount.withdraw(3000));
