
console.log("PART 1: ARRAY METHODS\n")

console.log("1. Basic Array Methods")

let fruits = ['apple', 'banana', 'orange']

// unshift() - adds first element
fruits.unshift("mango")
console.log("After adding a first element: ", fruits);

// push() - adds element to the end and returns number of elements, not an array
fruits.push('peach');
console.log("Fryits after push: ", fruits);

// shift() - removes element from the begining
let firstElement = fruits.shift()
console.log("The first element to delete: ", firstElement);
console.log("After removing the first element: ", fruits);


// pop() - removes last element
let lastElementToPop = fruits.pop();
console.log("Popped element: ", lastElementToPop);
console.log("After popping the last element: ", fruits);


console.log("2.  Array Transformation Methods")
let numbers = [1, 2, 3, 4, 5];

console.log("METHOD: map() - map creates a new array with the results of applying a function to each element.")

let doubledNumbers = numbers.map(num => num * 2);
console.log('Original array:', numbers);
console.log('Mapped array (doubled):', doubledNumbers);

console.log("METHOD: filter() - creates new array with elements that pass test.")
let evenNumbers = numbers.filter(num=>num % 2 == 0);
console.log('Original array:', numbers);
console.log('Even numbers new array:', evenNumbers);

console.log("METHOD: reduce() - creates new array with elements that pass test.")

//     Current V      Accumulator     Action
// 1.     1              0             1+0 = 1
// 2.     2              1             1 + 2 = 3
// 3.     3               3            3+3 = 6
// 4.     4             6             6+4 = 10
// 5.     5               10           5 + 10 = 15

const numbersReduce = [2, 4, 1, 9, 8, 8];
let newNumbersArray = numbers.reduce((acc, number) => acc + number, 0);
console.log('Original array:', numbers);
console.log('Sum of numbers:', newNumbersArray);

console.log("METHOD: map() - map creates a new array with the results of applying a function to each element.")

console.log("PART 2: OBJECT METHODS")

let person = {
    name: 'John',
    age: 37,
    profession: 'Software Engineer',
}

console.log("Object.keys():", Object.keys(person))

console.log("Object.values():", Object.values(person))

console.log("Object.entries():", Object.entries(person))

