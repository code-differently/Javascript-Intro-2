let fullName = "Fred Ainsworth";

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Ainsworth"));
console.log(fullName.slice(0, 4));

function greet(fullName) {
  let NAME = fullName.toUpperCase();
  console.log("Hello, " + NAME + "!");
}

//The .length property returns the number of characters in a string, including spaces and punctuation. 
// The .includes() method checks if a string contains a specified substring and returns true or false.
// The .slice() method extracts a section of a string and returns it as a new string.

//Practice 2: Numbers
let num1 = 10;
let num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(Math.round(3.7));
console.log(Math.random()*10)+1;

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//% is the modulus operator, which returns the remainder of a division operation.
//Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). By multiplying it by 10 and adding 1, we can get a random number between 1 and 10.
//Math.floor() rounds a number down to the nearest whole number

let students = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

students.push("Eve");
students.pop("David");
console.log(students.length);

function arraySum(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i];
  }
  return sum;
}
// Access arrays by their index or using a loop to iterate through the elements.
// The .push() method adds an element to the end of an array
// We use loops with arrays to iterate through the elements. 

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

car.year = 2021;
car.color = "red";
console.log(car);

for (let key in car) {
  console.log(key + ": " + car[key]);
}

function describePerson(person) {
  return person.name + " is " + person.age + " years old";
}
// A key-value pair is a fundamental unit in objects, where each piece of data is stored as a property name (key) and its associated value.
//You access object data using dot notation (e.g., object.key) or bracket notation (e.g., object['key']).
//Use an object instead of an array when you need to store structured data with named properties (e.g., a person's details like name and age), rather than an ordered list of similar items.

let student= {
    name: "John",
    scores: [80,90,75,100],
    };

let sum = 0;
for (let i = 0; i < student.scores.length; i++) {
  sum += student.scores[i];
}
let average = Math.round(sum / student.scores.length);

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

console.log("Name: " + student.name);
console.log("Average: " + average);
console.log("Grade: " + grade);

//Strings felt easiest because they are straightforward to manipulate with methods like length, toUpperCase, includes, and slice.
//Some of the math operations were a bit tricky at first, like the random number generation.
//Objects were the most confusing at first, as they involve key-value pairs and require understanding properties and methods.
//Arrays are ordered collections of items accessed by index, while objects are unordered collections of key-value pairs accessed by keys.
//Use arrays for lists of similar items, like a list of student names. Use objects for structured data with named properties, like representing a car with make, model, and year.   