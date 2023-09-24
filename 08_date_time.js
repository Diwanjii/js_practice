// The Date object works with dates and times.
// Date objects are created with new Date().
// There are four ways of instantiating (creating) a date:
let myDate = new Date();
// let myCreatedDate = new Date(2023, 0 , 23)
// let myCreatedDate = new Date(2023, 0 , 23 , 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
// console.log(myDate);

// -------------------------- toString() ----------------------------
// The toString() method returns a date object as a string.
console.log(myDate.toString());

// ------------------------- toDateString() ----------------------------
// The toDateString() method returns the date (not the time) of a date object as a string.
console.log(myDate.toDateString());

// ----------------------- getDate() ---------------------------
// The getDate() method returns the day of the month (1 to 31) of a date.
console.log(myDate.getDate());

// --------------------- getFullYear() ----------------------
// getFullYear() returns the full year (4 digits) of a date.
console.log(myDate.getFullYear());

// ------------------------ toJSON() ------------------------
// The toJSON() method returns a date object as a string, formatted as a JSON date.
// JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(myDate.toJSON());

// --------------------- toISOString() -----------------------
// The toISOString() method returns a date object as a string, using the ISO standard.
// The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(myDate.toISOString());

// -------------------- toLocaleString() ------------------------
// The toLocaleString() method returns a Date object as a string, using locale settings.
// The default language depends on the locale setup on your computer.
console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// console.log(myCreatedDate.toLocaleString());

// ------------------ Date.now() ------------------
// Date.now() returns the number of milliseconds since January 1, 1970.
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());

// console.log(Math.floor(myDate/1000));


const date = myDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
})

console.log(date);



