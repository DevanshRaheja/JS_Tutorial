const code = ["js", "ruby", "c++", "python", "java"]

// code.forEach(function (item) {      // Callback functions don't have a name
//     // console.log(item.toLocaleUpperCase());
// })

// code.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item) {
//     // console.log(item);
// }

// code.forEach(printMe)   // Only reference is needed


// forEach(callbackfn: (value: string, index: number, array: string[])

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'C++',
        languageFileName : 'cpp'
    },
]


myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageName);
    // console.log(item.languageFileName);
})

/*
{ languageName: 'Python', languageFileName: 'py' }
Python
py
{ languageName: 'Javascript', languageFileName: 'js' }
Javascript
js
{ languageName: 'C++', languageFileName: 'cpp' }
C++
cpp

*/
