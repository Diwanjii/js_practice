// const tinderUser = new Object(); // It is know as singleton object
const tinderUser = {}; // It is know as non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "Annii";
tinderUser.isLoggedIn = false;
// console.log(tinderUser); // {id: '123abc', name: 'Annii', isLoggedIn: false}

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Anish",
            lastName: "Diwan"
        }
    }
}

// console.log(regularUser); // { email: 'some@gmail.com', userFullname: { firstName: 'Anish', lastName: 'Diwan' } }
// console.log(regularUser.fullName); // { userFullname: { firstName: 'Anish', lastName: 'Diwan' } }
// console.log(regularUser.fullName.userFullname); // { firstName: 'Anish', lastName: 'Diwan' }
// console.log(regularUser.fullName.userFullname.firstName); // Anish
// console.log(regularUser.fullName.userFullname.lastName); // Diwan

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// ----------------- Object.assign() -----------------
// Object.assign(target, ...sources)
// The Object.assign() copies all enumerable and own properties from the source objects to the target object. 
// It returns the target object.
const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = { ...obj1, ...obj2 }
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// console.log(user);
console.log(user[1].email); // a@gmail.com

console.log(Object.keys(tinderUser)); // To get all keys --> [ 'id', 'name', 'isLoggedIn' ]

// -------------------- Object.values() --------------------
// Object.values() method to access the own enumerable properties of an object.
console.log(Object.values(tinderUser)); // To get all values --> [ '123abc', 'Annii', false ]

// ------------- Object.entries() -------------
// ES2017 introduces the Object.entries() method that accepts an object and returns 
// its own enumerable string-keyed property [key, value] pairs of the object.
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Annii' ], [ 'isLoggedIn', false ] ]

// -------------- hasOwnProperty() ---------------
// The hasOwnProperty() method returns true if a property is own.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('name')); // true
console.log(tinderUser.hasOwnProperty('fullName')); // false
console.log(tinderUser.hasOwnProperty('lastName')); // false

// ============================= object destructuring ==============================
// Suppose you have a person object with two properties: firstName and lastName.
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// Prior to ES6, when you want to assign properties of the person object to variables, you typically do it like this:
// let firstName = person.firstName;
// let lastName = person.lastName;
// console.log(firstName);
// ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:
let { firstName: fname, lastName: lname } = person;
// In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively.
console.log(fname); // 'John'
console.log(lname); // 'Doe'

let { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'















