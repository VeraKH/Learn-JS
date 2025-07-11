console.log("Example 1: A basic for loop")
/*
A "for" loop is a counter-based loop. It specifies the starting point, the ending condition,
and the step for the counter. The loop runs until the condition becomes false.
*/

for (let i=2; i<6; i++) {
    console.log(i)
};

console.log("Example 2: Calculating the sum of numbers up to a target value")

const result = 10;
let sum = 0;
for (let i = 1; i<=result; i++){
    sum = sum+i
}
console.log("Sum: ", sum);


console.log("Example 3:  Using modulo to find remainders");

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

console.log("Example 4 - Multiplication table for 5 ");
const multNumber = 5;
for (let i = 1; i<=10; i++) {
    let result = multNumber * i;
    console.log(`${multNumber} * ${i} =`, result);
}


console.log("Example 4:  Break & for");

for (let i = 1; i<range; i++) {
    resultNew = range % i
    if (resultNew % i === 2){
        break;
    }
    console.log(`The remainder of ${range} divided by ${i} is ${resultNew}`);
}
console.log("Loop ended");

console.log("Example 5:  Break & for");
for (let i = 0; i<5; i++) {
    if (i === 3){
        console.log(`Found 3`);
        break;
    }
    console.log(`Step ${i}`);
}
console.log("Loop ended");

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

console.log("Topic `continue`. Example 2 - Skip even numbers");;
for (let i = 1; i<10; i++) {
    if (i % 2 === 0){
        console.log(`Even number: ${i}`);
        continue;
    }
}
