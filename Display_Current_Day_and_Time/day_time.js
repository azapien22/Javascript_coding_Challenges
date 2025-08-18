// Get current date and time
const today = new Date();

// array of weekdays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day name
const dayName = days[today.getDay()];

// Get the current time in HH:MM:SS format  
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// Determine AM or PM
const ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours from 24-hour to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'  

// Add leading zeros to minutes and seconds if needed
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// display output
console.log(`Current Day: ${dayName}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds} ${ampm}`);