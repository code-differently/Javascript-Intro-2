// Part 1: String Methods

let fullName = "Amani Drummond";


console.log(fullName.length);


console.log(fullName.toUpperCase());


console.log(fullName.includes("Drummond")); 


console.log(fullName.slice(0, 4)); 

// Mini Challenge:   
function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}

console.log(greet("Amani")); 

// .length → Returns the number of elements in something.

// .includes() → Checks if something contains a value. Returns true or false.

// .slice() → Returns a portion (piece) of a string or array



//Part 2: Numbers

//  Create Variables
let num1 = 10;
let num2 = 3;

// Math operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

// Round a decimal number
let roundedNumber = Math.round(4.6);

// Random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Print results
console.log("Addition:", sum);
console.log("Subtraction:", difference);
console.log("Multiplication:", product);
console.log("Division:", quotient);
console.log("Remainder:", remainder);
console.log("Rounded number:", roundedNumber);
console.log("Random number (1-10):", randomNumber);

// Mini Challenge
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Test the function
console.log(checkEvenOrOdd(4)); // Even
console.log(checkEvenOrOdd(7)); // Odd



// Check for Understanding

//1. What does % do?
//% gives the remainder of a division operation. For example, 10 % 3 would return 1 because when you divide 10 by 3, the quotient is 3 with a remainder of 1.

//2. What does Math.random() return?
//Math.random()` returns a random decimal number between 0 (inclusive) and 1 (exclusive).

//3. When would you use Math.floor()?
//Math.floor() is used to round a decimal number down to the nearest integer.


//Part 3- ARRAYS

let students = ["Ben", "Adam", "Gary", "Lindsey"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
//====== OR =====
//for (let student of students) {
//  console.log(student);
//}


students.push("Jeff");
console.log("After adding:", students);

students.pop();
console.log("After removing:", students);

console.log("Total students:", students.length);

//Mini Challenge
function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

let nums = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(nums));

//Do you understand???

//Question 1...How do you access an array element?
//Answer 1...using the index..ex: students[0]

//Question 2...What does .push() do?
//Answer 2...it adds a new item to the end of your array

//Question 3...Why do we use loops with arrays?
//Answer 3...an array can hold multiple values and loops allows you to go through each item



//Part 4: Objects

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
}
console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020

car.year = 2024;
console.log("Updated year: ", car.year);

car.color = "black";
console.log("Color added: ", car.color);

for (let key in car) {
    console.log(key, car[key]);
}

function describePerson(person) {
    return person.name + " is " + person.age + " years old.";
}

let bobby = {
    name: "Bobby",
    age: 24,
};
console.log(describePerson(bobby));

/*
1. A key-value pair is a label (key) paired with its data (value). like name: "Bobby"
2. You access object data using dot notation (person.name) or bracket notation (person["name"])
3. Use an object when data has named properties, use an array when data is a simple list
*/

//Final Challenge: Student Grade Calculator

const student = {
  name: "Amani",
  scores: [80, 90, 75, 100]
};


function calculateAverage(scores) {
  let total = 0;

  
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}


function getGrade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}


const average = calculateAverage(student.scores);
const grade = getGrade(average);


console.log("Name:", student.name);
console.log("Average:", Math.round(average));
console.log("Grade:", grade);

//Reflection

//Which data type felt easiest?
//strings seems to be the easiet

//Which one was most confusing?
//for now its arrays

//How do arrays and objects differ?
//arrays are when the order of items matter
//objects are when you want label data for access by name

//When would you use each in real applications?
//arrays can be used for students and their grades
//objects can be used for a single thing and named properties






