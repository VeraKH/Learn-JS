console.log("PART 1: ARITHMETIC OPERATORS");

// Task 1: Add multiplication, division, and subtraction operations.
// Display the results in two ways: using concatenation and using template strings.
console.log("\nTask 1 - Add multiplication, division, and subtraction operations.: ");

let inputX = 2;
let inputY = 3;

let mult = inputX * inputY;
let div =  inputY / inputX;
let sub = inputY - inputX;

console.log("multiplication: " + mult);
console.log("division: " + div);
console.log("substraction: " + sub);

console.log(`multiplication: ${mult}`);
console.log(`division: ${div}`);
console.log(`substraction: ${sub}`);


// Task 2: Arithmetic Operations
// 1. Declare two variables with numeric values.
// 2. Perform addition, subtraction, multiplication, division, and modulus operations on them.
// 3. Print the results to the console.
console.log("\nTask 2 - Arithmetic Operations: ");

inputX = 5;
inputY = 10;
let add;
let modulus;

mult = inputX * inputY;
div =  inputY / inputX;
sub = inputY - inputX;
add = inputY + inputX;
modulus = inputY % inputX;

console.log("mult: " + mult);
console.log("div: " + div);
console.log("sub: " + sub);
console.log("add: " + add);
console.log("modulus: " + modulus);

console.log("\nPART 2: LOGICAL OPERATORS\n");

// Task 1: Using Logical AND (&&)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the && operator to combine the variables and store the result in a new variable.
// 3. Print the result.

let boolOne = true;
let boolTwo = false;

let newBool = boolOne && boolTwo;
console.log("\nTask 1 - comparing Bool values: ", newBool);

// // Task 16: Using Logical OR (||)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the || operator to combine the variables and store the result in a new variable.
// 3. Print the result.



let boolThree = boolOne || boolTwo;
console.log("\nTask 1 - comparing Bool values: ", boolThree);

// Task 17: Logical NOT (!)
// 1. Declare a boolean variable and assign it any value (true or false).
// 2. Use the ! operator to invert the value and store it in a new variable.
// 3. Print both the original and inverted values.

let boolFour = !boolOne;
console.log(boolFour);

console.log("PART 2: PRIMITIVE TYPES");
let number = 1;
let string = 'Hello';
let boolean = true;
//let null = null;
//let undefined = undefined;
let symbol = Symbol();

console.log('String length', string.length)

console.log("PART 3: TYPEOF OPERATOR");
// Task 1: Using typeof Operator
// 1. Declare variables to store the following values: a number, a string, a boolean, an undefined value, and a null value.
// 2. Use the typeof operator to check the data type of each variable.
// 3. Print the data types to the console.

let myNum = 10;
let myString = "10";
let myBoolean = true;
let myNewUndefined;
let myNull = null;
console.log("Task 1: Using typeof Operator: ", typeof myNum, typeof myString, typeof myBoolean, typeof myUndefined, typeof myNull);


// Task 2: Using typeof with Expressions
// 1. Perform any arithmetic operation (e.g., addition, subtraction).
// 2. Use the typeof operator to find the type of the result.
// 3. Print the result and its type.

inputX = 20;
inputY = 30;

let result = inputY * inputX
console.log("Task 2 - Using typeof with Expressions:", typeof result);

// Task 3: Combining Logical and Arithmetic Operators
// 1. Declare three variables: two numbers and one boolean.
// 2. Use arithmetic operators to create an expression (e.g., add the two numbers).
// 3. Use a logical operator to combine the result with the boolean value.
// 4. Print the final result.

let firstNum = 10;
let secondNum = 20;
let boolFive = false;

let myResult = firstNum + secondNum;

let myResultBool = myResult && boolFive;
console.log("Task 3 - Combining Logical and Arithmetic Operators:", myResultBool);

console.log("Task 4: Exploring typeof with Strings and Numbers");
// 1. Declare a variable with a string that looks like a number (e.g., "42").
// 2. Check the type of the variable.
// 3. Perform an arithmetic operation on the string and print the result and its new type.

let StringlikeNumber = "10";
console.log("String like Number is type of: ", typeof StringlikeNumber);
StringlikeNumber++
console.log(typeof StringlikeNumber, StringlikeNumber)


console.log("Task 2: Investigate logical operators with different data types")
// 0 -> FALSE, Null -> Falsy, '' -> Falsy, [] -> True
console.log(false && "apple"); // It returns the first falsy value. If both operands are truthy, it returns the last value.
console.log(true || 0); // What happens when OR is used between boolean and number?
console.log('hello' && 10); // Returns first FALSE or LAST true
console.log(null || 7); //  It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log('' || 7); // It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log([] || 7); // It returns the first truthy value. If all operands are falsy, it returns the last operand.
console.log(null == undefined); // When using the == (loose equality) operator in JavaScript, type coercion occurs. This means JavaScript tries to convert the values to the same type before comparing them.
console.log(null === undefined);

console.log("PART 3: REFERENCE TYPES");
//Ссылочные типы (объекты, массивы, функции) хранят ссылку на место в памяти.
//Когда делаем const obj2 = obj1;, копируется не сам объект, а ссылка на него.


const myObject = {
    a: 10,
    b: true
};

const myObject2 = myObject;

console.log(myObject.a);
myObject.a = 12;
console.log(myObject2.a);
myObject.c = 'string value';
console.log(myObject);
console.log(myObject2);


console.log("PART 4: RESOLVING EXPRESSIONS");

console.log(typeof (3 * '5')); // What happens when a string is multiplied by a number?
console.log(typeof ('5' - 2)); // What happens when a string is subtracted by a number?
console.log(typeof ("5" ** 2)); // What happens when a string is exponentiated?
console.log(typeof (5 + 3 * 2)); // What happens when multiplication is done before addition?

console.log("Once again about TYPEOF OPERATORS");

console.log(typeof myObject2);
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof symbol);
console.log(typeof null);
console.log(typeof myUndefined);