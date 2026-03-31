// Part 1: String Methods

let fullName = "Amani Drummond";


console.log(fullName.length);


console.log(fullName.toUpperCase());


console.log(fullName.includes("Drummond")); 


console.log(fullName.slice(0, 4)); 

// Mini Challenge:   
function greet(name) {
    return "Hello, " + name.toUpperCase() + "!";
}

console.log(greet("Amani")); 

// .length → Returns the number of elements in something.

// .includes() → Checks if something contains a value. Returns true or false.

// .slice() → Returns a portion (piece) of a string or array.
