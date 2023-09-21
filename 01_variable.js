// What is JavaScript
// JavaScript is the programming language of HTML and the Web.It makes web page dynamic.
// It is an interpreted programming language with object - oriented capabilities. 

// let keyword
// In ES5, when you declare a variable using the var keyword, the scope of the variable is either global or local. 
// If you declare a variable outside of a function, the scope of the variable is global. 
// When you declare a variable inside a function, the scope of the variable is local.
// ------------------
// ES6 provides a new way of declaring a variable by using the let keyword. 
// The let keyword is similar to the var keyword, except that these variables are blocked-scope.
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x);

var a = 10;
// console.log(window.a); // 10

let b = 20;
// console.log(window.b); // undefined

// console.log(counter); // Uncaught ReferenceError: Cannot access 'counter' before initialization
let counter = 10;

// Const Keyword
// ES6 provides a new way of declaring a constant by using the const keyword. 
// The const keyword creates a read-only reference to a value

let c = 10;
c = 20;
c = c + 5;
console.log(c); // 25

// The following example causes a SyntaxError due to missing the initializer in the const variable declaration:
// const RED; // SyntaxError

const RATE = 0.1;
// RATE = 0.2; // TypeError

// The const keyword ensures that the variable it creates is read-only. 
// However, it doesn’t mean that the actual value to which the const variable reference is immutable. For example:
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30
// person = { age: 40 }; // TypeError

// If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method:
const person = Object.freeze({ age: 20 });
// person.age = 30; // TypeError

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]
colors.pop();
colors.pop();
console.log(colors); // []

// colors = []; // TypeError

// var keyword
// The var variables belong to the global scope when you define them outside a function.
// var counter; 
// In this example, the counter is a global variable. It means that the counter variable is accessible by any functions.
// When you declare a variable inside a function using the var keyword, the scope of the variable is local.For example:

function increase() {
    var counter = 10;
}
// cannot access the counter variable here