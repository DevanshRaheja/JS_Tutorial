const name = "Devansh"
const certs = 18

// bad practice to concatinate strings

// console.log(name + " : " + certs + " certificates");

// String Interpolation using backticks (` `)

// variables are passed using ${}

// console.log(`Hello my name is ${name} and my course count is ${certs}`);

// Declaration of a string

const gameName = new String("lucifer069")

// console.log(gameName.length);
// console.log(typeof gameName);
// console.log(gameName.toUpperCase());

// console.log(gameName.slice(-10,-6));    // we can give neg. values as parameters and it will start from reverse direction

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('r'));
// console.log(gameName.substring(3,6));

// Output:
// 10
// object
// LUCIFER069
// luci
// e
// 6
// ife


const newString = "    devansh   "
console.log(newString);
console.log(newString.trim());

// trim method removes all the white spaces and characters(\n) from the string

const url = "https://www.google.com/sunny%20leone"
console.log(url);
console.log(url.replace('%20','-'));

/* 
OUTPUT:
https://www.google.com/sunny%20leone
https://www.google.com/sunny-leone
*/

console.log(url.includes('sunny' || 'SUNNY'));  // true

// convert to array using some separator and giving the limit
// syntax: split(separator, limit)
console.log(url.split('.'));
// [ 'https://www', 'google', 'com/sunny%20leone' ]