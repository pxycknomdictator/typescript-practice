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
