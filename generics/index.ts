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

// As you can see, I don't know what kind of data type I'll be getting in the future, which is why I used different functions for different types.

// Hey, what's the big deal? You can just use a union type, easy!, Okay let use it

interface IUser {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

function returnAnyThingYouGot(element: string | number | IUser): string | number | IUser {
  return element;
}

returnAnyThingYouGot("")
returnAnyThingYouGot(90)
returnAnyThingYouGot({ username: "Noman", email: "n@n.com", password: "sheee", isAdmin: false })