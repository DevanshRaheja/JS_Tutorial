// console.log(2 > 1);   // true
// console.log(2 < 1);   // false
// console.log(2 >= 1);  // true
// console.log(2 != 1);  // true
// console.log(2 == 1);  // false

// console.log("2" > 1);       // true
// console.log("02" > 1);      // true
// Here "2" and "02" first get converted to a number then compared

// console.log(null > 0);      //false
// console.log(null == 0);     //false
// console.log(null >= 0);     //true

/* The reason is that an equality check (==) and comparison > < >= <= works differently
Comparison CONVERTS null TO A NUMBER, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false */

// console.log(undefined > 0);      //false
// console.log(undefined == 0);     //false
// console.log(undefined >= 0);     //false


// strict check checks the values as well as data types  => "==="

console.log("2" === 2); // false
// Bcz one is string and other one is a number.
