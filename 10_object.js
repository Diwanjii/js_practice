// ================================================ Object ==========================================================
// singleton --> constructor syntax (yes)
// singleton --> Literal syntax (no)
// Objects are one of JavaScript's data types.
// Objects are used to store key/value (name/value) collections.
// symbol
const mySym = Symbol("key1");

// To create an object with properties, you use the key:value within the curly braces. For example, 
// the following creates a new user object:
const JsUser = {
    firstName: "Anish",
    lastName: "Diwan",
    age: 23,
    location: "Bhopal",
    email: "anish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    'full name': "Anish Diwan",
    [mySym]: "myKey1"
}

// Accessing properties ---> objectName.propertyName
console.log(JsUser.firstName); // Anish
console.log(JsUser['firstName']); // Anish
console.log(JsUser["full name"]); // Anish Diwan
console.log(JsUser.mySym); // undefined
console.log(JsUser[mySym]); // myKey1

JsUser.email = "diwan@google.com"; // Changed
console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "anish@google.com"; // not Changed but not give any error
console.log(JsUser);

// JsUser.greeting = function () {
//     console.log("Hello JS User");
// }
// console.log(JsUser.greeting); // [Function(anonymous)] --> function refrence
// console.log(JsUser.greeting()); // Hello JS User

JsUser.greeting = function () {
    console.log(`Hello JS User, ${this.firstName}`);
}

console.log(JsUser.greeting); // [Function(anonymous)] --> function refrence
console.log(JsUser.greeting()); // Hello JS User, Anish









