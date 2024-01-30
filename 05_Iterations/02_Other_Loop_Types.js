// for of

// ["", "", ""]
// [{}, {}, {}]

/*
for (const iterator of object) {
  // here iterator is the variable 
     and object is used for (strings, arrays, and objects)  
}
*/

// const superHero = ["flash", "superman", "batman", "wonder woman", "cyborg"]

// for (const sup of superHero) {
//     console.log(sup);
// }

// const greeting = "Hello World"

// for (const greet of greeting) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each character is : ${greet}`);
// }

// const number = [1,2,3,4,5,6,7,8,9,10]

// for (const num of number) {
//     console.log(num);
// }


// Maps

/*
Unique values

Key Types : 
-> A Map's keys can be any value (including functions, objects, or any primitive).	
-> The keys of an Object must be either a String or a Symbol.
*/

// const map = new Map()

// map.set('IN', 'INDIA');
// map.set('CA', 'CANADA');
// map.set('USA', 'UNITED STATES OF AMERICA');

// console.log(map.get('IN'));
// console.log(map);

/*
Output:
Map(3) {
  'IN' => 'INDIA',
  'CA' => 'CANADA',
  'USA' => 'UNITED STATES OF AMERICA'
}
*/

// for (const key of map) {
//     console.log(key);
// }

/*
[ 'IN', 'INDIA' ]
[ 'CA', 'CANADA' ]
[ 'USA', 'UNITED STATES OF AMERICA' ]
*/

// for (const [key, value] of map) {
//   console.log(key, ' : ', value);
// }

const myObject = {
  'Game1' : 'GTA VI',
  'Game2' : 'Witcher III'
}

// for (const [key, value] of myObject) {
//   console.log(`${key} => ${value}`);
// }

// Generates error :TypeError: myObject is not iterable 