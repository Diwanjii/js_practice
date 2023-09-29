// ================================================== Arrow Functions =========================================================
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.
// ES5
var x = function (x, y) {
    return x * y;
}

// ES6
// const x = (x, y) => x * y;

// Arrow functions do not have their own this.They are not well suited for defining object methods.
// Arrow functions are not hoisted.They must be defined before they are used.
// Using const is safer than using var, because a function expression is always a constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement.
//  Because of this, it might be a good habit to always keep them:
// const x = (x, y) => { return x * y };

// -------------------------------------------- this Keyword -------------------------------------------------
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
/*
The this keyword refers to different objects depending on how it is used:
1. In an object method, this refers to the object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In a function, in strict mode, this is undefined.
5. In an event, this refers to the element that received the event.
6. Methods like call(), apply(), and bind() can refer this to any object.
 */
// -------------------------------- Object Method Binding --------------------------------------
// this in a Method:->
// When used in an object method, this refers to the object.
// In these example, this refers to the user object.
// Because the welcomeMessage method is a method of the user object.
const user = {
    username: "Anish",
    price: 999,

    welcomeMessage: function () { // Method
        console.log(`${this.username}, welcome to website.`);
        // console.log(this); // { username: 'Anish', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
}


user.welcomeMessage(); // Anish, welcome to website.
user.username = "Rohit";
user.welcomeMessage(); // Rohit, welcome to website.

// -------------------------------- this Alone ---------------------------------
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:
// let x = this;
// console.log(x);
// console.log(this); // {} in node environment

// In strict mode, when used alone, this also refers to the global object:
// "use strict";
// let x = this;
// console.log(this); // {} in node env.

// ------------------------------- this in a Function (Default) ----------------------------
// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:
function myFunction() {
    let username = 'Anish';
    console.log(this.username); // undefined
    return this;
}

const result = myFunction();
console.log(result);

// ---------------------------- this in a Function (Strict) ----------------------------
// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.
// "use strict";
// function myFunction() {
//   return this;
// }

// ------------------------ this in Event Handlers ----------------------------
// In HTML event handlers, this refers to the HTML element that received the event:
{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}

// ------------------------------ Arrow Function ----------------------------------------
const chai = () => {
    let username = "Anish";
    console.log(this.username); // undefined
}

chai()