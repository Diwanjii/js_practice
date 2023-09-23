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
console.log(Number.isInteger(123)); // TRUE
console.log(Number.isInteger(-123)); // TRUE
console.log(Number.isInteger('123')); // FALSE










