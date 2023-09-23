// Data Types in JavaScript
// In JavaScript we do not need to specify type of the variable because it is dynamically used by JavaScript engine.

// Primitive Data Types                    Non-Primitive (Refrence) Data type
// String                                   Object
// Number                                   Array
// Boolean                                  RegExp
// Undefined                                Function
// Null

// alert("hello") //Alert is Not define in nodejs it will work only in Browser console

let counter = 120;
console.log(typeof (counter)); // "number"

counter = false;
console.log(typeof (counter)); // "boolean"

counter = "Hi";
console.log(typeof (counter)); // "string"

// Undefined

/* 
The undefined type is a primitive type that has only one value undefined.
By default, when a variable is declared but not initialized, it is assigned the value of undefined. 
*/
// let counter;
// console.log(counter);        // undefined
// console.log(typeof counter); // undefined

// NULL 

// The null type is the second primitive data type that also has only one value null. For example:
let obj = null;
console.log(typeof obj); // object
let obj1 = undefined;
console.log(typeof obj1); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

// The number type
// JavaScript uses the number type to represent both integer and floating-point numbers.
let price = 200.00; // interpreted as an integer 200
let discount = 0.05;

// To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE. For example:
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN
/* 
NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. 
For example, the division of a string by a number returns NaN:. 
*/
console.log('a' / 2); // NaN;

/* 
The NaN has two special characteristics:
1. Any operation with NaN returns NaN.
2. The NaN does not equal any value, including itself.
*/
// Here are some examples: 
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

// The string type
/* 
In JavaScript, a string is a sequence of zero or more characters. 
A string literal begins and ends with either a single quote(') or a double quote ("). 
*/
let greeting = 'Hi';
let bye = "Bye";
let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

/*
JavaScript strings are immutable.
This means that it cannot be modified once created.
However, you can create a new string from an existing string. 
For example:
 */
let str = 'JavaScript';
str = str + ' String';
console.log(str);

/*
In this example:
1. First, declare the str variable and initialize it to a string of 'JavaScript'.
2. Second, use the + operator to combine 'JavaScript' with ' String' to make its value as 'Javascript String'.

Behind the scene, the JavaScript engine creates a new string that holds the new string 'JavaScript String' 
and destroys the original strings 'JavaScript' and ' String'.
 */
let s = 'JavaScript';
s[0] = 'j';
console.log(s)
// The output is: JavaScript
// But not: javaScript

// The boolean type
/*
The boolean type has two literal values: true and false in lowercase. 
The following example declares two variables that hold the boolean values.
 */
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

// Important 
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({ foo: 100 }));  // true on non-empty object
console.log(Boolean(null));// false

// The symbol type
// JavaScript added a primitive type in ES6: the symbol. 
// Different from other primitive types, the symbol type does not have a literal form.

// To create a symbol, you call the Symbol function as follows:

let s1 = Symbol();
// The Symbol function creates a new unique value every time you call it.

console.log(Symbol() == Symbol()); // false

// The object type
// In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

/*
To access a object’s property, you can use
1. The dot notation (.)
2. The array-like notation ([]).
 */
// The following example uses the dot notation (.) to access the firstName and lastName properties of the contact object.
console.log(contact.firstName);
console.log(contact.lastName);

// If you reference a property that does not exist, you’ll get an undefined value. For example:
console.log(contact.age); // undefined

// The following example uses the array-like notation to access the email and phone properties of the contact object.
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'

