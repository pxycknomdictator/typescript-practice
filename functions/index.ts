// Do you really know about functions in ts han??? let's check it out

function sayHello(user) {
  return `Hello ${user}`;
}

console.log(sayHello("Noman"));

// In this code example we can say every thing is okay this code is works properly yes? but not in datatypes section we talk about "any" if you hover on user parameter you should see any mysterious thing yes you are right "any" it means i can different datatypes

console.log(sayHello(83));
console.log(sayHello({ name: "Noman" }));

// you can clearly see typescript does't not give me any error to solve this problem we use type annotation

function sayHelloAgain(user: string) {
  return `Hello ${user}`;
}

console.log(sayHelloAgain("Noman"));

// you might be surprised if i said that we also mentioned that our function always return string, object, number , boolean you might be got it

function sayHelloAgainAgain(user: string): string {
  return `Hello ${user}`;
}

console.log(sayHelloAgainAgain("Noman"));

// amazing han? but what happens if our function never return return anything so we use void datatype

function greetings(): void {
  console.log("I don't return anything");
}

greetings();
console.log("Hello world");

// here is the last example and this time i will use arrow function

interface User {
  name: string;
  email: string;
}

const createUser = (user: User): User => {
  return user;
};

console.log(createUser({ name: "Noman", email: "n@n.com" }));

// you can do anything you want
