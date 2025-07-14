let start = 10

console.log("1. Example 1: Simple while loop")
let i = 0;
while ( i<= 5){
    console.log(i)
    i++
}

console.log("2. Using a counter to control the loop")
while (start >= 0) {
    console.log(start);
    start--;
}


console.log("3. A loop that might not start")
while (start < 10){
    console.log(start)
    start++
}

console.log("4: Using a counter to control the loop")
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}


console.log("5: A loop with break")
while (start >= 0){
    console.log(start);
    if (start === 0) break
    start--
}

console.log("6: Practical example: Filling up hotel rooms")
let clients = 15;
const maxRooms = 25;

while (clients<=maxRooms){
    console.log(`Currently filled:${clients}`);
    clients++
}

console.log("Example 1 Do...While Loop")
/*
A "do...while" loop is a post-condition loop. The loop body is always executed at least once
because the condition is checked after the loop body is executed.

Syntax:
do {
  // code to execute
} while (condition);
*/


let j = 0;
do {
    console.log("j = " + j); // 0 1 2
    j++; // 1 / 2 /3
} while (j < 3); //1 /2  3

console.log("After the loop, j = " + j);

do {
    console.log("This executes once!");
} while (false);

console.log("Example 2 Do...While Loop")

do {
    console.log("This executes once!");
} while (false);

console.log("Practical Example: Asking for a password")
// let password = "";
// do {
//     password = prompt("Enter a password longer than 4 characters", "");
// } while (password.length <= 5);

console.log("Task 1: Counting Down")

let taskOne = 10;
while (taskOne >= 0){
    console.log(taskOne--);
}

console.log("Task 2: Password Validation")
let password = "";
do{
    password = prompt(`Enter a valid password that is more than 6 characters!`);
} while (password.length < 6);


