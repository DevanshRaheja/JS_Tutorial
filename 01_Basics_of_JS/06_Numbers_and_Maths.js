const score = 250
// console.log(score);

// explicitly defining a variable with number data type
const newScore = new Number(404.9224)
// console.log(newScore); // [Number : 404.9224]

// console.log(newScore.toPrecision(3)); // 405 => rounds of to the nearest number keeping the set precision value in mind 

// console.log(typeof newScore.toString()); // string
// console.log(newScore.toString().charAt(0)); // 4
// console.log(newScore.toString().length); // 3

// console.log(newScore.toFixed(2));   // 404.92
/*Always use when making an e-commerce website 
to fix the precision of amount  */


const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));  // 1,00,00,000

Number
// console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER);   //-9007199254740991


/************************Maths**************************/


console.log(Math);
console.log(Math.abs(-23));    //23
console.log(Math.round(4.7));   //5

console.log(Math.ceil(4.7));  // top value => 5
console.log(Math.floor(4.7)); // below value => 4
console.log(Math.max(10,2,4,15,20)); //20
console.log(Math.min(10,2,4,15,20)); //2