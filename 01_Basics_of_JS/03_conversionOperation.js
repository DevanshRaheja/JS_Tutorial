let score = "33"

// 2 ways to check type of variable

//console.log(typeof score);
// console.log(typeof(score));

// converting a string into number
let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* 
Here we see that the type of valueInNumber is 'number' 
and the keyword used here is 'Number(score)', this is a class.
similarly 'String' class for conversion to 'string'
*/

// Now take a diff. example
let newScore = "33abc"

let valueToNumber = Number(newScore) 
// console.log(typeof valueToNumber);  // number
// console.log(valueToNumber);         // NaN => Not a Number


/* if we change data types and convert them to 'number' then: 
    code                 output
newScore = "hitesh"    // NaN
newScore = true        // 1   , false => 0 
newScore = null        // 0
newScore = undefined   // NaN 
*/


let isLoggedIn = 2

let valueToBool = Boolean(isLoggedIn)
// console.log(valueToBool);


/*
1 => true
0 => false
2 => true
"" => false
"dev" => true
null => false
undefined => false
*/


let someValue = 33
// console.log(typeof someValue);

let stringNumber = String(someValue)
// console.log(stringNumber);
// console.log(typeof stringNumber);


/*********************Operations*********************/

let num = 25
let negNum = -num
// console.log(negNum);

// console.log(2+2);        4
// console.log(2-2);        0
// console.log(2*2);        4
// console.log(2/2);        1
// console.log(2**3);       8
// console.log(2%2);        0


let str1 = "hello"
let str2 = " devansh"

let str3 = str1 + str2
// console.log(str3);

// Bad practices of coding

// console.log(1 + "2");       // 12
// console.log("1" + 2);       // 12
// console.log("1" + 2 + 3);   // 123
// console.log(1 + 2 + "3");   // 33

// console.log(+true);   // converts value of true to 1
// console.log(+"");     // empty string gives false so it converts to 0

// pre and post increment

let counter = 100
// ++counter        // 101
counter++           // 101
console.log(counter);