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
