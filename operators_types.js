console.log("PART 1: OPERATORS\n")

// Task 11: Add multiplication, division, and subtraction operations.
// Display the results in two ways: using concatenation and using template strings.

let inputX = 2;
let inputY = 3;


let mult = inputX * inputY;
let div =  inputY / inputX;
let sub = inputY - inputX;

console.log("mult: " + mult);
console.log("div: " + div);
console.log("sub: " + sub);

console.log(`mult: ${mult}`);
console.log(`div: ${div}`);
console.log(`sub: ${sub}`);


// Task 13: Using typeof Operator
// 1. Declare variables to store the following values: a number, a string, a boolean, an undefined value, and a null value.
// 2. Use the typeof operator to check the data type of each variable.
// 3. Print the data types to the console.

let myNum = 10;
let myString = "10";
let myBoolean = true;
let myNewUndefined;
let myNull = null;

console.log(typeof myNum, typeof myString, typeof myBoolean, typeof myUndefined, typeof myNull)


// Task 14: Arithmetic Operations
// 1. Declare two variables with numeric values.
// 2. Perform addition, subtraction, multiplication, division, and modulus operations on them.
// 3. Print the results to the console.

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


// Task 15: Using Logical AND (&&)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the && operator to combine the variables and store the result in a new variable.
// 3. Print the result.


// // Task 16: Using Logical OR (||)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the || operator to combine the variables and store the result in a new variable.
// 3. Print the result.


let boolOne = true;
let boolTwo = false;

let boolThree = boolOne || boolTwo;
console.log(boolThree);

// Task 17: Logical NOT (!)
// 1. Declare a boolean variable and assign it any value (true or false).
// 2. Use the ! operator to invert the value and store it in a new variable.
// 3. Print both the original and inverted values.

let boolFour = !boolOne;
console.log(boolFour);


// Task 18: Using typeof with Expressions
// 1. Perform any arithmetic operation (e.g., addition, subtraction).
// 2. Use the typeof operator to find the type of the result.
// 3. Print the result and its type.

inputX = 20;
inputY = 30;

let result = inputY * inputX
console.log(typeof result);

// Task 19: Combining Logical and Arithmetic Operators
// 1. Declare three variables: two numbers and one boolean.
// 2. Use arithmetic operators to create an expression (e.g., add the two numbers).
// 3. Use a logical operator to combine the result with the boolean value.
// 4. Print the final result.


let firstNum = 10;
let secondNum = 20;
let boolFive = false;

let myResult = firstNum + secondNum;

let myResultBool = myResult && boolFive;
console.log(myResultBool);


// Task 20: Exploring typeof with Strings and Numbers
// 1. Declare a variable with a string that looks like a number (e.g., "42").
// 2. Check the type of the variable.
// 3. Perform an arithmetic operation on the string and print the result and its new type.

let likeNumber = "10";
console.log(typeof likeNumber);
likeNumber++
console.log(typeof likeNumber, likeNumber)


//Примитивные типы
let number = 1;
let string = 'Hello';
let boolean = true;
//let null = null;
//let undefined = undefined;
let symbol = Symbol();

console.log('String length', string.length)


//Ссылочные типы - объект. Ньюанс с const и созданием нового значения через переменную

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


console.log(typeof myObject2);
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof symbol);
console.log(typeof null);
console.log(typeof myUndefined);
