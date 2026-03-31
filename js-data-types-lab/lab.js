// Practice 1
let fullName = "Jayden Andrews"

console.log("Name length: ", fullName.length);

console.log("Uppercase: ", fullName.toUpperCase());

if (fullName.includes("Andrews")) {
    console.log("The name includes 'Andrews'");
} else {
    console.log("The name does not include 'Andrews'");
}

console.log("First name: ", fullName.slice(0, 6));

// Mini Challenge
function helloName(name) {
    return "Hello, " + name.toUpperCase() + "!";
}

/*
Check for Understanding

1. What does .length do?
The method .length returns the number of characters in a string, including spaces and punctuation.

2. What does .includes() return?
The method .includes() returns a boolean value indicating whether a string contains another string.

3. What does .slice() do?
The method .slice() creates a newstring using indexes to specify the start and end of the portion of the string to be extracted.
*/

// Practice 2
let num1 = 10;
let num2 = 3;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);
console.log("Remainder: ", num1 % num2);
console.log("Rounding: ", Math.round(num1 / num2));
console.log("Random number between 1 and 10: ", Math.floor(Math.random() * 10) + 1);

// Mini Challenge
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return num + " is even.";
    } else {
        return num + " is odd.";
    }
}

/*
Check for Understanding
1. What does % do?
The modulus operator returns the remainder of a division operation between two numbers.

2. What does Math.random() return?
The Math.random() function returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

3. When would you use Math.floor()?
You would use Math.floor() to round a number down to the nearest integer.
*/

// Practice 3
let students = ["A", "B", "C", "D"];

console.log("All students: ", students);
students.push("E");
console.log("After adding a student: ", students);
students.pop();
console.log("After removing the last student: ", students);
console.log("Number of students: ", students.length);

// Mini Challenge
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/*
Check for Understanding
1. How do you access an array element?
You can access an array element using its index, which starts at 0.
2. What does .push() do?
The .push() method adds one or more elements to the end of an array and returns the new length of the array.
3. Why do we use loops with arrays?
We use loops with arrays to iterate through all the elements and perform operations on them.
*/

// Practice 4
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

console.log("Car brand: ", car.brand);
console.log("Car model: ", car.model);
console.log("Car year: ", car.year);

car.year = 2025;
console.log("Updated car year: ", car.year);

car.color = "red";
console.log("Car color: ", car.color);

for (let key in car) {
    console.log(key + ": " + car[key]);
}

// Mini Challenge
function describePerson(person) {
   console.log(person.name + "is " + person.age + " years old");
}

/*
Check for Understanding
1. What is a key-value pair?
A key-value pair is a set of two linked data items: a key, which is a unique identifier, and a value, which is the data associated with that key. In an object, keys are used to access their corresponding values.

2. How do you access object data?
You can access object data using the dot operator or brackets.

3. When would you use an object instead of an array?
You would use an object instead of an array when you need to store and retrieve data using named keys rather than numeric indices.
*/

// Final Challenge
let student = {
  name: "John Doe",
  scores: [80, 90, 75, 100]
}

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function calculateGrade(student) {
    let grade = "N"
    let average = calculateAverage(student.scores);

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
}

calculateGrade(student);

// Reflection
/*
1. Which data type felt easiest?
I thought that strings were the easiest data type to work with. They are similar to how they work in Java and Python, so I was already familiar with many of the methods and operations.

2. Which one was most confusing?
I found objects to be the most confusing at first, especially when it came to accessing and modifying their properties. The syntax for working with objects was a bit different from what I was used to in other languages.

3. What is the difference between arrays and objects?
Arrays are ordered collections of values indexed by numbers, while objects are collections of key-value pairs indexed by strings.

4. When would you use each in real applications?
You would use arrays when you need to store and access a list of items in a specific order, and objects when you need to store and access data using descriptive keys.
*/

