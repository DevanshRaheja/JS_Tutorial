const myObj = {
    js : 'Javascript',
    ts : 'Typescript',
    cpp : 'C++',
    py : 'Python'
}

// console.log(Object.keys(myObj).flat());

/* Syntax of For In Loop

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

*/

for (const key in myObj) {  // when used [key] it referred to the object property key which was not present thats why undefined
    // console.log(`${key} used for ${myObj[key]}`);
}

// js used for Javascript
// ts used for Typescript
// cpp used for C++
// py used for Python


// checking for in loop on arrays

const myArr = [10,20,30,40,50]

for (const key in myArr) {
    // console.log(key);           // Index of array elements 
    // console.log(myArr[key]);    // Array Elements
}


// checking for in loop on map

const map = new Map()

map.set('IN', 'INDIA');
map.set('CA', 'CANADA');
map.set('USA', 'UNITED STATES OF AMERICA');

for (const key in map) {
    // console.log(key);        // Maps are not iterable through for-in loop 
}

