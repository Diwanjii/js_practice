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

// --------------------- endsWith() ----------------------
// The endsWith() returns true if a string ends with the characters of a specified string or false otherwise.
console.log(title.endsWith('hill')); // FALSE

// endsWith() method matches characters case-sensitively
console.log(title.endsWith('Hill')); // TRUE

// --------------------- trim() -----------------------
// The String.prototype.trim() returns a new string stripped of whitespace characters from beginning and end of a string
let str1 = '  JS trim  ';
let result1 = str1.trim();

console.log(result1); // 'JS Trim'

// ----- trimStart() ------
// To remove the whitespace characters from the beginning of a string, you use the trimStart() method
const result2 = str1.trimStart()
console.log({ str1 });
console.log({ result2 }); // 'JS Trim  '

// ------ trimEnd() ------
// To remove the whitespace characters from the end of a string.
const result3 = str1.trimEnd();
console.log({ str1 });
console.log({ result3 });

// --------------------- includes() -----------------------
// The includes() method determines whether a string contains another string
let email = 'admin@example.com';
console.log(email.includes('@')); // TRUE

// the includes() matches the string case-sensitively
let str2 = 'JavaScript String';
console.log(str2.includes('script')); //FALSE
console.log(str2.includes('Script')); //TRUE

// The optional position parameter specifies the position within the string at which to begin searching for the searchString. 
// The position defaults to 0.
console.log(str2.includes('Script', 5)); //FALSE

// ----------------------- split() --------------------------
// The String.prototype.split() divides a string into an array of substrings.

// split([separator, [,limit]]);
// 1) separator
// The separator determines where each split should occur in the original string. The separator can be a string.
//  Or it can be a regular expression.
// If you omit the separator or the split() cannot find the separator in the string, the split() returns the entire string.

// 2) limit
// The limit is zero or positive integer that specifies the number of substrings. 
// The split() method will stop when the number of substrings equals to the limit.
// If the limit is zero, the split() returns an empty array. If the limit is 1, 
// the split() returns an array that contains the string.
let substrings = str2.split(' ');
console.log(substrings); // ['JavaScript' , 'String']

// split() method to divide a string into substrings using the space separator. 
// It also uses the second parameter to limit the number of substrings to two:
let substrings1 = str2.split(' ', 1);
console.log(substrings1); // ['JavaScript']

// split() method to split sentences in a paragraph into sentences
let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences); //["Good Morning", " How are you", " This is John", " John is my friend", ""]

let sentences1 = paragraph.split(/([!,?,.])/);
console.log(sentences1); //["Good Morning", "!", " How are you", "?", " This is John", ".", " John is my friend", ".", ""]














