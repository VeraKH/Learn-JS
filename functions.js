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