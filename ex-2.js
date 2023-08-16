/**
 * Write a ARROW function called displayFullName() 
 * that takes an object as an argument and prints the person's full name.
 * Use OBJECT DESTRUCTURING in the function argument. And also, 
 * use TEMPLATE strings when printing the full name.
 */

// Given object
const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
// CODE FUNCTION HERE
const displayFullName = ({ first, last } = person) => {
    let personFullName = {
        fullname: `${first} ${last}`
    }
    return `${personFullName.fullname}`;
}
console.log(displayFullName());

// Expect output: "Elon Musk"