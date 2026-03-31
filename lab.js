// ==========================
// Part 1: Strings
// ==========================

let fullName = "Jamiir Parker";

// Print length
console.log("Length:", fullName.length);

// Convert to uppercase
console.log("Uppercase:", fullName.toUpperCase());

// Check if includes last name
console.log("Includes 'Parker':", fullName.includes("Parker"));

// Slice first name
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log("First Name:", firstName);

// Mini Challenge
function greet(name) {
  return "HELLO, " + name.toUpperCase() + "!";
}

console.log(greet("Jamiir"));

// Check for Understanding
// 1. .length tells how many characters are in a string
// 2. .includes() returns true or false
// 3. .slice() returns part of a string


// ==========================
// Part 2: Numbers
// ==========================

let num1 = 10;
let num2 = 3;

// Math operations
console.log("Add:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);

// Remainder
console.log("Remainder:", num1 % num2);

// Round decimal
console.log("Rounded:", Math.round(4.6));

// Random number 1–10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", randomNum);

// Mini Challenge
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7));

// Check for Understanding
// 1. % gives the remainder after division
// 2. Math.random() returns a number between 0 and 1
// 3. Math.floor() rounds down to the nearest whole number


// ==========================
// Part 3: Arrays
// ==========================

let students = ["A", "B", "C", "D"];

// Print all students
for (let i = 0; i < students.length; i++) {
  console.log("Student:", students[i]);
}

// Add a new student
students.push("E");

// Remove last student
students.pop();

// Print total number
console.log("Total Students:", students.length);

// Mini Challenge
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log("Sum:", sumArray([1, 2, 3, 4]));

// Check for Understanding
// 1. You access elements using index like array[0]
// 2. .push() adds to the end of the array
// 3. Loops are used to go through each item in an array


// ==========================
// Part 4: Objects
// ==========================

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Print each property
console.log(car.brand, car.model, car.year);

// Update year
car.year = 2024;

// Add new property
car.color = "Black";

// Loop through object
for (let key in car) {
  console.log(key + ":", car[key]);
}

// Mini Challenge
function describePerson(person) {
  return person.name + " is " + person.age + " years old";
}

console.log(describePerson({ name: "Jamiir", age: 20 }));

// Check for Understanding
// 1. A key-value pair is data stored as name: value
// 2. You access object data using dot or bracket notation
// 3. Objects are used for structured data, arrays are for lists


// ==========================
// Final Challenge
// ==========================

let student = {
  name: "Jamiir",
  scores: [80, 90, 75, 100]
};

// Function to calculate average
function getAverage(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}

// Function to get grade
function getGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}

let average = getAverage(student.scores);
let grade = getGrade(average);

console.log("Name:", student.name);
console.log("Average:", average);
console.log("Grade:", grade);


// ==========================
// Reflection
// ==========================

// 1. Strings felt the easiest because the methods are simple to use.
// 2. Objects were the most confusing because of looping and key-value pairs.
// 3. Arrays store lists of data, objects store labeled data (key-value).
// 4. Arrays are used for lists like scores, objects are used for structured data like a user profile.