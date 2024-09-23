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
}
const users: Array<IUser> = [
  { username: "john", email: "john@gmai.com" },
  { username: "jimmy", email: "jimmy@gmai.com" },
];

function returnAnyThingYouGot(
  element: string | number | IUser | IUser[]
): string | number | IUser | IUser[] {
  return element;
}

returnAnyThingYouGot("");
returnAnyThingYouGot(90);
returnAnyThingYouGot({ username: "Noman", email: "n@n.com" });
returnAnyThingYouGot({ username: "Noman", email: "n@n.com" });
returnAnyThingYouGot(users);

// Hmm, looks like this code works fine, right? Yes, but it's a bit tricky and not very readable.

// To fix all of these issues we use generics

// Generics

function getSomeData<Type>(user: Type): Type {
  return user;
}

const myName = getSomeData("Noman");
const age = getSomeData(89);
const userObject = getSomeData({ username: "Jane", email: "jane@gmail.com" });

// Generics make life easier! 🎉 Now we can handle any type without repeating code. Let's keep it simple and flexible! You can use any name for generics, like Type, T, or even Superman—it's just a placeholder. But we usually stick with T or Type most of the time.

// let's get more examples

function getFirstElementOfArray<T>(element: T[]): T {
  return element[0];
}

getFirstElementOfArray(["Noman", "Jawad", "Saqlain", "Jane"]);
getFirstElementOfArray([90, 45, 284, 29]);
getFirstElementOfArray([
  { name: "John" },
  { name: "Jimmy" },
  { name: "Billy" },
]);

// Now this function has the ability to handle arrays of different data types!
