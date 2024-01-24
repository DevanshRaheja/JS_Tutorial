//  Immediately Invoked Function Expression (IIFE)

// To prevent our function from getting polluted by the global scope we use IIFE

// Its syntax is:

// ()()

(function connectToDb(){
    // Named IIFE
    console.log("DB Connected");
})();    // Now the function will be immediately executed when we load the file


( () => (console.log(`DB Connected`))) ();   // Here ; is needed at the end to specify the ending of the context


// Now this code will work fine as we have specified the ending of previous IIFE
( () => {
    console.log(`DB Connected Two`);
})();


// Passing parameters and arguments to IIFE
( (uname) => {
    console.log(`DB Connected for ${uname}`);
})("Devansh");



