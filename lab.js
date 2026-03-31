// ============================================================
//   JavaScript Data Types Lab — lab.js
//   Covers: Strings, Numbers, Arrays, Objects + Final Challenge
// ============================================================


// ============================================================
// PART 1: STRINGS
// ============================================================

console.log("==============================");
console.log("  PART 1: STRINGS");
console.log("==============================");

// --- Practice 1: String Manipulation ---

let fullName = "Marcus Brown";

// Task 1 – Print the length of the string
console.log("Full name:", fullName);
console.log("Length of fullName:", fullName.length);
// .length returns the total number of characters in the string (including spaces)

// Task 2 – Convert to uppercase
console.log("Uppercase:", fullName.toUpperCase());

// Task 3 – Check if it includes the last name
console.log("Includes 'Brown'?", fullName.includes("Brown"));
// .includes() returns true or false depending on whether the substring is found

// Task 4 – Slice out the first name only
//           "Marcus Brown" → first name starts at index 0, ends before the space at index 6
let firstName = fullName.slice(0, 6);
console.log("First name only:", firstName);
// .slice(start, end) extracts characters from index start up to (but not including) index end

// --- Mini Challenge 1 ---
// Function that accepts a name and returns "Hello, NAME!" (name in all caps)

function greetUser(name) {
  return "Hello, " + name.toUpperCase() + "!";
}

console.log("\n-- Mini Challenge 1 --");
console.log(greetUser("Marcus"));
console.log(greetUser("coreye"));

// --- Check for Understanding (Part 1) ---
/*
  1. What does .length do?
     → .length returns the number of characters in a string (or the number of
       elements in an array). It counts every character, including spaces.

  2. What does .includes() return?
     → .includes() returns a boolean: true if the given substring exists anywhere
       inside the string, false if it does not.

  3. What does .slice() do?
     → .slice(start, end) extracts and returns a portion of the string starting
       at the 'start' index and ending just before the 'end' index, without
       modifying the original string.
*/


// ============================================================
// PART 2: NUMBERS
// ============================================================

console.log("\n==============================");
console.log("  PART 2: NUMBERS");
console.log("==============================");

// --- Practice 2: Number Logic ---

let num1 = 10;
let num2 = 3;

// Task 1 – Basic arithmetic
console.log("num1 =", num1, "| num2 =", num2);
console.log("Addition      (num1 + num2):", num1 + num2);
console.log("Subtraction   (num1 - num2):", num1 - num2);
console.log("Multiplication(num1 * num2):", num1 * num2);
console.log("Division      (num1 / num2):", num1 / num2);

// Task 2 – Find the remainder (modulo)
console.log("Remainder     (num1 % num2):", num1 % num2);
// % (modulo) returns what is left over after integer division — e.g., 10 / 3 = 3 remainder 1

// Task 3 – Round a decimal number
let decimal = 7.46;
console.log("\nDecimal value:", decimal);
console.log("Math.round(7.46):", Math.round(decimal));  // rounds to nearest integer → 7
console.log("Math.floor(7.46):", Math.floor(decimal));  // always rounds DOWN          → 7
console.log("Math.ceil(7.46) :", Math.ceil(decimal));   // always rounds UP            → 8

// Task 4 – Generate a random number between 1 and 10 (inclusive)
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1–10):", randomNum);
// Math.random() produces a float in [0, 1).
// Multiply by 10 → [0, 10), floor → [0, 9], then +1 → [1, 10].

// --- Mini Challenge 2 ---
// Function that accepts a number and returns "Even" or "Odd"

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("\n-- Mini Challenge 2 --");
console.log("4 is:", evenOrOdd(4));
console.log("7 is:", evenOrOdd(7));
console.log("0 is:", evenOrOdd(0));
console.log("13 is:", evenOrOdd(13));

// --- Check for Understanding (Part 2) ---
/*
  1. What does % do?
     → The modulo operator (%) returns the remainder of a division. For example,
       10 % 3 = 1 because 10 divided by 3 is 3 with a remainder of 1. It is
       commonly used to test whether a number is even (n % 2 === 0) or to
       cycle through a range of values.

  2. What does Math.random() return?
     → Math.random() returns a pseudo-random floating-point number between 0
       (inclusive) and 1 (exclusive). To get a range such as 1–10, you scale
       and shift the result: Math.floor(Math.random() * 10) + 1.

  3. When would you use Math.floor()?
     → Math.floor() is used when you need the largest integer less than or equal
       to a given number — i.e., when you always want to round down. It is
       particularly useful when generating random integers from Math.random(),
       working with array indices, or converting floats to whole units (e.g.,
       converting seconds to whole minutes without going over).
*/


// ============================================================
// PART 3: ARRAYS
// ============================================================

console.log("\n==============================");
console.log("  PART 3: ARRAYS");
console.log("==============================");

// --- Practice 3: Array Work ---

let students = ["Alice", "Bob", "Charlie", "Diana"];

// Task 1 – Print all students
console.log("Initial students array:", students);
console.log("Printing each student with a loop:");
for (let i = 0; i < students.length; i++) {
  console.log("  Student[" + i + "]:", students[i]);
}

// Task 2 – Add a new student
students.push("Edward");
console.log("\nAfter push('Edward'):", students);

// Task 3 – Remove the last student
let removed = students.pop();
console.log("Removed student (pop):", removed);
console.log("After pop:", students);

// Task 4 – Print total number of students
console.log("Total number of students:", students.length);

// --- Mini Challenge 3 ---
// Function that accepts an array of numbers and returns their sum

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log("\n-- Mini Challenge 3 --");
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Sum of [10, 20, 30]:", sumArray([10, 20, 30]));
console.log("Sum of [7, 14, 3, 9]:", sumArray([7, 14, 3, 9]));

