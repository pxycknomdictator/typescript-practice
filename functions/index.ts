// Do you really know about functions in ts han??? let's check it out

function sayHello(user) {
  return `Hello ${user}`;
}

console.log(sayHello("Noman"));

// In this code example we can say every thing is okay this code is works properly yes? but not in datatypes section we talk about "any" if you hover on user parameter you should see any mysterious thing yes you are right "any" it means i can different datatypes

console.log(sayHello(83));
console.log(sayHello({ name: "Noman" }));
