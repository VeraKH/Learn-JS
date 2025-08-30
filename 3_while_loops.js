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
    if (start === 0) break;
    start--;
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

// console.log("Task 2: Password Validation")
// let password = "";
// do{
//     password = prompt(`Enter a valid password that is more than 6 characters!`);
// } while (password.length < 6);


console.log("Task 3, basic")

let varMy = 0;
while(varMy<=10){
    console.log(varMy)
    varMy++
};

console.log("Task 4, sum of numbers from 1 to 10")

let sum = 0;
varOne = 1;
varTwo = 10;

while (varOne <= varTwo){
    sum = varOne + sum;
    varOne++;
}
console.log(sum);

console.log("Task 5, console log elements of an array")

let names = ["Anna", "Boris", "Vera"];
let name = 0;

namesLenth = names.length;
while (name < namesLenth){
    console.log(names[name]);
    name++;
}

console.log("Task 6, find in array number more than 50");

numArray = [10, 25, 60, 45, 80];
let number = 0;
while(number < numArray.length){
    if (numArray[number] >=50) {
        console.log(numArray[number]);
    }
    number++;
}

numArrayTwo = [2, 4, 6, 8, 10];
let numberTwo = 0;

while(numberTwo < numArrayTwo.length){
    numArrayTwo[numberTwo] = numArrayTwo[numberTwo]+ 1;
    numberTwo++;
}
console.log(numArrayTwo);


let numberThree = 0;
while(numberThree <=10){
    console.log(numberThree);
    if (numberThree === 5) break;
    numberThree++;
}

let numberFour = 0;

while(numberFour <= 10) {
    console.log(numberFour);

    if (numberFour === 5) {
        console.log("Found 5");
        numberFour++;
        continue;
    }

    numberFour++; // увеличиваем счётчик для всех остальных чисел
}

let myArrayThree = [1, 2, 3, 4, 5, 6];
arrayIndex = 0;

while(arrayIndex < myArrayThree.length){

    if (myArrayThree[arrayIndex] === 3) {
        arrayIndex++;
        continue;
    }
    console.log(myArrayThree[arrayIndex]);
    arrayIndex++;
}
