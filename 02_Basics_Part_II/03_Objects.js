// 1-> Singleton : whenever an object is formed from constructor

// Object.create()

// 2-> Object literals

const mySymbol = Symbol("key1")

const jsUser = {
    // key : value
    name: "Dev",
    "full name" : "Devansh Raheja",
    [mySymbol]: "myKey1", // to use it as symbol use []
    age: 20,
    location: "Canada",
    email: "devansh@hotmail.com",
    isLoggedIn: false,
    lastLoginIn: ["Saturday", "Monday"]
}


// Ways to access the object attributes
// console.log(jsUser.name);
// console.log(jsUser["name"]);    // js identifies key and values as string
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);    // Accessing symbols 
// console.log(typeof mySymbol);  

jsUser.email = "dev@gmail.com"
// Object.freeze(jsUser)       // Locks the values of an object
jsUser.email = "dev@microsoft.com";
// console.log(jsUser);

/*
{
  name: 'Dev',
  'full name': 'Devansh Raheja',
  age: 20,
  location: 'Canada',
  email: 'dev@gmail.com',
  isLoggedIn: false,
  lastLoginIn: [ 'Saturday', 'Monday' ],
  [Symbol(key1)]: 'myKey1'
}
*/

jsUser.greeting = function(){
    console.log("Hello Everyone...");
}
jsUser.greetingTwo = function(){
    // console.log(`Hello ${jsUser["full name"]}...`);
    console.log(`Hello ${this["full name"]}...`);
    // To refer same object use 'this'
}   

// console.log(jsUser.greeting);   // [Function (anonymous)]
jsUser.greeting();   // Hello Everyone...
jsUser.greetingTwo();   // Hello Devansh Raheja...

/* If you use console.log() to print a function on console 
then it will show an undefined along with the output 
*/