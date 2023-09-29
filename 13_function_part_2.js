// function calculateCartPrice(num1) {
//     return num1 ;
// }
// const result = calculateCartPrice(2);
// console.log(result);

// The rest parameter provides an easier and cleaner way of working with an indefinite number of arguments. 
// Let’s rewrite the above example with a rest parameter.
// Using the rest parameter, which is the same syntax as the spread operator, 
// we can pass an indefinite number of parameters to our function.
function calculateCartPrice(...num1) {
    return num1;
}
const result = calculateCartPrice(200, 300, 400, 500);
console.log(result); // returns---> [ 200, 300, 400, 500 ]

function calculateCartPrices(val1, val2, ...num1) {
    return num1;
}
const result1 = calculateCartPrices(200, 300, 400, 500);
console.log(result1); // return--> [400, 500] and val1--> 200 , val--> 300

function handleObject(anyObject) {
    console.log(`Product is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({ username: "Shoes", price: 1000 })

function myNewArray(anyArray) {
    return anyArray
}

const result2 = myNewArray([200, 300, 400, 5000])
console.log(result2); // [ 200, 300, 400, 5000 ]










