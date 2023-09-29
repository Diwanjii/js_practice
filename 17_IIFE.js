// ============================ Immediately Invoked Function Expressions (IIFE) ==========================
// A JavaScript immediately invoked function expression is a function defined as an expression and executed 
// immediately after creation. The following shows the syntax of defining an immediately invoked function expression:
// (function(){
//     //...
// })();

// When you define a function, the JavaScript engine adds the function to the global object. See the following example:
function add(a, b) {
    return a + b;
}
// In web browsers, the JavaScript engine adds the add() function to the window global object:
// ikewise, if you declare a variable outside of a function using the var keyword, 
// the JavaScript engine also adds the variable to the global object:
// 1. If you have many global variables and functions, the JavaScript engine will only release 
// the memory allocated for them until the global object loses its scopes.

// 2. As a result, the script may use the memory inefficiently. On top of that, having global variables 
// and functions will likely cause name collisions.

// 3. One way to prevent the functions and variables from polluting the global object is to use 
// immediately invoked function expressions.

// his syntax is correct even though the expressions have no effect. A function can be also declared as an 
// expression which is called a function expression:
// let sum = function(a, b) {
//     return a + b;
// }

// In this syntax, the part on the right side of the assignment operator(=) is a function expression. 
// Because a function is an expression, you can wrap it inside parentheses:
// let sum = (function(a, b) {
//     return a + b;
// });

// In this example, the sum variable is referenced as the anonymous function that adds two arguments.
// In addition, you can execute the function immediately after creating it:
let sum = (function (a, b) {
    return a + b;
})(10, 20);

console.log(sum);
// In this example, the sum variable holds the result of the function call.

// The following expression is called an immediately invoked function expression (IIFE) 
// because the function is created as an expression and executed immediately:
(function (a, b) {
    return a + b;
})(10, 20);


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// Global Scope ke Polution se problem hoti hai kai baar to us global scope ke polution ko hatane ke liye hum IIFE ka use krte hai

((name) => {
    console.log(`${name} DB CONNECTED`); // In this type of IIFE Required to semi Column
})('ANISH');