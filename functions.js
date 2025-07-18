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
