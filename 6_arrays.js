
console.log("PART 1: ARRAY METHODS")
console.log("1.1 PUSH METHOD\n") //1. push() adds element to the end

let fruitsBasket = ['apple', 'banana', 'pear'];
let cities = ['Moscow', 'Bratislava', 'Vienna']

// Excersice 1
fruitsBasket.push('mango');
console.log(fruitsBasket);

let fruitsBasketAdded = fruitsBasket.push('orange');
console.log("AFTER PUSH - changed array with a new element: ",fruitsBasket);
console.log("PUSH returns lenth of a changed array, not array: ", fruitsBasketAdded);

// Excersice 2
console.log("Added one element to the original 'cities' array and it has now lenth:", cities.push('Tomsk'), " and now cities is:", cities);

console.log("\n1.2 POP METHOD\n") //1. pop() removes the last element and return this element

// Excersice 1
let lastElementToPop = cities.pop();
console.log("Method returns popped element: ", lastElementToPop);
console.log("After popping the last element: ", cities);

// Excersice 2
let fruitsBasketLenth = fruitsBasket.pop();
console.log("returns poped element: ", fruitsBasketLenth);
console.log("returns original array without popped element: ", fruitsBasket);

console.log("\n1.3 UNSHIFT METHOD\n") // unshift() - adds first element

// Excersice 1
fruitsBasket.unshift("mango")
console.log("After adding a first element: ", fruitsBasket);

console.log("\n1.4 SHIFT METHOD\n") // shift() - removes element from the begining and returns removing element

// Excersice 1
let firstElement = fruitsBasket.shift()
console.log("The first element to delete: ", firstElement);
console.log("After removing the first element: ", fruitsBasket);

// Excersice 2
let myNumberArray = [2, 3, 4];
myNumberArray.shift();
console.log(myNumberArray);


console.log("\n2.  ARRAY TRANSFORMATION METHODS")

console.log("METHOD: map() - map creates a new array with the results of applying a function to each element.")

//Exercise 1
let numbers = [1, 2, 3, 4, 5];

function doubleNumbers(num) {
    return num * 2;
}

let doubleResult = numbers.map(doubleNumbers);
console.log("This is a new array created from numbers array with map() and usual func: ", doubleResult);

let doubleResultArrow = numbers.map(num => num*2);
console.log("This is map() with arrow function - 1", doubleResultArrow);

//Exercise 2

let letters =  ["a", "b", "c"];

let capsLetters = letters.map(letter => letter.toUpperCase())
console.log("This is map() with arrow function and capslook - 2", capsLetters)

//Exercise 3
let names = ["anna", "boris", "vera"];

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
};

//Exercise 4
let greetings = names.map(name => `Hello, ${capitalize(name)}`);
console.log("This is map() with arrow function - 3", greetings);

//Exercise 5
// Верни новый массив, где только возраст пользователей: [20, 25, 30]

let usersArray = [
    { name: "Anna", age: 20 },
    { name: "Boris", age: 25 },
    { name: "Vera", age: 30 }
];

let usersAge = usersArray.map(user => user.age)

//Exercise 6
//Используя этот же массив, верни массив строк: ["Anna is 20", "Boris is 25", "Vera is 30"]

let userPhrase = usersArray.map(user => `${user.name} is ${user.age}`)
console.log("Map method to convert array to array of strings: ", userPhrase)


console.log("A new arrow with only age:", usersAge);

console.log("METHOD: filter() - creates new array with elements that pass test.")
let evenNumbers = numbers.filter(num=>num % 2 == 0);
console.log('Original array:', numbers);
console.log('Even numbers new array:', evenNumbers);

//Exersise 1 Пример: [1, 2, 3, 4, 5] → [2, 4]

let numbersFilter = [1, 2, 3, 4, 5];

let evenNumberFiltered = numbersFilter.filter(number => number % 2 == 0);
console.log("Filtered array with even numbers:", evenNumberFiltered);

let words = ["hi", "Moscow", "hello", "JavaScript"];
moreThanFive = words.filter(word => word.length >= 5);
console.log("Фильтровать строки длиннее 5 символов:", moreThanFive);

let numbersToFilter = [-2, 5, 0, 12, -7];
let positiveNumbers = numbersToFilter.filter(num => num >= 0);
console.log("Оставить только положительные числа:", positiveNumbers)

console.log("METHOD: reduce() - creates new array with elements that pass test.")
//array.reduce(callback(accumulator, currentValue, index, array), initialValue)

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


let word = "moscow";
let polydrom = '';

for(i = word.length-1; i>=0; i--){
    polydrom += word[i];
}

console.log(polydrom);




