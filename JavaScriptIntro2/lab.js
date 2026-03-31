// JavaScript Data Types Lab: Strings, Numbers, Arrays & Objects
// Student Name: Kenneth Edelin

// ======================================================
// Part 1: Strings
// ======================================================

let fullName = "Kenneth Edelin";

// Print the length of the string
console.log("Full name length:", fullName.length);

// Convert it to uppercase
console.log("Uppercase full name:", fullName.toUpperCase());

// Check if it includes your last name
console.log("Includes 'Edelin':", fullName.includes("Edelin"));

// Slice out your first name only
console.log("First name only:", fullName.slice(0, 7));

// Mini Challenge
// Create a function that accepts a name
// Returns: "Hello, NAME!" (all caps)

function greetName(name) {
  return "Hello, " + name.toUpperCase() + "!";
}

console.log(greetName("Kenneth"));
console.log(greetName("Kenneth Edelin"));

// Check for Understanding
// What does .length do?
// .length returns the total number of characters in a string.

// What does .includes() return?
// .includes() returns true or false depending on whether the text is found.

// What does .slice() do?
// .slice() returns part of a string between selected start and end positions.


// ======================================================
// Part 2: Numbers
// ======================================================

let num1 = 10;
let num2 = 3;

// Add, subtract, multiply, divide
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Find remainder
console.log("Remainder:", num1 % num2);

// Round a decimal number
let decimalNumber = 4.6;
console.log("Rounded decimal:", Math.round(decimalNumber));

// Generate a random number between 1–10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1-10):", randomNumber);

// Mini Challenge
// Create a function that accepts a number
// Returns "Even" if even and "Odd" if odd

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("8 is:", checkEvenOrOdd(8));
console.log("13 is:", checkEvenOrOdd(13));

// Check for Understanding
// What does % do?
// % gives the remainder after division.

// What does Math.random() return?
// Math.random() returns a random decimal number between 0 and 1.

// When would you use Math.floor()?
// You use Math.floor() when you want to round down to the nearest whole number.


// ======================================================
// Part 3: Arrays
// ======================================================

let students = ["A", "B", "C", "D"];

// Print all students
console.log("Original students:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Add a new student
students.push("Kenneth");
console.log("After push:", students);

// Remove the last student
students.pop();
console.log("After pop:", students);

// Print total number of students
console.log("Total number of students:", students.length);

// Mini Challenge
// Create a function that accepts an array of numbers
// Returns the sum of all numbers

function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

console.log("Sum of [10, 20, 30, 40]:", sumArray([10, 20, 30, 40]));

// Check for Understanding
// How do you access an array element?
// You access an array element by using its index, like array[0].

// What does .push() do?
// .push() adds a new item to the end of an array.

// Why do we use loops with arrays?
// We use loops with arrays to go through each item one by one.


// ======================================================
// Part 4: Objects
// ======================================================

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Print each property
console.log("Car brand:", car.brand);
console.log("Car model:", car.model);
console.log("Car year:", car.year);

// Update the year
car.year = 2024;
console.log("Updated year:", car.year);

// Add a new property (color)
car.color = "Black";
console.log("Car color:", car.color);

// Loop through the object
console.log("Looping through car object:");
for (let key in car) {
  console.log(key + ":", car[key]);
}

// Mini Challenge
// Create a function that accepts a person object
// Returns a sentence like: "Name is AGE years old"

function describePerson(person) {
  return person.name + " is " + person.age + " years old.";
}

let person = {
  name: "Kenneth Edelin",
  age: 28,
  isStudent: true
};

console.log(describePerson(person));

// Check for Understanding
// What is a key-value pair?
// A key-value pair is a label and the data connected to it, like name: "Kenneth".

// How do you access object data?
// You can access object data with dot notation or bracket notation.

// When would you use an object instead of an array?
// You use an object when you want to group related data with named properties.


// ======================================================
// Final Challenge: Combine Everything
// Scenario: Student Profile System
// ======================================================

// Step 1: Object
let studentProfile = {
  name: "Kenneth Edelin",
  scores: [80, 90, 75, 100]
};

// Function to calculate average
function calculateAverage(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}

// Function to determine grade
function determineGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Use the functions
let averageScore = calculateAverage(studentProfile.scores);
let letterGrade = determineGrade(averageScore);

// Print final results
console.log("Name:", studentProfile.name);
console.log("Average:", averageScore);
console.log("Grade:", letterGrade);


// ======================================================
// Extra Console Testing
// ======================================================

console.log("----- Extra Testing -----");
console.log("Greeting test:", greetName("Kenneth Edelin"));
console.log("Even/Odd test 22:", checkEvenOrOdd(22));
console.log("Even/Odd test 19:", checkEvenOrOdd(19));
console.log("Sum test:", sumArray([1, 2, 3, 4, 5]));
console.log("Person test:", describePerson({ name: "Kenneth", age: 30 }));


// ======================================================
// Reflection (REQUIRED)
// ======================================================

// Which data type felt easiest?
// Arrays felt easiest because it is simple to store multiple values in one place and loop through them.

// Which one was most confusing?
// Objects can be the most confusing at first because they use keys and values instead of positions like arrays.

// How do arrays and objects differ?
// Arrays store lists of values in order, while objects store related data using named keys.

// When would you use each in real applications?
// You would use arrays for lists like scores, products, or messages.
// You would use objects for structured data like a user profile, car details, or a student record.