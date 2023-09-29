// =============================================== Function ====================================================
// When developing an application, you often need to perform the same action in many places. 
// For example, you may want to show a message whenever an error occurs.

// To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it.

// JavaScript provides many built-in functions such as parseInt() and parseFloat(). In this tutorial, 
// you will learn how to develop custom functions.

// To declare a function, you use the function keyword, followed by the function name, a list of parameters, 
// and the function body as follows:
function sayMyName() {
    console.log("Hello");
    console.log("Anish Diwan");
}
// In the assignment statement, we don’t include the opening and closing parentheses at the end of the add identifier. 
// We also don’t execute the function but reference the function.
// sayMyName // It is Refrence

// By doing this, we can have two ways to execute the same function. For example, we can call it normally as follows
// sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(); // NaN
addTwoNumbers(3, 4) // 7
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3, 5);
console.log(result); // undefined

// To specify a return value for a function, you use the return statement followed by an expression or a value, like this:
function addTwoNumber(number1, number2) {
    return number1 + number2;
}

const results = addTwoNumber(3, 5);
console.log("Results : ", results); // Results : 8

// The following declares the average() function that takes three arguments. The third argument is a function:
function average(a, b, fn) {
    return fn(a, b) / 2;
}

// Now, you can pass the sum function to the average() function as follows:
let result2 = average(10, 20, addTwoNumbers);
console.log(result2);

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//     } else {
//         return `${username} just logged in.`;
//     }
// }

// console.log(loginUserMessage("Anish")); // Anish just logged in.
// console.log(loginUserMessage()); // Please enter a username

function loginUserMessage(username = "Anish") {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    } else {
        return `${username} just logged in.`;
    }
}

console.log(loginUserMessage()); // Anish just logged in.
console.log(loginUserMessage("Sam")); // Sam just logged in.