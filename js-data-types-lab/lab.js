// Practice 1: String Manipulation
////Create a variable:
//* `fullName` and assign it your full name as a stringnode 

//### Tasks:

//* Print the length of the string
//* Convert it to uppercase
//* Check if it includes your last name
//* Slice out your first name only

//---
let fullName ="Lan Nguyen";
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Nguyen"));
console.log(fullName.slice(0,4));

//## Mini Challenge
//Create a function that:
//* Accepts a name
//* Returns: `"Hello, NAME!"` (all caps)
//---
function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}
console.log(greet("Joseph Nguyen"));

//## Check for Understanding (In comments)

//1. What does `.length` do?
//2. What does `.includes()` return?
//3. What does `.slice()` do?

//--1. The `.length` property returns the number of characters in a string.
//--2. The `.includes()` method checks if a string contains a specified substring and returns `true` or `false`.
//--3. The `.slice()` method extracts a section of a string and returns it as a new string, based on the specified start and end indices.

//# Practice 2: Number Logic

//Create variables:
//### Tasks:

//* Add, subtract, multiply, divide
//* Find remainder
//* Round a decimal number
//* Generate a random number between 1–10

//---
let num1 = 10;
let num2 = 3;
console
.log(num1 + num2); // Addition
console.log(num1 - num2);
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Remainder
console.log(Math.round(3.7)); // Rounding a decimal number
console.log(Math.floor(Math.random() * 10) + 1);// Generating a random number between 1 and 10

//## Mini Challenge
//Create a function that:
//* Accepts a number
//* Returns:
//* "Even" if even
  //* "Odd" if odd
//---

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(5)); // Output: "Odd"
console.log(checkEvenOdd(8)); // Output: "Even"

//## Check for Understanding

//1. What does `%` do?
//2. What does `Math.random()` return?
//3. When would you use `Math.floor()`?
//--1. The `%` operator returns the remainder of a division operation.
//--2. The `Math.random()` function returns a random decimal number between 0 (inclusive) and 1 (exclusive).
//--3. You would use `Math.floor()` to round a decimal number down to the nearest whole number.   

//# Part 3: Arrays
//## What is an Array? 
//An array is a list of values.


let fruits = ["apple", "banana", "orange"];

//## Practice 3: Array Work

//Create an array:
//### Tasks:
//* Print all students
//* Add a new student
//* Remove the last student
//* Print total number of students

let students = ["Derwin", "James", "Brian", "Micheal"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
students.push("Sarah"); // Adding a new student
students.pop(); // Removing the last student
console.log(students.length); // Printing total number of students

//## Mini Challenge
//Create a function that:
//* Accepts an array of numbers
//* Returns the sum of all numbers in the array

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10

//## Check for Understanding

//1. What does `.push()` do?
//2. What does `.pop()` do?
//3. 3. Why do we use loops with arrays?
//--1. The `.push()` method adds a new element to the end of an array.
//--2. The `.pop()` method removes the last element from an array and returns it.
//--3. We use loops with arrays to iterate through each element in the array, allowing us to perform operations on each element, such as printing them, modifying them, or calculating values based on them.  

//## Practice 4: Object Work
//Create an object:
//* Print each property
//* Update the year
//* Add a new property (color)
//* Loop through the object


let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car.brand); // Printing each property
console.log(car.model);
console.log(car.year);
car.year = 2021; // Updating the year
car.color = "red"; // Adding a new property (color)
for (let key in car) { // Looping through the object
    console.log(key + ": " + car[key]);
}

//## Mini Challenge
//Create a function that:
//* Accepts an object with properties `name` and `age`
//* Returns: `"NAME is AGE years old."`node lab js

function describePerson(person) {
    return person.name + " is " + person.age + " years old.";
}
console.log(describePerson({ name: "Jorden", age: 27 })); // Output: "Alice is 30 years old."

//## Check for Understanding

//1. What is a key-value pair?
//2. How do you access object data?
//3. When would you use an object instead of an array?
//--1. A key-value pair is a fundamental data structure in which a unique key is associated with a specific value. The key serves as an identifier for the value, allowing you to retrieve or manipulate the value using the key.
//--2. You can access object data using dot notation (e.g., `object.property`) or bracket notation (e.g., `object["property"]`).
//--3. You would use an object instead of an array when you want to store data that has named properties or when the order of the data is not important. Objects are ideal for representing complex data structures with multiple attributes, while arrays are better suited for ordered lists of items.    

//# Final Challenge: Combine Everything

//## Scenario: Student Profile System

//Create:

//### Step 1: Object

//A student object:
//### Step 2: Requirements
//* Loops through scores
//* Calculates average
//* Determines grade:
//* A, B, C, D, F
//print


  let student ={
    name: "Patrick Tran",
   scores: [80, 90, 75, 100]
};
for(let i = 0; i < student.scores.length; i++) {
    console.log(student.scores[i]);
}
let total = 0;
for(let i = 0; i < student.scores.length; i++) {
    total += student.scores[i];
}
let average = total / student.scores.length;
console.log("Average score: " + average);
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(student.name + "'s grade: " + grade);

//# Reflection (REQUIRED)

//1 Which data type felt easiest? yes
//2. Which one was most confusing? none
//3. How do arrays and objects differ? 
//4. When would you use each in real applications?
//--3. Arrays are ordered lists of values, while objects are collections of key-value pairs. Arrays are accessed by their index, while objects are accessed by their keys.
//--4. I would use arrays when you need to store a list of items in a specific order, such as a list of students or a series of scores. You would use objects when you need to represent more complex data with multiple attributes, such as a student profile with properties like name, age, and scores.


