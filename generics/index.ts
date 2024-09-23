// Yooooooooo! Here we go again. In this section, we'll learn what generics are. When I first heard this term, I was also confused, but believe me, it's really easy.

// Generics in TypeScript let you write code that works with different types without repeating yourself.

// so what is the meaning of this definition let's check any example

// For example, if I want to return some data and I don't know what kind of data type I'll get in the future. It may be anything like array array of an object or may be string

function returnSomeThing(element: string): string {
  return element;
}
returnSomeThing("Noman");

function doSomeThing(element: number): number {
  return element;
}
doSomeThing(69);

interface User {
  name: string;
  email: string;
  isAdmin: boolean;
}

function makeOperations(element: User): User {
  return element;
}
makeOperations({ name: "Noman", email: "noman69@gmail.com", isAdmin: false });
