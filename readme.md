# Let's Learn TypeScript!

Welcome to our TypeScript learning journey! This repo aims to help you master TypeScript, a powerful superset of JavaScript that adds static typing.

## What is TypeScript?

TypeScript enhances JavaScript by introducing static types, helping to catch errors early and improve code quality.

## Getting Started

### Before We Start

Make sure you have Node.js installed on your machine.

### Install TypeScript:

```bash
npm install -g typescript
```

```
mkdir typescript-project

cd typescript-project

tsc --init
```

### Your first Typescript code:

```bash
function sayHello(language: string): string {
    return `Hello ${language}`;
}

console.log(sayHello("TypeScript"));
```

### Compile and Run:

```bash
tsc index.ts
node index.js
```

### Let’s dive into TypeScript together! Happy coding! 🚀
