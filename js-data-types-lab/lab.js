//Part 1 Strings 

let fullName = "Mesheik Brown";
let firstName = "Mesheik";
let lastName = "Brown";

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Brown"));
console.log(fullName.slice(0, 7));


//1.What does .length do?
//AW: .length returns the number of characters in a string, including spaces and punctuation. 

//2.What does .includes() return?
//AW: .includes() returns a boolean value indicating whether a string contains another string.

//3.What does .slice() do?
//AW: .slice() extracts a section of a string and returns it as a new string.


//Part 2 Numbers

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(Math.round(3.14));
console.log(Math.floor(Math.random() * 10) + 1); //Random number between 1 and 10

//1.What does % do?
//AW: % returns the remainder of a division operation.

//2.What does Math.random() return?
//AW: Math.random() returns a random decimal number between 0 (inclusive) and 1 (exclusive).

//3.When would you use Math.floor()?
//AW: Math.floor() is used to round a decimal number down to the nearest integer.

//Part 3 Arrays

let students = ["A", "B", "C", "D"];

// Print all students
for (let i = 0; i < students.length; i++) {
  console.log("Student:", students[i]);
}

// Add a new student
students.push("E");
console.log("After push:", students);

// Remove the last student
students.pop();
console.log("After pop:", students);

// Print total number of students
console.log("Total students:", students.length);

// 1. How do you access an array element?
// AW: You access an array element by using its index, like array[0].

// 2. What does .push() do?
// AW: .push() adds a new item to the end of an array.

// 3. Why do we use loops with arrays?
// AW: We use loops with arrays so we can go through each item one by one.

//Part 4 Objects

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Print each property
console.log("Brand:", car.brand);
console.log("Model:", car.model);
console.log("Year:", car.year);

// Update the year
car.year = 2024;

// Add a new property (color)
car.color = "Black";

console.log("Updated car object:", car);

// Loop through the object
for (let key in car) {
  console.log(key + ":", car[key]);
}

//Final Challenge 

let student = {
  name: "John",
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

let averageScore = calculateAverage(student.scores);
let grade = getGrade(averageScore);

console.log("Name:", student.name);
console.log("Average:", averageScore);
console.log("Grade:", grade);

// Which data type felt easiest?
// AW: Strings felt easiest because the methods were simple to understand and test.

// Which one was most confusing?
// AW: Objects were the most confusing at first because I had to remember keys and how to loop through them.

// How do arrays and objects differ?
// AW: Arrays store lists of values in order, while objects store data with named properties.

// When would you use each in real applications?
// AW: I would use arrays for lists like scores, products, or messages. I would use objects for storing details about one thing, like a user, car, or student profile.