
//Practie 1: String Maniupulation

let fullName = "Henrrietta Riverson"

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Riverson"));
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

//Mini Challenge
function greet(name){
    return "Hello, " + name.toUpperCase() + "!";
}

console.log(greet("Henrrietta"));

/* Check for Understanding 
1. What does .length do?
    - It returns the number of characters in a string, including the space.
2. What does .includes return?
    - It returns true if the specified string is found within the original string, and false if it is not.
3. What does .slice do?
    - It extracts a section of a string and returns it as a new string without modifying the original string.
*/

//Practice 2: Number Logic 
 let num1 = 10;
 let num2 = 3;

 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 * num2);
 console.log(num1 / num2);
 console.log(num1 % num2);
 console.log(Math.round(num1 / num2));
 console.log(Math.random(1,10));

 // Mini Challenge 
 function isEven(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
 }

 console.log(isEven(10));

 //Check for Understanding 
 /* 
 1. What does % do?
    - It returns the remainder of a division operation.
2. What does Math.random() return?
    - It generates a random decimal number between 0 (inclusive) and 1 (exclusive).
3. When would you use Math.floor()?
    - You would use Math.floor() when you want to round a number down to the nearest whole number. 
 */

//Part 3: Arrays 
let students = ["A", "B", "C", "D"];

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

students.push("E");
console.log(students);
students.pop()
console.log(students);
console.log(students.length);

//Mini Challenge
function arrSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(arrSum([1,2,3,4,5]));

// Check for Understanding
/*
1. How do you access an array element?
    - You can access an array element by using the square bracket notation with the index of the element you want to access. 
2. What does .push() do?
    - It adds a new element to the end of an array.
3. Why do we use loops with arrays?
    - We use loops with arrays to iterate through each element in the array and perform a specific action on each element.
*/

//Part 4: Objects 
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
car.year = 2021;
console.log(car.year);
car.color = "red";

for (let key in car) {
  console.log(key + ": " + car[key]);
}

//Mini Challenge 
function describePerson(person) {
    return person.name + " is " + person.age + " years old";
}

let person1 = { name: "Henrrietta", age: 20 };
console.log(describePerson(person1));

//Check for Understanding
/*
1. What is a key-value pair?
    - A key-value pair is a set of two linked data items: a key, which is a unique identifier, and a value, which is the data associated with that key.
2. How do you access an object data?
    - You can access an object data using dot notation (object.key) or bracket notation (object["key"]).
3. When would you use an object instead of an array?
    - You would use an object instead of an array when you want to store data in 
    a structured way with named properties, rather than just a list of values. 
*/


//Final Challenge: Combine Everything 
let student = {
    name: "Henrrietta",
    scores: [60, 86, 75, 100]
};

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];  
    }
    return total / scores.length; 
}

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

// Calculate average and grade
let average = calculateAverage(student.scores);
let grade = getGrade(average);

// Print results
console.log("Name:", student.name);
console.log("Average:", average);
console.log("Grade:", grade);

