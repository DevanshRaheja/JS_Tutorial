// Primitive : call by value (a copy of variable is created without providing the reference to the original variable in memory)

// 7 types : String, Number, Boolean, Symbol, Undefined, BigInt, Null(empty)

// JS is dynamically typed which means we are not required to provide data type of the variable

const num = 100
const someValue = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  // false

const bigNum = 123456789963n
// console.log(typeof bigNum); //bigint

// Reference (Non Primitive) : reference to memory is provided

// Arrays, Objects, Functions

const heroes = ["Krrish", "Nagraj", "Doraemon"]

let myObj = {
    myName : "Devansh",
    age : 22,
    email : "abc@xyz.com"
}

console.log(myObj);  
console.log(typeof myObj);  // object

function myName() {
    console.log("Hello Devansh");
}

console.log(typeof myName); //Object function

myName()