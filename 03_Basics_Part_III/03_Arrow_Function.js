const userData = {
    uname: "lucifer",
    price: 1999,

    welcomeMessage: function(){
        console.log(`Hello ${this.uname}, welcome to the website...`);
        // "this" is used to access properties of object present in current context
        console.log(this);
        // The above statement printed the whole object values in console
    }
}

// userData.welcomeMessage()   // prints value in the current context
// userData.uname = "Sameer"   // the value of context is changed
// userData.welcomeMessage();  // the value was not hardcoded so this keyword used the changed value of username


// console.log(this);      // there is no context in global node environment so output is '{}'

/* NOTE: 
'console.log(this);' in browser this statement will display all the Window Object 
*/


// function coffee(){
//     const uname = "Rajeev"
//     // console.log(this);   // inside a function this will print the default value set in its environment
//     console.log(this.uname);
// }

// const coffee = function() {
//     const uname = "Rajeev"
//     // console.log(this);   // inside a function this will print the default value set in its environment
//     console.log(this.uname);
// }


const coffee = () => {
    const uname = "Rajeev"
    // console.log(this);   // this will print {} as output
    console.log(this.uname);
}

// coffee()         // undefined 


// Syntax of Arrow function

// () => {}


//Explicit return : when return keyword is used to return the value
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return : if code is of single line then we use implicit return arrow function 
// const addTwo = (num1, num2) =>  num1 + num2

// another way:
// const addTwo = (num1, num2) =>  (num1 + num2)

/* If {} are use to define the scope of function 
   then return keyword is must else parenthesis can be used
   to return the value.
*/

const addTwo = (num1, num2) => ({username: "devansh"})
// To return an object it must be enclosed within parenthesis.

// console.log("Sum is:", addTwo(3, 5))


// const myArray = [2, 4, 6, 8]

// myArray.push(10)
// console.log(myArray);


// myArray.forEach(() => {})
