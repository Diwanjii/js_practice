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

// ------------------------- substring() ----------------------------
// The JavaScript String.prototype.substring() returns the part of the string between the start and end indexes:
// str.substring(startIndex [, endIndex])

// The substring() method accepts two parameters: startIndexand endIndex:
// 1. The startIndex specifies the index of the first character to include in the returned substring.
// 2. The endIndex determines the first character to exclude from the returned substring. In other words, 
//    the returned substring doesn’t include the character at the endIndex.

// If you omit the endIndex, the substring() returns the substring to the end of the string.

// If startIndex equals endIndex, the substring() method returns an empty string.
// let substring = str2.substring(10,10); // return empty

// If startIndex is greater than the endIndex, the substring() swaps their roles: 
// the startIndex becomes the endIndex and vice versa.

// If either startIndex or endIndex is less than zero or greater than the string.length, 
// the substring() considers it as zero (0) or string.length respectively.

// If any parameter is NaN, the substring() treats it as if it were zero (0).
let substring = str2.substring(0, 10);
console.log(substring); // returns JavaScript

console.log(str2.substring(11)); //The following example uses the substring() to extract a substring from the index 11 to the end of the string

// -----  Extracting domain from the email example ----
let email1 = 'john.doe@gmail.com';
let domain = email1.substring(email1.indexOf('@') + 1);

console.log(domain); // gmail.com

// -------------------------------------- slice() ---------------------------------------------
// The String.prototype.slice() method extracts a portion of a string and returns it as a substring. 
// The following shows the syntax of the slice() method:
// slice(start, end)
// The slice() method has two optional parameters start and end:
// The start parameter is a zero-based index at which the method starts the extraction. For example:
const substr = str2.slice(3);
// console.log({ str2.slice(3) }); // gives error
console.log({ substr }); // returns "aScript String"

// If the start is negative, the slice() method starts extraction from the str.length + start. For example:
const substr1 = str2.slice(-3);
console.log({ substr1 }); // returns "ing"

// If the start is omitted, undefined, or cannot be converted to a number, 
// the slice() method starts extraction from the beginning of the string
const substr2 = str2.slice();
console.log({ substr2 }); // returns "JavaScript String"

// The end is a zero-based index that specifies the position before the slice() method ends the extraction. 
// The result string will not include the character at the end index. For example:
const substr3 = str2.slice(0, 9);
console.log({ substr3 }); // returns "JavaScrip"

// if the end is negative, the slice() method treats it as str.length + end. For example:
const substr4 = str2.slice(0, -3);
// str2.length 5
// str2.length + end = 5 + (-2) = 3
console.log({ substr4 });

// If the end represents a position that is before the one represented by the start, 
// the slice() method returns an empty string. For example:
const substr5 = str2.slice(3, 2);
console.log(substr5); // { substr: '' }

// The following example uses the slice() method to get the local part of an email address:
let localPart = email.slice(0, email.indexOf('@'));
console.log(localPart); // admin@gmail.com ==> admin

// ----------------------------------------- replace() --------------------------------------------
// replace() method to replace a substring in a string with a new one.
// let newStr = str.replace(substr, newSubstr);
// The JavaScript String replace() method returns a new string with a substring (substr) replaced by a new one (newSubstr).
let myStr = 'JS will, JS will rock you!';
let newStr = myStr.replace('JS', 'JavaScript');
console.log(newStr); // JavaScript will, JS will rock you

// let newStr = str.replace(regexp, newSubstr);
// In this syntax, the replace() method find all matches in the str, 
// replaces them by the newSubstr, and returns a new string (newStr).

// The following example uses the global flag (g) to replace all occurrences of the JS in the str by the JavaScript:
let newStr1 = myStr.replace(/JS/g, 'JavaScript');
console.log(newStr1); // JavaScript will, JavaScript will rock you!

// If you want to ignore cases for searching and replacement, you can use the ignore flag (i) in the regular expression like this:
let newStr2 = myStr.replace(/JS/gi, 'JavaScript');
console.log(newStr2); // JavaScript will, JavaScript will rock you!

// ----------------------------------------------- replaceAll() -------------------------------------------------------
// The String replace() method allows you to replace the first occurrence of a substring in a string with a new one.

// To replace all the occurrences of a substring with a new one, you can call the replace() method repeatedly or 
// use a regular expression with a global flag (g).

// ES2021 introduced the String replaceAll() method that returns a new string with all matches 
// of a pattern replaced by a replacement:
// String.prototype.replaceAll(pattern, replacement)

// The pattern can be a string or a regular expression. When the pattern is a regular expression, 
// it needs to include the global flag (g); otherwise, the replaceAll() will throw an exception.

// The assumption is that you made a mistake and should have used the replace() method to replace 
// the first occurrence that matches the pattern only.

// The replacement argument can be a string or a callback function that will be invoked for each match.

// When the replacement is a callback function, it has the following form:
// replacement(match, offset, str)

// The replacement callback has the following arguments:

// 1. match is the matched substring.
// 2. offset is offset of the matched substring within the original string. 
// For example, if the original string is 'Hello' and the matched substring is 'll', then the offset will be 2.
// 3. str is the original string.

// Like the replace() method, the replaceAll() method doesn’t change the original string. 
// It returns the new completely new string with the pattern replaced by the replacement.

let myNewStr = 'JS will, JS will, JS will rock you.';
let myNewStrResult = myNewStr.replaceAll('JS', 'JavaScript');

console.log(myNewStrResult); // JavaScript will, JavaScript will, JavaScript will rock you. 

// ------------------------------------------------ concat() -----------------------------------------------
// The String.prototype.concat() method accepts a list of strings and returns a new string that contains the combined strings:
// string.concat(str1, [...strN]);
// If the arguments are not strings, the concat() converts them to strings before carrying the concatenation.

let greeting = 'Hi';
let message = greeting.concat(' ', 'John');

console.log(message); //Hi John

// --- Concatenating an array of strings ---
let colors = ['Blue',' ','Green',' ','Teal'];
let result4 = ''.concat(...colors);

console.log(result4); //Blue Green Teal

// Note that the ... before the colors array argument is the spread operator that unpacks elements of an array.

// ---- Concatenating non-string arguments ----
let myStr2 = ''.concat(1,2,3);

console.log(myStr2); //123








