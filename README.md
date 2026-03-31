# 🚀 JavaScript Data Types Lab: Strings, Numbers, Arrays & Objects

## 📌 Overview
In this lab, you will explore how JavaScript stores and manipulates data using:

- Strings (text)
- Numbers (math)
- Arrays (lists)
- Objects (structured data)

This is a **guided walkthrough lab**, meaning:
- You will read → try → build → reflect
- Each section builds on the previous one
- You will combine everything at the end

---

## Learning Objectives

By the end of this lab, you will be able to:

- Manipulate strings using built-in methods
- Perform mathematical operations with numbers
- Store and loop through data using arrays
- Create and access objects with key-value pairs
- Combine all concepts into real-world scenarios

---

## Setup Instructions

```bash
mkdir js-data-types-lab
cd js-data-types-lab
touch lab.js
code .
node lab.js
````

---

## Project Structure

```
js-data-types-lab/
│
└── lab.js
```

---

# Part 1: Strings

## What is a String?

A string is text wrapped in quotes.

```javascript
let name = "Coreye";
```

---

## 🔑 Common String Methods

```javascript
let message = "hello world";

message.length        // length of string
message.toUpperCase() // HELLO WORLD
message.toLowerCase() // hello world
message.includes("world") // true
message.slice(0, 5)   // hello
```

---

## ✅ Practice 1: String Manipulation

Create a variable:

```javascript
let fullName = "your name here";
```

### Tasks:

* Print the length of the string
* Convert it to uppercase
* Check if it includes your last name
* Slice out your first name only

---

## Mini Challenge

Create a function that:

* Accepts a name
* Returns: `"Hello, NAME!"` (all caps)

---

## Check for Understanding (In comments)

1. What does `.length` do?
2. What does `.includes()` return?
3. What does `.slice()` do?

---

# Part 2: Numbers

## What is a Number?

A number represents numeric values.

```javascript
let age = 25;
let price = 19.99;
```

---

## Math Operations

```javascript
let a = 10;
let b = 3;

a + b  // addition
a - b  // subtraction
a * b  // multiplication
a / b  // division
a % b  // remainder
```

---

## Math Methods

```javascript
Math.round(4.6) // 5
Math.floor(4.9) // 4
Math.ceil(4.1)  // 5
Math.random()   // random number 0–1
```

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

## Mini Challenge

Create a function that:

* Accepts a number
* Returns:

  * "Even" if even
  * "Odd" if odd

---

## Check for Understanding

1. What does `%` do?
2. What does `Math.random()` return?
3. When would you use `Math.floor()`?

---

# Part 3: Arrays

## What is an Array?

An array is a list of values.

```javascript
let fruits = ["apple", "banana", "orange"];
```

---

## Accessing Elements

```javascript
fruits[0] // apple
fruits[1] // banana
```

---

## Common Methods

```javascript
fruits.push("grape")   // add to end
fruits.pop()           // remove last
fruits.length          // number of items
```

---

## Looping Through Arrays

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## Practice 3: Array Work

Create an array:

```javascript
let students = ["A", "B", "C", "D"];
```

### Tasks:

* Print all students
* Add a new student
* Remove the last student
* Print total number of students

---

## Mini Challenge

Create a function that:

* Accepts an array of numbers
* Returns the sum of all numbers

---

## Check for Understanding

1. How do you access an array element?
2. What does `.push()` do?
3. Why do we use loops with arrays?

---

# Part 4: Objects

## What is an Object?

An object stores data as key-value pairs.

```javascript
let person = {
  name: "Coreye",
  age: 25,
  isStudent: true
};
```

---

## Accessing Values

```javascript
person.name
person["age"]
```

---

## Updating Values

```javascript
person.age = 26;
```

---

## Looping Through Objects

```javascript
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## Practice 4: Object Work

Create an object:

```javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
```

### Tasks:

* Print each property
* Update the year
* Add a new property (color)
* Loop through the object

---

## Mini Challenge

Create a function that:

* Accepts a person object
* Returns a sentence like:
  `"Name is AGE years old"`

---

## Check for Understanding

1. What is a key-value pair?
2. How do you access object data?
3. When would you use an object instead of an array?

---

# Final Challenge: Combine Everything

## Scenario: Student Profile System

Create:

### Step 1: Object

A student object:

```javascript
{
  name: "Student Name",
  scores: [80, 90, 75, 100]
}
```

---

### Step 2: Requirements

Build a program that:

* Loops through scores
* Calculates average
* Determines grade:

  * A, B, C, D, F
* Prints:

```
Name: John
Average: 86
Grade: B
```

---

### Constraints

* Must use:

  * arrays (scores)
  * object (student)
  * loop (iterate scores)
  * function (calculate average)
  * conditionals (grade logic)

---

# 📦 Deliverables

* ✅ Completed `lab.js`
* ✅ All 4 sections completed
* ✅ Mini challenges completed
* ✅ Final challenge completed
* ✅ Reflection questions

---

# 🧪 Rubric (100 Points)

| Category        | Points |
| --------------- | ------ |
| Strings         | 15 pts |
| Numbers         | 15 pts |
| Arrays          | 20 pts |
| Objects         | 20 pts |
| Final Challenge | 20 pts |
| Code Quality    | 5 pts  |
| Reflection      | 5 pts  |

---

# Reflection (REQUIRED)

At the bottom of your file, answer:

1. Which data type felt easiest?
2. Which one was most confusing?
3. How do arrays and objects differ?
4. When would you use each in real applications?

---

# Tips

* Test everything with `console.log()`
* Break problems into steps
* Don’t try to do everything at once
* If stuck → simplify

---


