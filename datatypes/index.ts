// First We start to write some code we need to understand that what is datatypes in Ts

// In a variable, we can store several pieces of information like user_name, user_id, or user_email. But how can I determine which variable contains data such as a string, boolean, or number? That's where data types come into play.

// There are more data types in TypeScript compared to JavaScript.
/*
  string
  number
  boolean
  null
  undefined
  any
  void
  enum
  tuples
  array
  unions
  intersection
  objects
*/

// How do we determine which data type is best for storing a particular piece of information?
// Suppose we want to store a username, email, or even a password. we use string any data which contain alphabets or alphabets + numeric or even a special character we use string.

// ====================== Example 1 ======================

let user_name: string = "Noman";
let user_email: string = "noman69@gmail.com"; // email contains alphabets + numeric + special characters so we need to store email in string
let user_id: number = 9382048294;
let isAdmin: Boolean = true;

// Let’s talk about arrays. An array is a special data type that helps us store multiple pieces of data in a single variable.

// ====================== Example 2 ======================
// 1. How do we define the type of an array?

let languages: string[] = ["HTML", "CSS", "JavaScript", "Python", "Dart"];

// In this example, we clearly specify that we have an array that contains only strings. What happens if I try to add a different data type, like a number or a boolean? lets checking out!

// languages.push(90) So we would get an error XD

let onlyNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
let onlyBooleans: Boolean[] = [true, false, false, false, true, true];

// ====================== Example 3 ======================
// Let’s talk about Objects. object contains multiples values with different data types so how we can specify the type of object? let's see

let userInformation: {
  id: number;
  username: string;
  email: string;
  password: string;
} = {
  id: 9304893,
  username: "Noman",
  password: "MyStrongPassword",
  email: "noman69@gmail.com",
};

// This is a poorly designed user information structure.
// To solve this problem, TypeScript provides a feature known as interfaces. An interface is a way to define the structure of an object and specify how it should look.

// The code you see on lines 65 to 69 is just the structure of an object. I repeat, the structure of an object.
interface UserInformation {
  id: number;
  name: string;
  email: string;
  password: string;
}

let user_Information: UserInformation = {
  id: 3894839,
  name: "Noman",
  email: "noman69@gmail.com",
  password: "MyStrongPassword",
};

// This is called an interface.

// In the previous example of an array, we specified that this array contains only numbers, strings, booleans, etc. But what happens if our array contains objects? let's check it out how can we do that

// ====================== Example 4 ======================

interface EmployeeInformation {
  name: string;
  email: string;
  isActive: boolean;
  salary: number;
  workingHour: number;
}

let employees: Array<EmployeeInformation> = [];

employees.push({
  name: "Noman",
  email: "noman69@gmail.com",
  isActive: true,
  salary: 90000,
  workingHour: 6,
});

// ====================== Example 5 ======================

// Let's talk about unions.

let db_user_id: string | number | boolean;

db_user_id = true;
db_user_id = "338948204892";
db_user_id = 93488393939393;

// another example of union
const superHeros: (string | number)[] = [
  "Batman",
  "IronMan",
  "Hulk",
  "Superman",
  90,
];

// You got it! A union means a single variable can contain different data types. If you want to create something interesting, or crazy go with unions!

// ====================== Example 6 ======================

// let's talk about "any" datatype
// In my country people says this dialogue "say no to corruption" But in the world of Ts aka Typescript we say "say no to use any" so what the hell is this any if you use any datatype its mean you can say any datatype is store in a variable that means you can switch off the power of typescript

// example

let my_email: any = "noman69@gmail.com";
my_email = 69;
my_email = false;
my_email = [];
my_email = {};

// you can see after using any datatype the power or the whole concept of typescript is gone its seems like i am using Normal Js right? so please say no to use any in ts
