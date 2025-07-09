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
