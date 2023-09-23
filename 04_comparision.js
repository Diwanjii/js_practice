console.log("2" < 1); //false
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// Stack and Heap

// Primitive ---> Stack
// copy data
let myNameIs = "Anish Kumar";
let yourNameIs = myNameIs; // copy data
yourNameIs = "javascript"; // this will not effect myNameIs variable

// console.log(myNameIs);
// console.log(yourNameIs);

let userOne = {
    email: "anish@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne; // it will get refrence .
userTwo.upi = "user@ibl"; // it will change main variable

console.log(userOne);
console.log(userTwo);

// https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/