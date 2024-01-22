const marvel_hero = ["Thor", "Iron-man", "Spider-man"]
const dc_hero = ["Batman", "Superman", "Wonder woman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][2]);

// const allHeroes = marvel_hero.concat(dc_hero)
// console.log(allHeroes);

/*
[
  'Thor',
  'Iron-man',
  'Spider-man',
  'Batman',
  'Superman',
  'Wonder woman'
]
*/

// Spreading an array (...)

const all_new_heroes = [...marvel_hero, ...dc_hero]
// console.log(all_new_heroes);    // Spreading works same as concat 

const anotherArr = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]
// console.log(anotherArr);
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);

/*
Output:
[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

// Convert any string, object etc. to an array

// console.log(Array.isArray("Devansh"));
// console.log(Array.from("Devansh"));

/*
false
[  'D', 'e', 'v', 'a', 'n', 's', 'h']
*/


// IMPORTANT AND CONFUSING

// console.log(Array.from({myName : "devansh"}));  // []

let score1 = 100
let score2 = 400
let score3 = 500

console.log(Array.of(score1,score2,score3));    // [ 100, 400, 500 ]


