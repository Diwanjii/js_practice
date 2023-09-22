// let score = "33";
// console.log(`score is: ${score} and the score type is: ${typeof score}`);

// let valuInNumber = Number(score);
// console.log(`score is: ${valuInNumber} and the score type is: ${typeof valuInNumber}`);

// let score = "33abcd";
// console.log(`score is: ${score} and the score type is: ${typeof score}`);

// let valuInNumber = Number(score);
// console.log(`score is: ${valuInNumber} and the score type is: ${typeof valuInNumber}`);
// console.log(valuInNumber); // it gives NaN (Not a Number).

// let score = null;
// console.log(`score is: ${score} and the score type is: ${typeof score}`);

// let valuInNumber = Number(score);
// console.log(`score is: ${valuInNumber} and the score type is: ${typeof valuInNumber}`);
// console.log(valuInNumber); // it give 0.

let score = true;
// console.log(`score is: ${score} and the score type is: ${typeof score}`);

let valuInNumber = Number(score);
// console.log(`score is: ${valuInNumber} and the score type is: ${typeof valuInNumber}`);
// console.log(valuInNumber); // it gives 1.

/*
"33" => 33
"33abc" => NaN
true => 1 , false => 0
 */

// let isLoggedIn = 1;
// let boolIsloggedIn = Boolean(isLoggedIn);
// console.log(boolIsloggedIn); // True

// let isLoggedIn = 0;
// let boolIsloggedIn = Boolean(isLoggedIn);
// console.log(boolIsloggedIn); //False

// let isLoggedIn = "";
// let boolIsloggedIn = Boolean(isLoggedIn);
// console.log(boolIsloggedIn); // False

let isLoggedIn = "Anish";
let boolIsloggedIn = Boolean(isLoggedIn);
// console.log(boolIsloggedIn);  // True

/*
1 => true , 0 => false
"" => false
"Anish" => true
 */

let someNumber = 345;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************************************* OPERATION *****************************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// String Operation

// console.log("1" + 2); // 12
// console.log(2 + 1 + "3"); // 33
console.log(2 + "2" + 4); // 224

console.log(+true); // 1
console.log(+""); // 0
