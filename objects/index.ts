// In the datatypes folder, we see how to infer objects in TypeScript, but we don’t fully understand it.
// let's go.......
// Basically, TypeScript is all about type safety, so it aims to prevent you from writing unpredictable or unconventional code like JavaScript.

// This interface shows what our user object looks like. It includes the user's username, email, password, and address, as well as their credit card information, which consists of the card number, expiry date, and CVV.

interface User {
  username: string;
  email: string;
  password: string;
  address: string;
  CreditCardInformation: {
    card_number: number;
    card_expiry: string;
    cvv: number;
  };
}

// creating a user object

const user_1: User = {
  username: "Noman",
  email: "noman69@gmail.com",
  password: "MyStrongPassword",
  address: "In my house :P",
  CreditCardInformation: {
    card_number: 2930,
    card_expiry: "00-00-0000",
    cvv: 9090,
  },
};

// what is interface re-opening or interface merging? if you familiar with object oriented programming this is for you lets create a interface

interface Employee {
  username: string;
  email: string;
  password: string;
  isActive: boolean;
}

interface Employee {
  admin: boolean;
}

// You can clearly see that I created two interfaces with the same name Employee instead of overriding each other, they merged.

const employee: Employee = {
  username: "Noman",
  email: "noman69@gmail.com",
  password: "shhhhhhhh",
  isActive: false,
  admin: true,
};



