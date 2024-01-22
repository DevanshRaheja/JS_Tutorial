// Arrays

/*
-> JavaScript arrays are resizable and can contain a mix of different data types.
-> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
-> JavaScript arrays are zero-indexed.
-> Shallow copy: A copy whose properties share the same references [heap memory or reference]
-> Deep copy: copy of variable is created without providing the original memory address 
*/

// Declaration of arrays

const arr = [1,2,3,4,5]
const myHeroes = ['Iron Man', 'Hulk', 'Loki', 'Wanda']

const myArr = new Array(0,1,2,3,4,5,6)

// console.log(myArr, myHeroes)
// [ 1, 2, 3, 4 ] [ 'Iron Man', 'Hulk', 'Loki', 'Wanda' ]

// Array Methods

// myArr.push(7) //insert an element in array
// myArr.push(10)
// myArr.pop() // remove an element from last in array

// myArr.unshift(9)    // Appends an element in front of the array
// myArr.shift()       // Removes the element from the start

// console.log(myArr.includes(6));     // false
// console.log(myArr.indexOf(9));      // -1

// const newArr = myArr.join()

// console.log(typeof myArr)   // object
// console.log(typeof newArr)  // string

// Splice and Slice

console.log("A ",myArr);    // A [0,1,2,3,4,5,6]

const myn1 = myArr.slice(1, 3)      // slice prints the given range of elements without including the last range element
console.log(myn1);      // [1, 2]
console.log("B ", myArr);   // B [0,1,2,3,4,5,6]

const myn2 = myArr.splice(1, 3)     // Splice removes the given range of elements from the array 
console.log(myn2);      //[1, 2, 3]
console.log("C ", myArr);   // C [0, 4, 5, 6]

