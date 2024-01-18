const accountId = 25449876
let accountName = "Devansh"
var accountMail = "devansh@yahoo.com"
accountCity = "Chandigarh"  // Not a good approach to declare a variable
let accountState;           // Empty variable or "undefined" value

// accountId = 22546277 (Not allowed to change value once made constant)

accountName = "Naman" 
accountMail = "dinesh@gmail.com"
accountCity = "Moradabad"

/* 
PREFER NOT TO USE VAR 
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

// console.log(accountId)   //to log value on console but text is in plain format

console.table([accountId, accountName, accountMail, accountCity, accountState]) 

/* creates a table for the given values to be displayed on console
┌─────────┬────────────────────┐
│ (index) │       Values       │
├─────────┼────────────────────┤
│    0    │      25449876      │
│    1    │      'Naman'       │
│    2    │ 'dinesh@gmail.com' │
│    3    │    'Moradabad'     |
|    4    │     undefined      │
└─────────┴────────────────────┘
*/

