console.log("PART 3: FUNCTIONS\n");

//  WHAT IS A FUNCTION?
// ---------------------
// A function is a reusable block of code that performs a specific task
// Think of it as a "machine" that:
// - Can take inputs (parameters)
// - Processes them
// - Returns an output (or performs an action)

console.log("1. DECLARING A FUNCTION")
// 1. Declaring the function multiply
function multiplyConsole(a, b) {
    // Function body
    console.log("This is a log at the moment of calling the function multiply");
};

function multiply(a, b) {
    console.log(`This is multiplication function for: ${a} and ${b}`, a*b);
};

multiply(4, 5);

console.log("\nFUNCTION RETURN")
function multiplyReturn(x, y, z) {
    console.log("Code before return is executed as normal");

    // Returning the result of the multiplication
    return x * y * z;

    console.log("This log will never execute, it is after the return");
};

multiplyReturn(2, 3, 4);

// There can be more than one return

console.log("\nFUNCTION with more than one RETURN")
function checkAge() {
    let age = 10;
    if (age >= 18) {
        return console.log("Permission granted");
    } else {
        return console.log("Ask your parents");
    }
};

checkAge();

console.log("\n2. FUNCTION Expression")

functionExpression = function(a, b) {
    sumNumber = a + b;
    console.log("This is from function expression: ", sumNumber)
};

functionExpression(10,40);


console.log("3. ARROW FUNCTIONS")

const arrowFunctiom = (a, b) => a + b

console.log(arrowFunctiom(10, 20));

console.log("4. Arrow function with multiple lines")

const arrowFunctionMulti = (a, b) => {
    const sum = a + b;
    return sum;
}

console.log(arrowFunctionMulti(20, 20));

console.log("5. Callback functions")

function callbackFunction(a,b) {
    return a + b;
}

function functionToCallBack(a, b, callbackFunction) {
    return callbackFunction(a, b);
}

let resultCallBack = functionToCallBack(10, 20, callbackFunction);
console.log(resultCallBack);

console.log("6. Function to convert Fahrenheit to Celsius")
const convertToCelsius = function (temp) {
    return (temp - 32) * 5 / 9;
}

console.log(convertToCelsius(32));

console.log("7. Polindromes")
const polindromes = function (str) {
    let strReverse = str.split('').reverse().join('');
    console.log(strReverse)

    if (str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

/* ------ Exercise 1 - leapYears
Create a function that determines whether or not a given year is a leap year.
Leap years are determined by the following rules:

Leap years are years


divisible by four (like 1984 and 2004) or  divisible by 400 and  100


However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing)
Hints
use an if statement and && to make sure all the conditions are met properly*/




const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(year, ' is a leap year')
    } else{
        console.log(year, ' is not a leap year')
    }

};

leapYears(2678) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false


/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number )
is the sum of the two preceding numbers. In this exercise,
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */


console.log("Fibonacci");

for (let num = 1; num<=5; num++) {
    console.log(num);
}
