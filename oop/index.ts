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
// console.log(cat1.makeSound());

const dog1 = new Dog("Spike");
// console.log(dog1.makeSound());

// Interface for Discountable Products
interface Discountable {
  applyDiscount(percent: number): void;
}

class Product {
  constructor(public name: string, private price: number) {}

  public getPrice(): number {
    return this.price;
  }

  public setPrice(newPrice: number): void {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log("Price cannot be negative!");
    }
  }

  public getDetails(): string {
    return `${this.name} costs $${this.price}.`;
  }
}

// Electronics Class
class Electronics extends Product implements Discountable {
  constructor(name: string, price: number, public warranty: number) {
    super(name, price);
  }

  public getDetails(): string {
    return `${this.name} costs $${this.getPrice()} with ${
      this.warranty
    } years warranty.`;
  }

  public applyDiscount(percent: number): void {
    const discountAmount = (this.getPrice() * percent) / 100;
    this.setPrice(this.getPrice() - discountAmount);
  }
}

// Clothing Class
class Clothing extends Product implements Discountable {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string
  ) {
    super(name, price);
  }

  public getDetails(): string {
    return `${this.name} costs $${this.getPrice()}, Size: ${
      this.size
    }, Material: ${this.material}.`;
  }

  public applyDiscount(percent: number): void {
    const discountAmount = (this.getPrice() * percent) / 100;
    this.setPrice(this.getPrice() - discountAmount);
  }
}

const laptop = new Electronics("MacBook Pro", 2000, 2);
console.log(laptop.getDetails());
laptop.applyDiscount(10);
console.log(laptop.getDetails());

const tshirt = new Clothing("Nike T-Shirt", 50, "M", "Cotton");
console.log(tshirt.getDetails());
tshirt.applyDiscount(20);
console.log(tshirt.getDetails());
