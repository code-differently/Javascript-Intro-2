// JavaScript Data Types Lab
// Name: Derwin Bell

// Strings

let FullName = "Derwin Bell";
console.log("Length of name: ", FullName.length);
console.log("To upper case: ", FullName.toUpperCase());
console.log("To lower case: ", FullName.toLowerCase());
console.log("Includes 'Bell': ", FullName.includes("Bell"));
console.log("First name: ", FullName.slice(0, 6));
console.log("Last name: ", FullName.slice(7));
//Mini Challenge:

function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}

console.log(greet(FullName));

//  Numbers


let num1 = 10;
let num2 = 3;

console.log("Add:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log("Rounded:", Math.round(4.6));
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

// Mini Challenge
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(20));

// arrays
let students = ["Alvin", "Bertha", "Cole", "Derwin"];


for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

students.push("Evelyn");
console.log("After push:", students);

students.pop();
console.log("After pop:", students);

students.unshift("Frank");
console.log("After unshift:", students);

students.shift();
console.log("After shift:", students);

// Mini Challenge
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Objects
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

 
console.log(car.brand);
console.log(car.model);
console.log(car.year);

 
car.year = 2024;

 
car.color = "Black";

 
for (let key in car) {
  console.log(key, car[key]);
}

// Mini Challenge
function describePerson(person) {
  return person.name + " is " + person.age + " years old";
}

let person = {
  name: "Derwin",
  age: 20
};

console.log(describePerson(person));

// Final Challenge
let student = {
  name: "Derwin",
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

//Reflection
// The easiest data type for me was strings because the methods are simple to use.
// The most confusing was objects because accessing and looping through them takes more practice.
// Arrays store lists of data, while objects store structured data with labels.
// Arrays are useful for collections, while objects are useful for representing real-world entities.