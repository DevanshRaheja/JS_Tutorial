// if statement

// if (true) {
//     /* code inside will be executed only 
//        if the condition is true */
// }
// if (false) {
//     /* code inside will not be executed */
// }

// Operators

// > (greater than) , < (less than) , >= (greater than equal to) , <= (less than equal to),
// == (is equal to), != (not equal to) , === (strictly equal to, checks the type also)
// !== (strictly not equal to, checks the type also)

// '=' is assignment operator


// const temperature = 41

// if (temperature < 50) {
//     console.log(`Temperature is less than 50`);
// }
// else{
//     console.log(`Temperature is greater than 50`);
// }


// const score = 1000

// if (score > 400 && score < 650) {
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }
// else if (score > 650) {
//     const power = "Cannon"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const highScore = 3000

// Implicit Scope
// if (highScore > 1200) console.log(`New High Score: ${highScore}`), console.log(`Play Again`),
// console.log(`Exit`);
// Not a good practice!!!

// const balance = 1000

// if else if ladder

// if (balance < 500) {
//     console.log(`Balance less than 500`);
// } else if (balance < 700) {
//     console.log(`Balance less than 700`);
// } else if (balance < 900) {
//     console.log(`Balance less than 900`);
// } else {
//     console.log(`Balance less than 1200`);
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2 <= 5) {
//     console.log(`Allow the user to buy products`);
// }
// else{
//     console.log(`Not Applicable`);
// }

/*Use of logical operators: && , || , ! */

if (userLoggedIn && debitCard && (loggedInFromEmail || loggedInFromGoogle)) {
    console.log(`Access Granted`);
}else {
    console.log(`Access Denied`);
}
