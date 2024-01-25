// const userEmail = "aman@xyz.com"
// const userEmail = " "        // empty string always returns false

// if (userEmail) {                // We assume a value to be true/false
//     // like we assumed userEmail to be true if it contains a string 
//     console.log("Got user email");
// } else {
//     console.log("Don't have any value");
// }

/* Falsy Values
    false, 0, -0, NaN, null, undefined, BigInt 0n, ""
    document.all (Object) ->  The only falsy object in JavaScript is the built-in document.all
*/

/* Truthy Values
    "0" , "false", " ", [], {}, function(){}
*/

// const emptyArr = []

// if (emptyArr.length === 0) {
//     console.log(`Array is empty`);
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {   // IMPORTANT
//     console.log("Object is empty");
// }


// false == 0       // true
// false == ""      // true
// 0 == ""          // true


// Nullish Coalescing Operator (??)

// whole concept deals with 'null' and 'undefined'

let val1;
// val1 = 5 ?? 10       // 5
// val1 = null ?? 10       // 10
// It performs safety check on null values

// val1 = undefined ?? 15      // 15
val1 = null ?? 10 ?? 20        // 10

console.log(val1);

// Ternary Operator (?)

// condition ? statement 1 : statement 2
// if condition is true then statement 1 else statement 2

const iceTeaPrice = 120

iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`)

