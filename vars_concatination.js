console.log("PART 1: VARIABLES\n")

// Task 1: Choose appropriate names for variables and create them in the code.

// 1. Create a variable to store the creation date of the file.
let fileCreationDate;

// 2. Create a variable to store the file name.
let fileName;

// 3. Create a variable to store the number of errors.
let errorsNumber;

// Task 2: Declare two variables: login and name
let login;
let name;

// 1. Assign your name to the variable 'name'
name = "Vera";

// 2. Copy the value from 'name' into 'login'
login = name;

// 3. Print the value of the 'login' variable to the console
console.log(login)

// Task 3: Create 3 variables in one line with different values
let a = 3, b = 5, c = 7;

// Task 4: Create a variable named myUndefined and set its value to undefined without using the word "undefined"

let myUndefined;

console.log("\nPART 1: CONCATENATION")

console.log("\nTask 5")
// Task 5: You need to write the string "I'm lovin' it!" to the variable resultLine
// Do not modify the values of the variables line1, line2, and line3.

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";

let resultLine = `${line3} ${line1} ${line2}`;
console.log(resultLine);  // Outputs: "I'm Lovin It!"

console.log("\nTask 6")
// Task 6: You need to store the string "70" in the variable digits
// Use the variables x, y, z, an empty string, and string concatenation.

let x = 3;
let y = 4;
let z = 0;

let digits = x+y + "" + z
console.log(digits);


console.log("\nTask 7")
// Task 7:

// You need to assign the number 100500 to the variable hugeAmount.

// Use the variables bigAmount, greatAmount, and convert the strings to numbers.
// Declare and initialize the hugeAmount variable in a single statement.
// --- Do not modify the values of the variables bigAmount and greatAmount.
// --- Use bigAmount, greatAmount, and the Integer() method to initialize the hugeAmount variable.

let hugeAmount = 0;

let bigAmount = "500";
let greatAmount = "100000";

greatAmount = greatAmount / 1000
console.log('Great Amount', greatAmount);
hugeAmount = `${greatAmount}${bigAmount}`
hugeAmount = parseInt(hugeAmount)
console.log('Huge Amount', hugeAmount);  // Outputs: 100500

console.log("\nTask 8")
// Task 8: Modify the code so that instead of the string values, the length of each string is printed
// Do not modify the value of the emptyString variable.
// For the three strings passed to console.log, call the length method.

let emptyString = "";

console.log(emptyString.length);
console.log("Think Different".length);
console.log((emptyString + 2 + 2 + "22").length);

console.log("\nTask 9")
// Task 9: Modify the code so that all letters in these strings are in lowercase
// Do not modify the values of the title, degree, and career variables.
// For the four strings passed to console.log, call the toLowerCase() method.

let title = "Senior Lead Principal Data Analyst";
let degree = "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career = "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

console.log(("RESUME").toLowerCase());
console.log(("TITLE: " + title).toLowerCase());
console.log(("DEGREE: " + degree).toLowerCase());
console.log(("CAREER: " + career).toLowerCase());

console.log("\nTask 10")
// Task 10: Modify the code so that all letters in these strings are in uppercase
// Do not modify the values of the caps and usa variables.
// Call the toUpperCase() method for the three strings passed to console.log.

let caps = "if I type in caps ";
let fbi = "fbi";

console.log((fbi).toUpperCase());
console.log(("Гекльберрі Фінн").toUpperCase());
console.log((caps + "they know I mean business").toUpperCase());

console.log("\nTask 11")
// Task 11: Initialize the message variable. The value should be created using both template strings and concatenation.
// The string value should be based on the variables name, age, company, and position.

let name_qa = "Maxim";
let age = 29;
let company = "Apple";
let position = "QA";

let message = `${name_qa} is ${age} years old. ` + "He is a " + position + ` at ${company} company.`;
console.log(message);

