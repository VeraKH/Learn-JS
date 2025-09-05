console.log("PART 3: FUNCTIONS\n");

//  WHAT IS A FUNCTION?
// ---------------------
// A function is a reusable block of code that performs a specific task
// Think of it as a "machine" that:
// - Can take inputs (parameters)
// - Processes them
// - Returns an output (or performs an action)

console.log("1. DECLARING AND USING A FUNCTION")

console.log("Task 1: multiply function with console inside")// 1. Declaring the function
function multiplyConsole(a, b) {
    console.log("This is a log at the moment of calling the function multiply"); // Function body
};

console.log("Task 2: multiply function with usage")// 1. Declaring the function

function multiply(a, b) {
    console.log(`This is multiplication function for: ${a} and ${b}`, a*b);
};

multiply(4, 5);


console.log("\nFUNCTION RETURN")

console.log("Task 1: multiply function with return")/
function multiplyReturn(x, y, z) {
    console.log("Code before return is executed as normal");

    // Returning the result of the multiplication
    return x * y * z;

    console.log("This log will never execute, it is after the return");
};

//multiplyReturn(2, 3, 4);

// There can be more than one return

console.log("\nTask 2: FUNCTION with more than one RETURN")
function checkAge() {
    let age = 10;
    if (age >= 18) {
        return console.log("Permission granted");
    } else {
        return console.log("Ask your parents");
    }
};

checkAge();

console.log("Task 3. Function to convert Fahrenheit to Celsius")
const convertToCelsius = function (temp) {
    return (temp - 32) * 5 / 9;
}

console.log(convertToCelsius(32));

console.log("\n2. FUNCTION Expression")
//функция создаётся как выражение и может быть присвоена переменной,
//передана как аргумент или возвращена другой функцией.

console.log("Task 1: Sum of two numbers in a function expression")
functionExpression = function(a, b) {
    sumNumber = a + b;
    console.log("This is from function expression: ", sumNumber)
};

functionExpression(10,40);

console.log("Task 2: leap years")
/* ------ Exercise 1 - leapYears
Create a function that determines whether or not a given year is a leap year.
Leap years are determined by the following rules:
Leap years are years divisible by four (like 1984 and 2004) or  divisible by 400 and  100
However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing)
Hints: use an if statement and && to make sure all the conditions are met properly*/

const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(year, ' is a leap year')
    } else{
        console.log(year, ' is not a leap year')
    }

};

leapYears(2678) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false

console.log("Task 3. Polindromes")
const polindromes = function (str) {
    let strReverse = str.split('').reverse().join('');
    console.log(strReverse)

    if (str === str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}



console.log("Task 4: Fibonacci");
/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:
A series of numbers in which each number ( Fibonacci number )
is the sum of the two preceding numbers. In this exercise,
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */

function myFibonacci(n){
    let a = 0;
    let b = 1;

    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);

    for (let i = 3; i<=n; i++){
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
myFibonacci(6);


console.log("3. ARROW FUNCTIONS")
//Arrow Function — это сокращённый синтаксис для написания функций в JavaScript.
// Создаются с помощью стрелки => и обычно используются там, где нужна короткая функция, например, в колбэках.

const arrowFunctiom = (a, b) => a + b

console.log(arrowFunctiom(10, 20));

console.log("4. Arrow function with multiple lines")

const arrowFunctionMulti = (a, b) => {
    const sum = a + b;
    return sum;
}

console.log(arrowFunctionMulti(20, 20));

console.log("5. CALLBACK FUNCTIONS")
//Callback-функции — это функции, которые передаются как аргументы в другие функции и вызываются там, когда это нужно.
//Они часто используются для обработки событий, работы с асинхронным кодом и для того, чтобы сделать код более гибким.
console.log("Task 1: Callback function Syntax and Usage")

function callbackFunction(a,b) {
    return a + b;
}

function functionToCallBack(a, b, callbackFunction) {
    return callbackFunction(a, b);
}

let resultCallBack = functionToCallBack(10, 20, callbackFunction);
console.log(resultCallBack);

console.log("Task 2: Callback function Syntax and Usage")

let myCallback = function (){
    let greeting = "Hello";
    return greeting;
};

let myFunc = function (callback, name){
    console.log(`${callback()}, ${name}!`);
};

myFunc(myCallback, "Anna");

console.log("Task 3: Callback Annonimus function")

function newFunc(callback, name){
    return `${callback()}, ${name}!`
};

console.log(newFunc(function(){return "Hello"}, "Anna"));


console.log("Task 4: Callback Annonimus function + arrow");

function newFunc2(callback, name){
    return `${callback()}, ${name}!`
};

console.log(newFunc2(function(){return "Hello"}, "Anna"));

console.log(newFunc2(() => "Hello", "Anna"));

console.log("Task 5: Callback function + array of objects");
const users = [
    { id: 1, name: "Anna", age: 25, isActive: true, salary: 2500 },
    { id: 2, name: "John", age: 32, isActive: false, salary: 4000 },
    { id: 3, name: "Maria", age: 19, isActive: true, salary: 1800 },
    { id: 4, name: "David", age: 45, isActive: true, salary: 5200 },
    { id: 5, name: "Sophia", age: 28, isActive: false, salary: 3100 }
];

//Фильтрует пользователей по условию из callback
function filterUsers(users, callback, param) {
    const result = [];
    for (let user = 0; user < users.length; user++) {
        if (callback(users[user], param)) {
            result.push(users[user]);
        }
    }
    return result;
}

console.log("Task 6: Callback function call + params");
function filterByAgeParams(user, minAge){
    return user.age >= minAge;
}
const usersOver25Params = filterUsers(users, filterByAgeParams, 25)
console.log(usersOver25Params);

console.log("Task 7: Callback function call + arrow functions");
const usersOver25Arrow = filterUsers(users, user => user.age >= 25); ;
console.log(usersOver25Arrow);



console.log("TOPIC: Scopes")
const a = 5;
let b = 2;
//
// function MyFun(){
//     let b = 10
//     a = true
//     console.log(b)
// }
//
// MyFun()
// console.log(a)
// console.log(b)

//function MyFunNew(){
  //  function innerFn(){
   //     console.log(a)
    //}
    //let b = 10
    //a = true
    //console.log(a)
    //innerFn()
//}

//MyFunNew()