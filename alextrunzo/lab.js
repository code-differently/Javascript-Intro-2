let fullName = "Alex Trunzo";

fullName = fullName.toUpperCase();

lastName = fullName.slice(5, 11);

console.log(fullName);

firstName = fullName.slice(0, 4);

console.log(firstName);

console.log(firstName.includes(lastName));



function capFirstName(fullName){
    return "Hello " + fullName.toUpperCase;
}


//1. What does `.length` do?
// `.length` returns the number of characters in a string.

//2. What does `.includes()` return?
// `.includes()` returns a boolean indicating whether a substring is found within a string.

//3. What does `.slice()` do?
// `.slice()` extracts a portion of a string and returns it as a new string.




let num1=10;
let num2 = 3;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

let remainder = num1 % num2;

console.log("Remainder: " + remainder);

let roundedNum = Math.round(3.7);

console.log("Rounded Number: " + roundedNum);

let random = Math.random();

console.log("Random Number: " + random);



function evenOrOdd(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(10)); // Output: Even
console.log(evenOrOdd(7));  // Output: Odd

//1. What does `%` do?
// `%` returns the remainder of a division operation.

//2. What does `Math.random()` return?
// `Math.random()` returns a random decimal number between 0 (inclusive) and 1 (exclusive).

//3. When would you use `Math.floor()`?
// `Math.floor()` is used to round a decimal number down to the nearest integer.


let students = ["A", "B", "C", "D"];

for (let student in students){
    console.log(students[student]);
}

students.push("E");

console.log(students);

students.pop();

console.log(students);

console.log(students.length);



function sumNums(nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

console.log(sumNums([1, 2, 3, 4, 5])); // Output: 15

//1. How do you access an array element?
// You can access an array element using its index, for example: `array[index]` where `index` starts at 0 for the first element.
//2. What does `.push()` do?
// `.push()` adds one or more elements to the end of an array.
//3. Why do we use loops with arrays?
// We use loops with arrays to iterate through all the elements and perform operations on them.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);

car.year = 2021;

console.log(car);

car.color="red";

console.log(car);

for (let key in car){
    console.log(key + ": " + car[key]);
}


function tellAge(person){
    return person.name + " is " + person.age + " years old.";
}

//1. What is a key-value pair?
// A key-value pair is a way to store data in an object, where the key is a string and the value can be any data type.

//2. How do you access object data?
// You can access object data using dot notation (e.g., `object.key`) or bracket notation (e.g., `object["key"]`).

//3. When would you use an object instead of an array?
// You would use an object instead of an array when you want to store data with named properties rather than indexed elements.



let student = {
    name: "Alex",
    age: 23,
    scores: [100, 100, 0]
}

function averageScore(student){
    let sum = 0;
    for (let score in student.scores){
        sum += student.scores[score];
    }
    return sum / student.scores.length;
}

function grader(student){
    
    let grade;
    let average = averageScore(student);
    if (average >= 90){
        grade = "A";
    } else if (average >= 80){
         "B";
    } else if (average >= 70){
        grade = "C";
    } else if (average >= 60){
        grade = "D";
    } else {
        grade = "F";
    }
    console.log("Name: " + student.name);
    console.log("Average Score: " + average);
    console.log("Grade: " + grade);
}

grader(student);


//1. Which data type felt easiest?
//The numbers felt easiest to work with because they have straightforward operations and functions in JavaScript.
//2. Which one was most confusing?
//The objects were the most confusing because they have a more complex structure and require understanding of key-value pairs and how to access data.
//3. How do arrays and objects differ?
//Arrays are ordered collections of elements that can be accessed by their index, while objects are collections of key-value pairs where the keys are strings and the values can be any data type. Arrays are typically used for lists of items, while objects are used for more complex data structures with named properties.
//4. When would you use each in real applications?
//You would use arrays when you need to store and manipulate a list of items, such as a list of users or products. You would use objects when you need to represent more complex data with multiple properties, such as a user profile with name, age, and email.


