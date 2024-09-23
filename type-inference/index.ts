// Hey everyone, this particular section is small because we talk about type annotation and type inference.

// So what is type annotation?
// Type annotation is simply about explicitly assigning a type to any variable. like this

let isAdmin: boolean = true;

// So what is type inference
// In TypeScript, it is not necessary to explicitly assign a type to any variable; TypeScript is smart enough to handle that.

let isEmployee = true;

// you don't need to mention that my variable contain this data type

// "So in what situations do you need to use type annotation?"

let result;

const fetchData = async (path: string) => {
  try {
    const res = await fetch(`www.example.com/${path}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error?.message);
  }
};

result = fetchData("/post"); // hover on this variable the type of this variable is any '_' thats why we need to use type
