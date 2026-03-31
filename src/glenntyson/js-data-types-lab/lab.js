function greet(name) {
  return "Hello, " + name.toUpperCase() + "!";
}
console.log(greet("Glenn"));

// What does .length do?
// It returns the number of characters in a string (or number of elements in an array).

// What does .includes() return?
// It returns true or false depending on whether a value exists inside a string or array.

// What does .slice() do?
// It extracts part of a string or array and returns a new one without changing the original.


function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7)); 

// What does % do?
// The % operator (modulus) returns the remainder after division.

// What does Math.random() return?
// It returns a random decimal number between 0 (inclusive) and 1 (exclusive).

// When would you use Math.floor()?
// You use Math.floor() to round a number DOWN to the nearest whole number.
// Commonly used with Math.random() to get random integers.

function sumArray(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}
console.log(sumArray([1, 2, 3, 4])); 

// How do you access an array element?
// You use the index with square brackets.


// What does .push() do?
// It adds a new element to the END of an array.

// Why do we use loops with arrays?
// To go through each element one by one so we can read, modify, or process all values.


function describePerson(person) {
  return `${person.name} is ${person.age} years old`;
}

// What is a key-value pair?
// It is a way to store data in objects where:
// "key" = the name (like a label)
// "value" = the data stored
// "name" is the key, "John" is the value

// How do you access object data?
// You can use dot notation or bracket notation:
// person.name
// person["name"]

// When would you use an object instead of an array?
// When you want to store related data with labels (keys),
// instead of just a list of values.



// Step 1: Object
const student = {
  name: "John",
  scores: [80, 90, 75, 100]
};

// Step 2: Function to calculate average
function calculateAverage(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}

// Step 3: Function to determine grade
function getGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}

// Step 4: Run program
const average = calculateAverage(student.scores);
const grade = getGrade(average);

// Step 5: Output
console.log(`Name: ${student.name}`);
console.log(`Average: ${Math.round(average)}`);
console.log(`Grade: ${grade}`);


// Reflection

// Which data type felt easiest?
// Strings were easiest because they are just text.

// Which one was most confusing?
// Objects were a little confusing because of keys and how to access them.

// How do arrays and objects differ?
// Arrays are lists.
// Objects store data with labels (keys).

// When would you use each in real applications?
// Arrays for lists (like scores).
// Objects for details (like a person).