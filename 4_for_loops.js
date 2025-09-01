console.log("TOPIC 1: A basic FOR loop")
/*
A "for" loop is a counter-based loop. It specifies the starting point, the ending condition,
and the step for the counter. The loop runs until the condition becomes false.
*/
console.log("Practice 1: for loop with step 1")
for (let i=2; i<6; i++) {
    console.log(i)
};

console.log("Practice 2: Step is not 1");
for (let i=0; i<=10; i+=2) {
    console.log(`${i}*2=`, i*2);
};

console.log("Practice 3: Skipping initialization");
let i = 2;
for (; i<=6; i+=2) {
    console.log(`${i}+2=`, i+2);
};

console.log("Practice 4: Skipping step");
for(let i = 2; i<=8;){
    console.log(`${i}+2=`, i+2);
    i+=2
};

console.log("Practice 5: Infinite loop with break");

for (;;i++){
    console.log(`${i}+2=`, i+2);
    if(i===20){
        break;
    }
}

console.log("Practice 6: Infinite loop with continue and break");

for(i=0;i<=20;i+=2){
    console.log(`${i}+2=`,i);
    if(i===10){
        console.log("Here is 10");
        continue;
    } else if(i===16){
        console.log("Here is 16");
        break;
    }
}

console.log("Practice 7: Print numbers from 100 down to 1 using a `while` loop")
let num2 = 100;
for (let i =100; i>=1; i--){
    console.log(i);
}

for (let i=10; i>=0; i--){
    console.log(i);
}

// Write a program using a `for` loop that calculates the sum of all numbers from 1 to 50
// and prints the result.
console.log("Practice 8: Sum of Numbers");
let sumTask=0;
for (let i = 1; i<=20; i++) {
    sumTask = sumTask + i;
}
console.log(sumTask);

console.log("Practice 8: Sum of Numbers-2");

let sumNumber = 0;
for(let i=1; i<=50; i++){
    sumNumber = sumNumber+i;
}
console.log(sumNumber);

console.log("Practice 9: Multiplication Table for 7");
let multResult = 1;
const multTo = 7
for (i = 1; i<=10; i++) {
    multResult = i * multTo;
    console.log(`${i}*${multTo}=${multResult}`);
}

console.log("Practice 10 - Multiplication table for 5 ");
const multNumber = 5;
for (let i = 1; i<=10; i++) {
    let result = multNumber * i;
    console.log(`${multNumber} * ${i} =`, result);
}


console.log("Practice 10: Odd numbers only");
let resultTask;
for (i = 1; i<=20; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is an odd number!`);
    }
}

console.log("Practice 11: Calculating the sum of numbers up to a target value")

const result = 10;
let sum = 0;
for (let i = 1; i<=result; i++){
    sum = sum+i
}
console.log("Sum: ", sum);


console.log("Practice 11:  Using modulo to find remainders");

let range = 10;
let resultNew;

for (let i = 1; i<range; i++) {
    if (range % i === 0)
        console.log(`No remainders for devision to ${i}`)
};

for (let i = 1; i<range; i++) {
    resultNew = range % i
        console.log(`The remainder of ${range} divided by ${i} is ${resultNew}`);
};


console.log("Practice 8: Calculate the factorial of a number (e.g., 5) using a `for` loop");
const num3 = 5;

let factorialNumber=1;
for(let i=1; i<=num3; i++){
    factorialNumber = factorialNumber*i;
}
console.log(factorialNumber);



console.log("Topic: Break & for. Practice 1");

for (let i = 1; i<range; i++) {
    resultNew = range % i
    if (resultNew % i === 2){
        break;
    }
    console.log(`The remainder of ${range} divided by ${i} is ${resultNew}`);
}
console.log("Loop ended");

console.log("Break & for. Practice 2");
for (let i = 0; i<5; i++) {
    if (i === 3){
        console.log(`Found 3`);
        break;
    }
    console.log(`Step ${i}`);
}
console.log("Loop ended");

// Write a program that finds the first number divisible by 7 in the range from 1 to 100.
// Use a `for` loop with the `break` statement to stop as soon as the number is found.
console.log("Break & for. Practice 3");
for (i = 1; i<=100; i++) {
    if (i % 7 == 0) {
        console.log(`${i} is first devisible by 7`);
        break;
    }
}

//statement skips the current iteration of the loop and proceeds with the next one.
console.log("Topic `continue`. Example 1");
for (let i = 0; i<5; i++) {
    if (i === 3){
        console.log(`HEY, I've found 3!`);
        continue;
    }
    console.log(`Step ${i}`);
}
console.log("Loop ended");

console.log("Topic `continue`. Example 2 - Skip even numbers");
for (let i = 1; i<10; i++) {
    if (i % 2 === 0){
        console.log(`Even number: ${i}`);
        continue;
    }
}

console.log("Topic `Nested Loops`. Practice: 1");
for (let day = 1; day<=3; day++) {
    for (let lesson = 1; lesson<=3; lesson++) {
        console.log(`For day ${day} there is lesson ${lesson}`)
    }console.log(`The END of the day ${day}`)
}

console.log("Topic `Nested Loops`. Practice: 2");

/*У тебя есть школа с 3 классами, в каждом классе 4 ученика.
Создай вложенный цикл for, чтобы пройтись по каждому классу и каждому ученику.
Выведи в консоль сообщение: "Class X, Student Y" где X — номер класса, а Y — номер ученика.
После каждого класса выведи: "End of class X".
*/

let students = 4;
let classes = 3;

for(let i = 1; i<=classes; i++){
    for(let n = 1; n<=students; n++){
        console.log(`Class ${i}, Student ${n}`)
    }
    console.log(`End of class ${i}`)
}

/*
Labels allow you to name a loop and use `break` or `continue` statements to control outer loops.
*/
console.log("Labels for Loops");

console.log("Topic `Nested Loops`. Example 1");
for (let day = 1; day<=3; day++) {
    for (let lesson = 1; lesson<=3; lesson++) {
        console.log(`For day ${day} there is lesson ${lesson}`)
    }console.log(`The END of the day ${day}`)
}

console.log("Topic Labels in `Nested Loops` with break:");

searchLesson: for (let day = 1; day<=3; day++) {
    for (let lesson = 1; lesson<=3; lesson++) {
        console.log(`For day ${day} there is lesson ${lesson}`)

        if (day == 2 && lesson == 3){
            console.log(`FOUND the 3 lesson on the 2d day!`);
            break searchLesson;
        }
    }console.log(`The END of the day ${day}`)
}


//Using nested loops, create a complete multiplication table for numbers from 1 to 5.
console.log("Task 7: Nested Loop - Multiplication Table");
let resultTask7;
for (let multNumber = 1; multNumber<=5; multNumber++) {
    for (let i = 1; i<=10; i++) {
        resultTask7 = multNumber*i;
        console.log(`${multNumber} * ${i} = ${resultTask7}`);
    }
}


// Task 10: Draw a checkerboard pattern using nested loops


// Task 11: Find the smallest number in a set of numbers (without using arrays)
const num5 = 45;
const num6 = 8;
const num7 = 23;
const num8 = 78;


