// The following exercise contains the following subjects:
// ● Declaring functions 2
// Instruction
// Copy the code below to your computer, answer the
// questions on the file, and submit.
/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
*/

// From function declarations to explicit and implicit
// return functions (one of each).
function welcome() {
        let welcome = 'Welcome to Appleseeds Bootcamp!';
        return welcome;
}
(function welcome(){
        return 'Welcome to Appleseeds Bootcamp!'
}())
function power(a) {
        let myNumber = a;
        let result = Math.pow(myNumber, 2);
        return result;
}
(function power(a){
         return Math.pow(a, 2)
}())
// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
(function squareRoot(a){
        return Math.sqrt(a)
}())
const randomNumbers = (a, b) => Math.random() * (a - b) +
b;
(function randomNumbers(a, b){
        return Math.random() * (a - b) + b
}())