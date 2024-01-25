// for loop

// for (initialization; condition; operation) {
//     body;
// }

const myArray = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element % 2 === 0) {
        // console.log(`even`);
    } else {
        // console.log(element);
    }
}

// console.log(element);        // Error


for (let j = 1; j <= 10; j++) {
    // console.log(`Outer Loop value: ${j}`);
    // console.log();
    for (let k = 1; k <= 10; k++) {
        // console.log(`Inner Loop value: ${k} and outer loop value: ${j}`);
        // console.log(`${j} x ${k} = `, j * k);
    }    
}


// break and continue keyword

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        // console.log(`Skipped multiples of 3`);
        continue        // skips the iteration
    } else if (i === 19) {
        // console.log(`Detected 19`);
        break 
    }
    // console.log(i); 
}



// while loop

// while (condition) {
//     body
//     operation (increment/decrement)
// }


// let num = 1

// while (num <= 10) {
//     console.log(`Value of num is ${num}`);
//     num = num + 2
// }

let myArr = ['Flash', 'Batman', 'Green Lantern']
let arr = 0

while (arr < myArr.length) {
    // console.log(`Superhero ${arr+1} is ${myArr[arr]}`);
    arr = arr + 1
}


// do - while loop

let score = 1

do {
    console.log(`Value of Score is ${score}`);
} while (score > 10);     
  
/* even after the condition is false 
   the loop executed for one time
   this is because do while loop executes at least one time
   before checking the condition 
*/
