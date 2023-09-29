function one() {
    const username = "Anish";

    function two() {
        const website = "youtube"
        console.log(username); // usssername CAN be used here
        console.log(website); // website CAN be used here
    }

    // console.log(website); // website CAN'T be used here
    console.log(username); // username CAN be used here

    two();
}

one()

console.log(addOne(5)); // addOne Function Can be called here
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5)); // addTwo Function Can't be called here
const addTwo = function (num) {
    return num + 2;
}

console.log(addTwo(8)); // addTwo Function Can be called here