// --- Check for Understanding (Part 3) ---
/*
  1. How do you access an array element?
     → By its zero-based index inside square brackets: arrayName[index].
       For example, students[0] returns the first element, students[2] returns
       the third, and so on.

  2. What does .push() do?
     → .push(value) adds one or more elements to the END of an array and returns
       the new length of the array. The original array is modified in place.

  3. Why do we use loops with arrays?
     → Because arrays can hold many elements. A loop lets us visit each element
       automatically without having to write separate console.log or processing
       statements for every index. It also makes the code work correctly
       regardless of how many items are in the array.
*/


// ============================================================
// PART 4: OBJECTS
// ============================================================

console.log("\n==============================");
console.log("  PART 4: OBJECTS");
console.log("==============================");

// --- Practice 4: Object Work ---

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Task 1 – Print each property
console.log("Car object:", car);
console.log("Brand:", car.brand);
console.log("Model:", car.model);
console.log("Year:", car.year);

// Task 2 – Update the year
car.year = 2024;
console.log("\nUpdated year to 2024:", car.year);

// Task 3 – Add a new property (color)
car.color = "Midnight Blue";
console.log("Added color property:", car.color);
console.log("Car after updates:", car);

// Task 4 – Loop through the object
console.log("\nLooping through car object:");
for (let key in car) {
  console.log("  " + key + ":", car[key]);
}

// --- Mini Challenge 4 ---
// Function that accepts a person object and returns "Name is AGE years old"

function describePersona(person) {
  return person.name + " is " + person.age + " years old.";
}

console.log("\n-- Mini Challenge 4 --");
let person1 = { name: "Coreye", age: 25 };
let person2 = { name: "Jordan", age: 30 };
console.log(describePersona(person1));
console.log(describePersona(person2));

// --- Check for Understanding (Part 4) ---
/*
  1. What is a key-value pair?
     → A key-value pair is the fundamental unit of an object. The key is a
       string label (like "name" or "age") and the value is the data associated
       with that label (like "Marcus" or 25). Together they look like:
       { key: value }.

  2. How do you access object data?
     → Two ways:
       • Dot notation:    object.propertyName   (e.g., car.brand)
       • Bracket notation: object["propertyName"] (e.g., car["brand"])
       Bracket notation is required when the key is stored in a variable or
       contains special characters.

  3. When would you use an object instead of an array?
     → Use an object when data has named properties and the order doesn't
       matter — for example, a user profile with name, email, and age.
       Use an array when you have an ordered list of similar items — for
       example, a list of student names or scores — especially when you need
       to iterate over them by index.
*/


// ============================================================
// FINAL CHALLENGE: STUDENT PROFILE SYSTEM
// ============================================================

console.log("\n==============================");
console.log("  FINAL CHALLENGE");
console.log("  Student Profile System");
console.log("==============================");

// --- Step 1: Student Objects ---

let student1 = {
  name: "John",
  scores: [80, 90, 75, 100]
};

let student2 = {
  name: "Aaliyah",
  scores: [55, 60, 72, 58]
};

let student3 = {
  name: "Marcus",
  scores: [95, 88, 92, 97]
};

// --- Step 2: Helper function — calculate average score ---
// Accepts an array of scores, loops through them, and returns the average.

function calculateAverage(scoresArray) {
  let total = 0;
  for (let i = 0; i < scoresArray.length; i++) {
    total += scoresArray[i];   // accumulate each score
  }
  return Math.round(total / scoresArray.length); // round to whole number
}

// --- Step 3: Helper function — determine letter grade from average ---

function getGrade(average) {
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

// --- Step 4: Main function — print student report ---
// Accepts a student object, calculates average and grade, and prints a report.

function printStudentReport(student) {
  let average = calculateAverage(student.scores);
  let grade   = getGrade(average);

  console.log("------------------------------");
  console.log("Name:    " + student.name);
  console.log("Scores:  " + student.scores.join(", "));
  console.log("Average: " + average);
  console.log("Grade:   " + grade);
}

// --- Run Reports ---

printStudentReport(student1);
printStudentReport(student2);
printStudentReport(student3);

console.log("------------------------------");


// ============================================================
// REFLECTION
// ============================================================

/*
  1. Which data type felt easiest?
     → Strings felt the easiest. The built-in methods (.length, .toUpperCase,
       .includes, .slice) have very readable names that make it obvious what
       they do. Experimenting with them required very little setup — just
       declare a string variable and call a method.

  2. Which one was most confusing?
     → Objects were the most confusing at first. Unlike arrays where every
       item is accessed by a simple numeric index, objects use named keys,
       and there are two different syntaxes for accessing them (dot notation
       vs. bracket notation). Looping over an object with "for...in" also
       felt less intuitive than looping over an array with a standard for loop.

  3. How do arrays and objects differ?
     → Arrays are ordered, indexed collections of values where each item is
       accessed by its numeric position (index 0, 1, 2, …). They are best
       for storing lists of similar things.
       Objects are unordered collections of key-value pairs where each value
       is accessed by a descriptive string key (e.g., person.name). They are
       best for storing a single entity that has multiple named attributes.

  4. When would you use each in real applications?
     → Arrays:
         • A shopping cart (list of product objects)
         • A leaderboard (list of scores)
         • A to-do list (list of task strings)
         • Any time you need to iterate over many similar items

       Objects:
         • A user profile (name, email, age, address)
         • A product listing (title, price, description, inStock)
         • Configuration settings (apiUrl, timeout, retries)
         • Any time you need to group related but differently-named pieces
           of data about one "thing"

       In real applications you almost always use them together:
       an array of objects is the standard way to represent a collection
       of records — for example, an array of student objects where each
       object has a name and a scores array (exactly what we built in
       the Final Challenge!).
*/
