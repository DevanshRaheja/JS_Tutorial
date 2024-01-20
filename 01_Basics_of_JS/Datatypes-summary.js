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

// console.log(myObj);  
// console.log(typeof myObj);  // object

function myName() {
    console.log("Hello Devansh");
}

// console.log(typeof myName); //Object function

// myName()



/***************Concept of Memory***************/

// Stack (Primitive) , Heap (Non-Primitive)

let myDetail = "devanshraheja"

let anotherName = myDetail
anotherName = "raheja"

// console.table([myDetail, anotherName]);
/*
┌─────────┬─────────────────┐
│ (index) │     Values      │
├─────────┼─────────────────┤
│    0    │ 'devanshraheja' │
│    1    │ 'raheja'        │
└─────────┴─────────────────┘
*/

// Heap memory (Reference to original object in the memory is given)
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
console.log(userOne);   //{ email: 'user@gmail.com', upi: 'user@ybl' }

let userTwo = userOne
userTwo.email = "user2@google.com"
userTwo.upi = "user2@ybl"

console.log(userTwo);
console.log(userOne);

/*
userTwo => { email: 'user2@google.com', upi: 'user2@ybl' }
userOne => { email: 'user2@google.com', upi: 'user2@ybl' }
*/

