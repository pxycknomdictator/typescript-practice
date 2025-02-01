// OOP Concepts and doing some practice

class Person {
  private name;
  private age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is: ${this.name} and age is: ${this.age}`;
  }
}

const person1 = new Person("Noman", 69);
// console.log(person1.introduce());

class BankAccount {
  private balance;
  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance < amount) {
      return "You don't have efficient balance";
    }
    this.balance = this.balance - amount;
    return this.balance;
  }
}

const nomanAccount = new BankAccount(9000);
nomanAccount.deposit(4000);
console.log(nomanAccount.withdraw(3000));
