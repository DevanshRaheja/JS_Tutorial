// Function Definition
/*
function function_name(function_parameters){
    function_body;
}
*/

// Function Reference: 
// Function_name

// Function Call/Execution:
// Function_name(function_arguments)

function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// sayMyName   // Function reference
// sayMyName() // Function call

// function addNumber(a, b) {
//     console.log(a + b); 
// }

function addNumber(a, b) {
    // let result = a + b;
    // return result;

    return a + b;

    // console.log("Answer");       // Unreachable code 
}

const result = addNumber(5, 6);
// console.log("Result: ", result);


function loginUserMessage(userName = "john doe"){   // passing a default value to prevent undefined condition
    if (!userName)  {
      // 'userName === undefined' and '!userName' are same
      console.log("Please enter a valid Username...");
      return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Devansh"));
// console.log(loginUserMessage());    // undefined just logged in

// The REST parameter syntax allows a function to accept an indefinite number of arguments as an array
// function calculateCartPrice(...num1){ // Rest parameter is represented by '...'
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){ // Rest parameter is represented by '...'
    console.log(`val1: ${val1}, val2: ${val2}`);
    return `num1: ${num1}`
}

// console.log(calculateCartPrice(200, 500, 650, 750, 800));


// Passing object as parameter to a function

const user = {
    username: "devansh",
    age: 21
}

function accessObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

// accessObject(user)
// accessObject({
//     username: "ravi",
//     age: 23
// })

// Passing Array as parameter to a function

const myArray = [100, 200, 300, 400, 500]

function handleArray(getArray){
    // console.log(`Array Elements are: ${getArray}`);
    return getArray[1]
}

// console.log(handleArray(myArray));
console.log(handleArray([200,500,700]));
