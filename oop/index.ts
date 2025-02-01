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
// nomanAccount.deposit(4000);
// console.log(nomanAccount.withdraw(3000));

class Vehicle {
  public brand: string;
  public speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  public displayInfo(): void {
    console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  private fuelType: string;

  constructor(brand: string, speed: number, fuelType: string) {
    super(brand, speed);
    this.fuelType = fuelType;
  }

  public getFuelType(): string {
    return this.fuelType;
  }

  public setFuelType(fuelType: string): void {
    this.fuelType = fuelType;
  }
}

const myCar = new Car("Toyota", 120, "Petrol");
// console.log(myCar.getFuelType());
// myCar.setFuelType("Diesel");
// console.log(myCar.getFuelType());

abstract class Animal {
  constructor(public name: string) {}
  public abstract makeSound(): string;
}

class Cat extends Animal {
  public makeSound(): string {
    return `${this.name} meows`;
  }
}

class Dog extends Animal {
  public makeSound(): string {
    return `${this.name} barks`;
  }
}

const cat1 = new Cat("Tom");
console.log(cat1.makeSound());

const dog1 = new Dog("Spike");
console.log(dog1.makeSound());
