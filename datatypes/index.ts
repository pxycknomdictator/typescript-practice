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
*/

// How do we determine which data type is best for storing a particular piece of information?
// Suppose we want to store a username, email, or even a password. we use string any data which contain alphabets or alphabets + numeric or even a special character we use string.

// ====================== Example 1 ======================

let user_name: string = "Noman";
let user_email: string = "noman69@gmail.com"; // email contains alphabets + numeric + special characters so we need to store email in string
let user_id: number = 9382048294;
let isAdmin: Boolean = true;
