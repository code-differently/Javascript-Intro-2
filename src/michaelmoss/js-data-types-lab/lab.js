// JavaScript Data Types Lab

// =====================
// Part 1: Strings
// =====================

let fullName = "Michael Moss";

console.log("--- Part 1: Strings ---");
console.log("Full name:", fullName);
console.log("Length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Includes last name 'Moss':", fullName.includes("Moss"));

let firstNameOnly = fullName.slice(0, fullName.indexOf(" "));
console.log("First name only:", firstNameOnly);

function greetingInCaps(name) {
	return `Hello, ${name.toUpperCase()}!`;
}

console.log("Mini challenge greeting:", greetingInCaps("Coreye"));

// Check for Understanding (Part 1)
// 1. .length returns the number of characters in a string.
// 2. .includes() returns true or false depending on whether text is found.
// 3. .slice() returns a selected part of a string (from start index to end index).

// =====================
// Part 2: Numbers
// =====================

let num1 = 10;
let num2 = 3;

console.log("\n--- Part 2: Numbers ---");
console.log("num1 + num2 =", num1 + num2);
console.log("num1 - num2 =", num1 - num2);
console.log("num1 * num2 =", num1 * num2);
console.log("num1 / num2 =", num1 / num2);
console.log("num1 % num2 =", num1 % num2);

let decimalNumber = 7.6;
console.log("Rounded decimal (7.6):", Math.round(decimalNumber));

let randomOneToTen = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1-10):", randomOneToTen);

function evenOrOdd(value) {
	if (value % 2 === 0) {
		return "Even";
	}
	return "Odd";
}

console.log("Mini challenge even/odd for 10:", evenOrOdd(10));
console.log("Mini challenge even/odd for 3:", evenOrOdd(3));

// Check for Understanding (Part 2)
// 1. % gives the remainder after division.
// 2. Math.random() returns a decimal number from 0 (inclusive) to 1 (exclusive).
// 3. Math.floor() is useful when you need to round down to the nearest whole number.

// =====================
// Part 3: Arrays
// =====================

let students = ["A", "B", "C", "D"];

console.log("\n--- Part 3: Arrays ---");
console.log("Students (initial):");
for (let i = 0; i < students.length; i++) {
	console.log(students[i]);
}

students.push("E");
console.log("After push('E'):", students);

students.pop();
console.log("After pop():", students);

console.log("Total students:", students.length);

function sumArray(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

console.log("Mini challenge sum [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));

// Check for Understanding (Part 3)
// 1. Access an array element by index, for example students[0].
// 2. .push() adds a new item to the end of an array.
// 3. Loops are used with arrays to process each element one by one.

// =====================
// Part 4: Objects
// =====================

let car = {
	brand: "Toyota",
	model: "Camry",
	year: 2020,
};

console.log("\n--- Part 4: Objects ---");
console.log("Car object (initial):", car);

console.log("Print each property directly:");
console.log("brand:", car.brand);
console.log("model:", car.model);
console.log("year:", car.year);

car.year = 2024;
car.color = "Blue";

console.log("Car object (updated):", car);
console.log("Loop through car object:");
for (let key in car) {
	console.log(key + ":", car[key]);
}

function describePerson(personObj) {
	return `${personObj.name} is ${personObj.age} years old`;
}

console.log(
	"Mini challenge person sentence:",
	describePerson({ name: "Coreye", age: 25 })
);

// Check for Understanding (Part 4)
// 1. A key-value pair is a property name (key) and its associated data (value).
// 2. You can access object data with dot notation (obj.key) or bracket notation (obj["key"]).
// 3. Use an object when you need named properties about one entity.

// =====================
// Final Challenge
// =====================

let studentProfile = {
	name: "John",
	scores: [80, 90, 75, 100],
};

function calculateAverage(scores) {
	let total = 0;
	for (let i = 0; i < scores.length; i++) {
		total += scores[i];
	}
	return total / scores.length;
}

function determineGrade(average) {
	if (average >= 90) return "A";
	if (average >= 80) return "B";
	if (average >= 70) return "C";
	if (average >= 60) return "D";
	return "F";
}

let averageScore = calculateAverage(studentProfile.scores);
let letterGrade = determineGrade(averageScore);

console.log("\n--- Final Challenge: Student Profile System ---");
console.log("Scores:");
for (let i = 0; i < studentProfile.scores.length; i++) {
	console.log(`Score ${i + 1}:`, studentProfile.scores[i]);
}
console.log("Name:", studentProfile.name);
console.log("Average:", Math.round(averageScore));
console.log("Grade:", letterGrade);

// =====================
// Reflection (Required)
// =====================

// 1. Which data type felt easiest?
// Strings felt easiest because the methods are straightforward and readable.

// 2. Which one was most confusing?
// numbers can be more confusing at first because of drawig the interface between math and programming, but it becomes easier with practice and understanding of the methods available in JavaScript.

// 3. How do arrays and objects differ?
// Arrays store ordered lists by numeric index, while objects store named properties by keys.

// 4. When would you use each in real applications?
// Use arrays for collections like lists of users or scores in a sports game, and objects for structured records like a user profile for client banking info or product details for product inventory.
