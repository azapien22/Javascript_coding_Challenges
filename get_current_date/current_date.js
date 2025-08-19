// Write a JavaScript program to get the current date.

// Get the curent date
var today = new Date();

// Get the day of the month
var dd = today.getDate();

// Get the month (adding 1 since months are zero-indexed)
var mm = today.getMonth() + 1; //January is 0!

// Get the year
var yyyy = today.getFullYear();

// Add leading zeros to day and month if needed
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

// different formats
today = mm + '/' + dd + '/' + yyyy; // MM/DD/YYYY format
console.log("Current Date (MM/DD/YYYY): " + today);

today = dd + '/' + mm + '/' + yyyy; // DD/MM/YYYY format
console.log("Current Date (DD/MM/YYYY): " + today);

today = yyyy + '-' + mm + '-' + dd; // YYYY-MM-DD format
console.log("Current Date (YYYY-MM-DD): " + today);

today = yyyy + '/' + mm + '/' + dd; // YYYY/MM/DD format
console.log("Current Date (YYYY/MM/DD): " + today);

today = mm + '-' + dd + '-' + yyyy; // MM-DD-YYYY format
console.log("Current Date (MM-DD-YYYY): " + today); 

today = dd + '-' + mm + '-' + yyyy; // DD-MM-YYYY format
console.log("Current Date (DD-MM-YYYY): " + today);