// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// Heron's formula: Area = √(s*(s-a)*(s-b)*(s-c)) where s = (a+b+c)/2

// Triangle sides
const a = 5;
const b = 6;
const c = 7;

// Semi-perimeter
const s = (a + b + c) / 2;

// Heron's formula for area
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of the triangle with sides 5, 6, 7 is: " + area);
 