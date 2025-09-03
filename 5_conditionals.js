console.log("TOPIC 1: Conditional Statements")

console.log("Task 1: Determine if a number is divisible by both 3 and 5")

const num1 = 20; // Replace with any number

if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log(`${num1} is divisible by 3 and 5`);
} else {
    console.log(`${num1} is not divisible by 3 and 5`);
}

console.log("Task 2: Write a program that checks if a number is even or odd.")
const number = 3; // Replace with any number

if (number % 2 === 0 ){
    console.log(`Number ${number} is an even number`)
} else {
    console.log(`Number ${number} is am odd number`)
}

console.log("Task 3: Write a program that checks if a number is Divisible")

const result = safeDevision(10, 0);
if (result === null) {
    console.log("Division failed.");
} else {
    console.log("Result: " + result);
}


console.log("Task 4: Write a program that calculates the cost of a movie ticket based on age.")
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


console.log("Task 5: Determine the discount on an item based on price. Create your rules for discount.")
const price = 120; // Replace with different values to test
let discount = 0;


if (typeof price !== "number" || isNaN(price)){
    console.log("Please enter a valid number for price.");
}else if (price<=20){
    discount = 5;
    console.log(`Your discount is ${discount}%`);
}else if (price<=80){
    discount = 10;
    console.log(`Your discount is ${discount}%`);
}else if (price<=100){
    discount = 15;
    console.log(`Your discount is ${discount}%`);
} else{
    discount = 20;
    console.log(`Your discount is ${discount}%`);
}

console.log("Task 6: Write a program that finds the largest of three numbers.")
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

console.log("Task 7: Write a program that finds the largest of three numbers.")

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

console.log("Task 8: Write a program that determines if a number is positive, negative, or zero.")
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


console.log("TOPIC 2: TERNARY OPERATOR")

console.log("Task 1: \"an adult or a child\" using a ternary operator")
const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); //

console.log("Task 2: Finding the bigger number")
const numNew = 5;
const numNew1 = 10;
const bigNumberNew = numNew > numNew1 ? numNew : numNew1;
console.log(bigNumberNew); // Output: 10

console.log("Task 3: Determining if a number is even or odd... using a ternary operator")
let resultTren = number % 2 === 0 ? `Number ${number} is an even number` : `Number ${number} is am odd number`
console.log(resultTren);


console.log("Task 4:  Write a program to check the grade: A(form 90 to 100) using a ternary operator")
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 20; // Replace with different scores

grade = score <=100 ? `A` :
        score <=90 ? `B` :
        score <=80 ? `C` : score <=70 ? `D` : F;
console.log(grade);

console.log("TOPIC 2: SWITCH-CASE")

console.log("Task 1: Subscription Using SWITCH for multiple conditions")
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

console.log("Task 2: Determine the Day of the Week")
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

console.log("TOPIC 3: TRY...CATCH")
//try: содержит код, где может произойти ошибка. Если ошибка происходит, выполнение немедленно переходит в catch.
// В catch мы получаем объект ошибки (часто называют error или err) и можем с ним работать.


console.log("Task 1: Handling errors in code - is Division is allowed? ")
function safeDevision(a, b){
    try{
        if (b === 0){
            throw new Error ("Impossible to devide by 0");
        }
        return a/b;
    } catch(error) {
        console.error("Impossible to devide for 0", error.message);
        return null;
    } finally {
        console.log("Devision has finished.")
    }
}


safeDevision(10, 0);

console.log("Task 2: Is Input valid? ")

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


console.log("Task 3: String to  json ")
// Напиши функцию parseJSONSafe(jsonString), которая: Принимает строку jsonString.
// Пытается преобразовать её в объект с помощью JSON.parse().
// Если преобразование успешно — возвращает объект.
// Если преобразование не удалось (ошибка в формате JSON) — ловит ошибку и возвращает null,
// при этом выводит в консоль сообщение: "Invalid JSON".

function parseJSONSafe(jsonString){
    try{
        const newObject = JSON.parse(jsonString)
        return newObject
    } catch(error) {
        console.error("This is not a JSON object: ", error.message);
        return null;
    } finally {
        console.log("Parsing has finished.")
    }
}

okString= '{"name": "Anna", "age": 25}';
notOkString = 'Hello World'

console.log("Json safe string:", parseJSONSafe(okString));
console.log("Not a Json safe string:",parseJSONSafe(notOkString));

//Exersice 2
// Create a function that uses a switch statement to return different messages based on order status:
//     "pending" → "Order is being processed"
//     "completed" → "Order delivered successfully"
//     "cancelled" → "Order was cancelled"
//     default → "Unknown status"
console.log("\nExersice 2: Else-If\n")
function messageGen(status){
    if (status === "pending"){
        console.log("Order is being processed")
    } else if (status === "completed"){
        console.log("Order delivered successfully")
    } else if (status === "cancelled"){
        console.log("Order was cancelled")
    } else {
        console.log("Unknown status")
    }
}

messageGen("lkdjfs")
messageGen("pending")

console.log("\nExersice 2: Switch-Case\n")

let textCase;
let text = "pending";

switch(text){
    case "pending":
        console.log("Order is being processed")
        break;
    case "completed":
        console.log("Order delivered successfully")
        break;
    case "cancelled":
        console.log("Order was cancelled")
        break;
    default:
        console.log("Unknown status")
}
