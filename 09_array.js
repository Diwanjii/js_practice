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

// --------------- includes() ------------------
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("straberry")); // false

// ------------- join() -------------
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
let text = fruits.join();
console.log(text); // Banana,Orange,Apple,Mango
console.log(typeof text); // String 

// ------------- slice() --------------
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
const citrus = fruits.slice(1, 3);
const myBest = fruits.slice(-3, -1);
const myBest1 = fruits.slice(-4, -1);
console.log(citrus); // ['Orange', 'Apple']
console.log(myBest); // ['Orange', 'Apple'] 
console.log(myBest1); // ['Banana', 'Orange', 'Apple'] 

// ----------- splice() ------------
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax ==> array.splice(index, howmany, item1, ....., itemX)
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

// ------------- find() -------------
// In ES5, to find an element in an array, you use the indexOf() or lastIndexOf() methods. 
// However, these methods are quite limited because they return the index of the first matching element only.

// ES6 introduced a new method called find() added to the Array.prototype object.

// The find() method returns the first element in an array that passes a test function. 
// The following shows the syntax of the find() method:
// find(callback(element[, index[, array]])[, thisArg])
// The find() accepts two arguments: a callback function and an optional value to use for the this inside the callback function.

// 1) callback
// The callback is a function that executes each element of the array. It takes three arguments:
// a) element is the current element.
// b) index the index of the current element.
// c) array the array that the find() was called upon.

// 2) thisArg
// The thisArg is the object used as this inside the callback.

// Return value
// The find() executes the callback function for each element in the array until the callback returns a truthy value. 

// If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, 
// it returns undefined.

// If you want to find the index of the found element, you can use the findIndex() method.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(e => e % 2 == 0)); // 2

let customers = [{
   name: 'ABC Inc',
   credit: 100
}, {
   name: 'ACME Corp',
   credit: 200
}, {
   name: 'IoT AG',
   credit: 300
}];

// The following code uses the find() method to find the first customer whose credit is greater than 100.
console.log(customers.find(c => c.credit > 100)); // { name: 'ACME Corp', credit: 200 }


const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// ------------ concat() -------------
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
const newArray = marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes); // ["thor", "Ironman", "Spiderman"]
console.log(newArray); // ["thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// ------------ SpredOperators ------------
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // ["thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// ----------- flat() ------------
// he flat() method concatenates sub-array elements.
const myArray2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat();
console.log(newArr); // [0,1,2,3,4,5,6]

// ------------ Array.from() -------------
// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.
console.log(Array.from("ABCDEFG")); // ["A", "B", "C", "D", "E", "F", "G"]
console.log(Array.from({ name: "Anish" })); // []








