// --- Conditional Statements ---

// Task 3: Determine the discount on an item based on price. Create your rules for discoun.
const price = 120; // Replace with different values to test
let discount = 0;

if (price === 120){
    discount = 25
} else if (price >= 80 && price < 120){
    discount = 15
} else if (price >= 40 && price < 80){
    discount = 5
} else {
    discount = 0
}

console.log(`The discount is: $${discount}`);

// Task 4: Determine if a number is divisible by both 3 and 5
const num1 = 20; // Replace with any number

if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log(`${num1} is divisible by 3 and 5`);
} else {
    console.log(`${num1} is not divisible by 3 and 5`);
}

// TERNARY OPERATOR

// Example 4: Simplifying IF...ELSE using a ternary operator
const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); //

// Example 5: Finding the bigger number
const numNew = 5;
const numNew1 = 10;
const bigNumberNew = numNew > numNew1 ? numNew : numNew1;
console.log(bigNumberNew); // Output: 10


// Task 5: Write a program to check the grade: A(form 90 to 100)
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 20; // Replace with different scores

const grade = score >= 90 && score <= 100 ? "Grade: A" :
              score >= 80 && score < 90 ? "Grade: B" :
              score >= 70 && score < 80 ? "Grade: С" :
              score >= 60 && score < 70 ? "Grade: D" : "F"

console.log(grade);

// SWITCH

// Example 6: Using SWITCH for multiple conditions
let cost4;
const subscription4 = "free";

switch (subscription4) { // "premium ===
    case "free": // "premium" ===  "free"
        cost4 = 0;
        break;
    case "pro": // "premium" === "pro"
        cost4 = 100;
        break;
    case "premium":  // "premium" === "premium" true
        cost4 = 500;
        break;
    default:
        console.log("Invalid subscription type");
}

console.log(cost4); //

// // Task 6: Determine the Day of the Week
// Example number of the day
const dayNumber = 3; // Replace this with any number from 1(Monday) to 7(Sunday)
// Using a switch statement to determine the day
let day;

switch(dayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tusday";
        break
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday" ;
        break;
    case 7:
        day = "Sunday";
        break;
    default: "Ivalid day number"
}

console.log(day)


const result = divide(10, 0);
if (result === null) {
    console.log("Division failed.");
} else {
    console.log("Result: " + result);
}

// TRY...CATCH

// Example 11: Handling errors in code
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error: " + error.message);
        return null; //
    }
}

divide(10, 0);

//try: содержит код, где может произойти ошибка. Если ошибка происходит, выполнение немедленно переходит в catch.
// В catch мы получаем объект ошибки (часто называют error или err) и можем с ним работать.
function myParseInt(input) {
    try {
        const number = parseInt(input)
        if (Number.isNaN(number)){
            throw new Error("Invalid input");
        } return console.log(number)
    } catch(error){
      console.error("Input is not a number: " + error.message);
      return null;
    } finally {
        console.log("Parsing attempt finished.");
    }
}

myParseInt("Vera");
myParseInt("11");


// Task 1: Write a program that checks if a number is even or odd.
const number = 3; // Replace with any number

if (number % 2 === 0 ){
    console.log(`Number ${number} is an even number`)
} else {
    console.log(`Number ${number} is am odd number`)
}

let resultTren = number % 2 === 0 ? `Number ${number} is an even number` : `Number ${number} is am odd number`
    console.log(resultTren);

// Task 2: Write a program that calculates the cost of a movie ticket based on age.
const personAge = 80; // Replace with any age
let ticketCost;
// 1. create veriables fir result
// 2. Conditional statement
// child(0-16), students (17-25), adult (25-55), seniors(55-100)



if (personAge < 16) {
        ticketCost = 5;
}else if(personAge >= 17 && personAge < 25 ){
    ticketCost = 6;
}else if(personAge >= 25 && personAge < 55){
    ticketCost = 7;
}else {
    ticketCost = 4;
}

console.log(`The Ticket cost is ${ticketCost}`)

// Task 3: Write a program that finds the largest of three numbers.
const numA = 51;
const numB = 54;
const numC = 42;

if (numA > numB && numA > numC){
    console.log(`${numA} is the biggest number`)
}else if(numB > numA && numB > numC){
    console.log(`${numB} is the biggest number`)
}else {
    console.log(`${numC} is the biggest number`)
}

// Task 3: Write a program that finds the largest of three numbers.

let largest;
if (numA > numB){
    if (numA > numC) {
        largest = numA;
    } else {
        largest = numC;
    }
} else {
    if (numB > numC){
        largest = numB;
    } else {
        largest = numC;
    }
}
console.log(largest);

// Task 4: Write a program that determines if a number is positive, negative, or zero.
const numD = -5; // Replace with any number

if (numD < 0){
    console.log(`Number ${numD} is negative`)
}else if(numD === 0){
    console.log(`Number ${numD} is Zero`)
}else if(numD > 0){
    console.log(`Number ${numD} is positive`)
}else{
    console.log(`Number ${numD} not a number`)
}

