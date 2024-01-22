// Singleton object
const newUser = new Object()

// Non-Singleton Object
// const newUser = {}

newUser.id = "123abc"
newUser.name = "Ram"
newUser.isLoggedIn = false

// console.log(newUser);

const regularUser = {
    email: "ram@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ram",
            lastname: "Kumar"
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);  

/* Example of Optional Chaining
Here '?' is used for protection purpose where it checks if the value
is present or not
*/

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// const obj5 = {obj1, obj2, obj3}

// console.log(obj5);
/*
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}
To get all elements of an object together we use Object.assign()
*/

// const obj4 = Object.assign({}, obj1, obj2, obj3)  
// Here {} is the target object and obj1,obj2,obj3 are source objects
/* Copy the values of all of the enumerable own properties 
from one or more source objects to a target object. 
Returns the target object.
*/

const obj4 = {...obj1, ...obj2, ...obj3} // Using spread operator(...)

// console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } 

const userData = [
    {
        id: 123,
        email: "h@google.com"
    },
    {
        id: 139,
        email: "a@google.com"
    },
    {
        id: 231,
        email: "s@google.com"
    }
]

console.log(userData[2].email);
console.log(newUser);

console.log(Object.keys(newUser));  // Creates an array of all the keys of an object
console.log(Object.values(newUser));  // Creates an array of all the values of an object
console.log(Object.entries(newUser));  // Creates an array of all the key-value pair of an object

console.log(newUser.hasOwnProperty('isLoggedIn')); // Check if an object has a property in it or not
