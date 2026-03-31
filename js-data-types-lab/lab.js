
// Part 1: strings


let fullName = "James Barclay";

console.log("Length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Includes Barclay:", fullName.includes("Barclay"));
console.log("First Name:", fullName.slice(0, 5));

// mini challenge
function greet(name) {
  return "HELLO, " + name.toUpperCase() + "!";
}

console.log(greet("James Barclay"));

// Check for Understanding:
// 1. .length basically returns number of characters in a string
// 2. .includes() just returns true or false
// 3. .slice() just extracts part of a string


// Part 2: numbers


let num1 = 10;
let num2 = 3;

console.log("Add:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log("Rounded:", Math.round(3.7));
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

// mini challenge
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(7));

// Check for Understanding:
// 1. % gives remainder
// 2. Math.random() returns a number between 0 and 1
// 3. Math.floor() rounds down to the nearest



// Part 3: arrays

let students = ["A", "B", "C", "D"];

// print all students
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// add new student
students.push("E");

// remove last student
students.pop();

// total number
console.log("Total Students:", students.length);


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("Sum:", sumArray([1, 2, 3, 4]));

// Check for Understanding:
// 1. Use index like arr[0]
// 2. .push() adds to end
// 3. Loops help go through each item



// Part 4: objects


let car = {
  brand: "Ford",
  model: "Taurus",
  year: 2000
};

// print properties
console.log(car.brand);
console.log(car.model);
console.log(car.year);

// update year
car.year = 2000;

// add color
car.color = "Silver";

// looping through the object
for (let key in car) {
  console.log(key, car[key]);
}


function describePerson(person) {
  return person.name + " is " + person.age + " years old";
}

console.log(describePerson({ name: "James Barclay", age: 34 }));

//check understanding
// 1. Key-value is basically property: value
// 2. Use dot/bracket notation
// 3. Use objects for structured data




let student = {
  name: "James Barclay",
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
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}

let average = calculateAverage(student.scores);
let grade = getGrade(average);

console.log("Name:", student.name);
console.log("Average:", average);
console.log("Grade:", grade);



// Reflection

// 1. Easiest: Strings because methods are simple and clear
// 2. Most confusing: Objects loops (for...in)
// 3. Arrays store lists, objects store labeled data
// 4. Arrays = lists (scores), Objects = structured data (user profiles)