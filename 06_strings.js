// ----------------------- STRING -----------------------
/*
JavaScript strings are primitive values. Also, strings are immutable. 
It means that if you modify a string, you will always get a new string. 
The original string doesn’t change.
*/
// ------------------------------------------------------

const name = "anish kumar ";
const repoCount = 50;

// console.log(name + repoCount + " value"); //this give the output but this syntax is very outdated.

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// This syntax is use in mordern javascript.

const gameName = new String('Anish Kumar')
// console.log(typeof gameName);
// console.log(gameName[3]);

// -------------- Length -----------------------
console.log(gameName.length); // string length is 11

// -------------- toUpperCase ------------------
/* String.prototype.toUpperCase() method to return a string with all the characters converted to uppercase. */
/* The toUpperCase() method returns a new string with all characters converted to uppercase. */
// Here’s the syntax of the toUpperCase() method:
console.log(gameName.toUpperCase()); // ANISH KUMAR

// Converting a non-string to a string
// The toUpperCase() method will convert a non-string value to a string if you set its this value to a non-string value.
const completed = true;
const result = String.prototype.toUpperCase.call(completed);
console.log(result);

// ----------------- toLowerCase -------------------
// String.prototype.toLowerCase() method to return a string with all the characters converted to lowercase.
console.log(gameName.toLowerCase()); // anish kumar

// ---------------- charAt & charCodeAt -------------------
console.log(gameName.charAt(3)); // it gives character "s".
console.log(gameName.charCodeAt(3)); // it gives character "s" ASCII code "115".

// ------------------- indexOf() --------------------
// indexOf() method to find the index of a substring within a string.
console.log(gameName.indexOf("K")); // it give 6

// ------------------ lastIndexOf() -------------------
// This example uses the lastIndexOf() method to locate the last occurrence of the substring 'a' in the string 'JavaScript':
console.log(gameName.lastIndexOf('a')); // it gives 9
// The lastIndexOf() is case-sensitive. The following example returns -1:
let str = 'Hello, World!';
console.log(str.lastIndexOf('L')); // -1

// ------------------ startsWith() ----------------------
// The startsWith() returns true if a string starts with a substring or false otherwise.
// The following shows the syntax of the startsWith() method:
const title = 'Jack and Jill Went Up the Hill';
console.log(title.startsWith('Jack')); // TRUE
console.log(title.startsWith("Anish")); // FALSE

// The startsWith() method matches characters case-sensitively, so the following statement returns false:
console.log(title.startsWith('jack')); // FALSE

// startsWith() method with the second parameter that determines the beginning position to start searching:
console.log(title.startsWith('Jill', 9)); //TRUE






















