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


// console.log(Math);
// console.log(Math.abs(-23));    //23
// console.log(Math.round(4.7));   //5

// console.log(Math.ceil(4.7));  // top value => 5
// console.log(Math.floor(4.7)); // below value => 4
// console.log(Math.max(10,2,4,15,20)); //20
// console.log(Math.min(10,2,4,15,20)); //2


/*Random function generates a random integer bw 0 & 1
Multiplying it with 100 gives a two digit number before decimal */
const random = Math.random()*100;
// console.log(random.toPrecision(2));

// console.log((Math.random()*10) + 1); // gives values bw 1-10
// console.log(Math.floor(Math.random()*10) + 1); // floor function rounds off to below value

/*
Trick to effectively use random function in an application
*/
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Random number bw min and max value 
// + min will make the value lie in the given range
