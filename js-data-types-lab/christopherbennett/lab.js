/*
# Part 1: Strings

## What is a String?

A string is text wrapped in quotes.

```javascript
let name = "Coreye";
``` {data-source-line="60"}

---

## 🔑 Common String Methods

```javascript
let message = "hello world";

message.length        // length of string
message.toUpperCase() // HELLO WORLD
message.toLowerCase() // hello world
message.includes("world") // true
message.slice(0, 5)   // hello
``` {data-source-line="74"}

---

## ✅ Practice 1: String Manipulation

Create a variable:

```javascript
let fullName = "your name here";
``` {data-source-line="84"}

### Tasks:

* Print the length of the string
* Convert it to uppercase
* Check if it includes your last name
* Slice out your first name only

---
*/

let fullName = "coreye ross";
console.log(fullName.length);

fullName = fullName.toUpperCase();
console.log(fullName);

let nameSplit = fullName.split(" ");


console.log("Has last name: " + nameSplit.length > 1);

console.log("First Name only: " + nameSplit[0]);

/*
1. What does `.length` do?

Returns length of the string.


2. What does `.includes()` return?

Checks if the substring is included, returns true or false.

3. What does `.slice()` do?

Slices string at starting index and ending index.

## Mini Challenge

Create a function that:

* Accepts a name
* Returns: `"Hello, NAME!"` (all caps)
*/

function sayHello(name) {
    name = name.toUpperCase();
    return "Hello, " + name;
}

console.log("Mini Challenge: String, " + sayHello("Jayden"));


/*

---


## Practice 2: Number Logic

Create variables:

```javascript
let num1 = 10;
let num2 = 3;
```

### Tasks:

* Add, subtract, multiply, divide
* Find remainder
* Round a decimal number
* Generate a random number between 1–10

---
*/

let num1 = 10;
let num2 = 3;

num1++;
console.log("Num1 + 1: " +num1);
num1--;
console.log("Num1 - 1: " + num1)
num2 *= num1;
console.log("Num2 * Num1: =" + num2);
num1 /= num2;
console.log("Num1 / Num2: " + num1);

console.log("Final Result Num1: " + num1);
console.log("Final Result Num2: " + num2);


console.log("Final Result Num1 (rounded to nearest integer): " + Math.round(num1));


let randomNum = Math.floor((Math.random() * 10) + 1);
console.log("Random Number: " + randomNum);


function checkOddEven(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}

console.log("Mini Challenge: Math, " + checkOddEven(22));


/*

## Check for Understanding

1. What does `%` do?
Modulus is used to find the remainder after a division operation between two numbers.

2. What does `Math.random()` return?

A random number between 0 (inclusive) and 1 (exclusive)

3. When would you use `Math.floor()`?

I would use Math.floor to round to the nearest whole number, such as when using Math.random

---

*/



/*


---

## Practice 3: Array Work

Create an array:

```javascript
let students = ["A", "B", "C", "D"];
``` {data-source-line="236"}

### Tasks:

* Print all students
* Add a new student
* Remove the last student
* Print total number of students

---
*/

//1.
let students = ["A", "B", "C", "D"];

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//2.
students.push("E");


//3.
students.pop();


//4.
console.log(students.length);


function calculateSum(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {

        sum += nums[i];
    }
    return sum;
}

console.log("Mini Challenge: Arrays, " + calculateSum([1,2,3,4]));



/*

1. How do you access an array element?

//You access an array element via 
// 0-based indexing. 
// (from 0 to arr.length - 1)

2. What does `.push()` do?

push adds a new value to the end of the array

3. Why do we use loops with arrays?

we use loops in order to index each value of the array.
It's used to prevent writing repeat code from 0 to arr.length - 1

*/


/*

### Tasks:

* Print each property
* Update the year
* Add a new property (color)
* Loop through the object

---

*/

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};


//1.
for (let property in car) {
  console.log(property);
}

//2.
car.year = 2026;

//3.
console.log("Looping through object");
for (let property in car) {
  console.log(property, car[property]);
}

let person = {
  name: "Bruh",
  age: 25
}


function findAge(person) {
    return person.name + " is " + person.age + " years old";
}

console.log("Mini Challenge: Objects, " + findAge(person));


/*

---

## Check for Understanding

1. What is a key-value pair?

A type of datastructure that's value can only be accesed through a key.
Grants O(1) access.

2. How do you access object data?

By providing the specific property field with the dot operator.

3. When would you use an object instead of an array?

You would use an object if you want to store data in fields, rather than a simple collection of items.
(The difference between a bird object and a list of bird objects for example)

---

*/


function calculateAvg(student) {
    let sum = 0;
    for(let i = 0; i < student.scores.length; i++) {

        sum += student.scores[i];
    }

    const avg = sum / student.scores.length;
    return avg;
}



let student = {
  name: "Bob Builder",
  scores: [80, 90, 75, 100]
}

console.log("Student:");
console.log(student.name);

const avg = calculateAvg(student);

if(avg >= 90) {
    console.log("A");
}
else if(avg >= 80) {
    console.log("B");
}
else if(avg >= 70) {
    console.log("C");
}
else if(avg >= 60) {
    console.log("D");
}
else {
    console.log("F");
}


/*

---

# Reflection (REQUIRED)

At the bottom of your file, answer:

1. Which data type felt easiest?

Arrays felt the easiest as I'm the most familiar with them.


2. Which one was most confusing?

Objects were the most confusing as I've rarely looped thorugh all of the objects properties.


3. How do arrays and objects differ?

Arrays are based on a collection of a specific data type, an object is more like the description of a data type.


4. When would you use each in real applications?

I would make a bird object with wings and a bear, and two legs to represent a bird.
Then If I needed a lot of birds, there would be an array of bird objects.


---

*/





