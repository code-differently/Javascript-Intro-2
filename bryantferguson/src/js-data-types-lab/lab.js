// Practice 1 
let fullName = "Bryant Ferguson"
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Ferguson"));
let firstName = fullName.split(" ");
console.log(firstName[0]);

// Practice 1 Mini Challenge
function helloName(name) {
    return "Hello, " + name + "!";
}

helloName("Bryant");

// .length gets the length of string or an array
// .includes() returns a boolean on whether a certain value is in a string
// .slice() returns a portion of a string based on the substring range

// Practice 2

let num1 = 10;
let num2 = 3;

console.log(num1 + num2);  // addition
console.log(num1 - num2 ); // subtraction
console.log(num1 * num2);  // multiplication
console.log(num1 / num2 ); // division
console.log(num1 % num2);  // remainder
let num = Math.floor(Math.random() * 10) + 1;
console.log("random num " + num);

function evenOrOdd(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

console.log(evenOrOdd(11));

//% is the remainder after the dvision
//math random returns a random number based on the name
//math floor rounds a number down to the nearest whole number

// Practice 3 
let students = ["A", "B", "C", "D"];
for(let i=0; i<students.length; i++){
    console.log(students[i]);
}

students.push("F");
students.pop();
console.log(students.length);

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumArray([10, 1, 1, 1])); 

//you access an array element by using []
//.push() adds an item to the end of the list
//we use loops with arrays to traverse

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);

car.year = 2024;
console.log(car.year);

car.color = "yellow";
console.log(car.color);

for (let key in car) {
  console.log(key + ": " + car[key]);
}

function describePerson(person) {
  return person.name + " is " + person.age + " years old";
}

let person = {
  name: "Bryant",
  age: 23
};
console.log(describePerson(person));
describePerson(person)

//keys are used to access values in objects, values are the data that corespend to unique key
// you access object data using keys
// you would use an object over an array when you have multiple fields since arrays only hold one type

let student = {
  name: "Bryant",
  scores: [100, 90, 80, 69]
};

// Final Challenge
function calculateAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

function getFinalGrades(average) {
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

let average = calculateAverage(student.scores);
let grade = getFinalGrades(average);

console.log("Name: " + student.name);
console.log("Average: " + average);
console.log("Grade: " + grade);

//Strings are the easiest data type for me
//Arrays are the most confusing for me
//Arrays are collection of values of the same data type, objects have multiple different fields that can be different data types
// You would use arrays when grouping data of the same type, you would objects when grouping data with mutiple different fields that need to be grouped together
