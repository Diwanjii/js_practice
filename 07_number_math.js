// =============================================== NUMBER ==================================================
// JavaScript uses the number type to represent both integers and floating-point values. 
// Technically, the JavaScript number type uses the IEEE-754 format.

// ES2020 introduced a new primitive type bigint representing big integer numbers with values larger than 253 – 1.

// To support various types of numbers, JavaScript uses different number literal formats.

const socre = 400;
const balance = new Number(100); //in browser console log it will gives some methods.
console.log(balance);

// ------------------------ toString() -------------------------
// The toString() method returns a string as a string.

// The toString() method does not change the original string.

// The toString() method can be used to convert a string object into a string.

// console.log(balance.toString()); // 100
// console.log(typeof balance.toString()); // string
// console.log(balance.toString().length); // 3

// ----------------------- toFixed() -------------------------
// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.
const balanceString = balance.toFixed(2);
console.log(balanceString); // 100.00
console.log(typeof balanceString); // string

// ---------------------- toPrecision() -------------------------
// The toPrecision() method formats a number to a specified length.

// A decimal point and nulls are added (if needed), to create the specified length.
const otherNumber = 28.8966
console.log(otherNumber.toPrecision(3)); // 28.9
console.log(typeof otherNumber); // Number

// --------------------- toLocaleString() ---------------------------
// The toLocaleString() returns a number as a string, using local language format.
// The language format depends on the locale setup on your computer.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// ------------------------ valueOf() -------------------------
// The valueOf() method returns the primitive value of a number.
let num = 15;
let n = num.valueOf();
console.log(n);
console.log(typeof n); // number

// -------------------- toExponential() --------------------
// The toExponential() method converts a number into an exponential notation.
let myNum = 5.56789;
let newNum = myNum.toExponential();
console.log(newNum); // 5.56789e+0

const myNewNum = myNum.toExponential(3);
console.log(myNewNum); // 5.568e+0

// ------------------ isInteger() -------------------
// The Number.isInteger() method returns true if a value is an integer of the datatype Number.
// Otherwise it returns false.
console.log(Number.isInteger(123)); // True
console.log(Number.isInteger(-123)); // True
console.log(Number.isInteger('123')); // False

// ==================================================== Maths ===========================================================
// The Math object allows you to perform mathematical tasks.
// Math is not a constructor. All properties/methods of Math can be called by using Math as an object, without creating it:
let x = Math.PI;
let y = Math.sqrt(16);
console.log(x, y); // (3.141592653589793, 4)

// ------------------------------ Math.abs() ---------------------------------
// The Math.abs() method returns the absolute value of a number.
console.log(Math.abs(-7.25)); // 7.25
console.log(Math.abs(7.25)); // 7.25
console.log(Math.abs(null)); // 0
console.log(Math.abs(2 - 3)); // 1
console.log(Math.abs("anish")); // Nan

// ---------------------------- Math.ceil() ----------------------------------
// The Math.ceil() method rounds a number rounded UP to the nearest integer.
console.log(Math.ceil(1.4)); // returns 2
console.log(Math.ceil(0.60)); // returns 1
console.log(Math.ceil(0.40)); // returns 1
console.log(Math.ceil(5.1)); // returns 6
console.log(Math.ceil(-5.1)); // returns -5
console.log(Math.ceil(-5.9)); // returns -5

// --------------------------- Math.floor() ----------------------------
// The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.floor(1.6)); // 1
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(-5.6)); // -6

// -------------------------- Math.pow() ----------------------------
// The Math.pow() method returns the value of x to the power of y (x^y).
console.log(Math.pow(4, 3));

// ------------------------- Math.random() ----------------------------
// The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
console.log(Math.random()); // returns random number

// Return a random number between 0 and 10:
console.log(Math.random() * 10);

// Return a random number between 0 and 100:
console.log(Math.random() * 100);

// A random whole number between 1 and 10:
console.log((Math.random() * 10) + 1);

// A random whole number between 1 and 100:
console.log(Math.floor((Math.random() * 100) + 1));

// --------------------- Math.round() --------------------
// The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
console.log(Math.round(2.5)); // 3
console.log(Math.round(-2.50)); // -2
console.log(Math.round(-2.69)); // -3

// A random whole number between 1 and 100:
console.log(Math.round((Math.random() * 100) + 1));

// A random whole number between 100 and 1000:
console.log(Math.round((Math.random() * 1000) + 1));

// ---------------------- Math.PI ----------------------------
// Math.PI returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)
console.log(Math.PI.toFixed(2)); // 3.14
console.log(Math.PI.toFixed(3)); // 3.142






