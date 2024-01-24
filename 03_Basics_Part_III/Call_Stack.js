const one = () => {
    console.log("one");
    two()
}
const two = () => {
    console.log("two");
    three()
}
const three = () => {
    console.log("three");
}

one()       // one two three
two()       // two three
three()     // three
