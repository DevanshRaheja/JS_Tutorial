// Global scope
// var c = 300

let a = 200

// Block scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30      // Has global scope 
    // console.log(`Inner a: ${a}`);
}

// Scope ke andar ki value bahar nahi jaani chahiye

// console.log(a);     // has block scope, will give error
// console.log(b);     // also has a block scope
// console.log(c); 


// Nested Scope

function one(){
  const userName = "Devansh";

  function two() {
    const github = "DevanshRaheja";
    console.log(userName);
  }
  // console.log(github);
  /* Produces error as github is defined inside the scope of two() 
    and it cannot be accessed outside the two method
   
    In nested function, the child function can access the variables of 
    Parent function but vice-versa is not possible  
    
    NOTE: A closure is a function having access to the parent scope, 
    even after the parent function has closed.
    */

  two();
}

// one()

if(true){
    const userName = "Devansh"

    if (userName === "Devansh") {
        const website = " github"

        // console.log(userName + website);
    }

    // console.log(website);    // Error
}

// console.log(userName);   // Error


/****************** Interesting ******************/

console.log(addOne(10));

function addOne(num1){
    return num1 + 1
}


// Hoisting
// console.log(addTwo(6))   // Cannot access 'addTwo' before initialization

const addTwo = function(num1){
    return num1 + 2
}

console.log(addTwo(6));
