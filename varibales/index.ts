// Typescript is like a JavaScript but with some extra staffs and super powers!
// JavaScript is a dynamic typed language but TypeScript is a static typed language.

// 1. what is type Annotation?
// In javascript we define a variable but we don't declare the type of variable but in typescript we can declare that the particular variable type

let student_1 = "Noman"; // Normal Js
let student_2: string = "Noman"; // Type Annotation in ts

let age: number = 69;
let languages: Array<string> = ["HTML", "CSS", "JS", "JSON", "TS"];
let isStudent: Boolean = true;

// ====================== Example 1 ======================

let user_name: string = "John"; // we clearly mentioned that user_name variable store string only
user_name = "Alice";
user_name = "Bill";

// but we don't do this kind of stuffs like assigning number, boolean, array to a string type variable in JavaScript we can do that but not in TypeScript

// This is called static type in TypeScript

// un_comment bellow code
// user_name = 99;
// user_name = true;
// user_name = ["Football", "Cricket", "Baseball"];

// ====================== Example 2 ======================

// This array only store strings datatype only
let students: Array<string> = ["John", "Bill", "Jimmy", "Alice", "Kevin"];

// we cant push different data types in array that contain only strings

// un_comment bellow code
// students.push(90);
// students.push(false);
// students.push({ name: "Noman", age: 69, isLoveJs: true });

// ====================== Example 3 ======================

let isBoolean: Boolean = true;

isBoolean = false;

// un_comment bellow code
// isBoolean = "Noman"; // don't do that

// let countries: Array<string> = "Pakistan"; don't do that please
/*
  typescript yelling on me XD because
  I clearly mentioned that countries variable contain an array with string but we are storing an only string 
*/

// ====================== summary ======================
// In typescript world we can declare variable like js but we can add more information like type of variable && you cant change any variable to another datatype like string to number or maybe boolean to array etc
