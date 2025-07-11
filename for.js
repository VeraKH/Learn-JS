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