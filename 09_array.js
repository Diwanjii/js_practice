// ==================================================== Array ===========================================================
/*
 In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.

A JavaScript array has the following characteristics:
1. First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, 
   string, boolean, and null.
2. Second, the size of an array is dynamic and auto-growing. In other words, you don’t need to specify the array size up front.
*/

const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeros = ["shaktiman", "krish"];
myHeros[1] = "Iron Man"
console.log(myHeros); //["shaktiman", "Iron Man"]

const myArray = new Array(1, 2, 3, 4);
// console.log(myArray[1]); // 2

// ==================================== ARRAY METHODS ====================================

// ----------------- push() ------------------
// To add an element to the end of an array, you use the push() method:
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas); //['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' , 'Red Sea']

// ---------------- pop() -----------------
// To remove an element from the end of an array, you use the pop() method:
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.
const lastElement = seas.pop();
console.log(lastElement); // 'Red Sea'
console.log(seas); // ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']

// --------------- unshift() ---------------
// To add an element to the beginning of an array, you use the unshift() method.
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
seas.unshift('Red Sea');
console.log(seas); // ['Red Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']

// ---------------- shift() ---------------
// To remove an element from the beginning of an array, you use the shift() method.
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.
let seass = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seass.shift();
console.log(firstElement); // 'Black Sea'
console.log(seass); // ['Caribbean Sea', 'North Sea', 'Baltic Sea']

// ------------------ indexOf() ------------------
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right.
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).
let index = seass.indexOf('North Sea');
const newIndex = myArr.indexOf(2)
console.log(index); // 1
console.log(newIndex); // 2

// ---------------- length -----------------
// The length property sets or returns the number of elements in an array.
console.log(seass.length); // 3

// ---------------- Array.isArray() -----------------
// The isArray() method returns true if an object is an array, otherwise false.
console.log(Array.isArray(seass)); //true














