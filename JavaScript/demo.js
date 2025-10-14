// demo.js
// JavaScript Demo File - Functions Example

// 1️⃣ Simple Function
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

// Call the function
greetUser("Acer User");

// 2️⃣ Function with Return Value
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(10, 25);
console.log("The sum is:", sum);

// 3️⃣ Function Expression
const multiply = function (x, y) {
    return x * y;
};
console.log("Multiplication result:", multiply(5, 3));

// 4️⃣ Arrow Function
const square = (num) => num * num;
console.log("Square of 6:", square(6));

// 5️⃣ Function inside another Function (Nested)
function outerFunction() {
    console.log("Inside outer function");

    function innerFunction() {
        console.log("Inside inner function");
    }

    innerFunction(); // Call inner function
}

outerFunction();
