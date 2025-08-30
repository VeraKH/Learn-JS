
console.log("PART 1: ARRAY METHODS")
console.log("1.1 PUSH METHOD\n") //1. push() adds element to the end

let fruitsBasket = ['apple', 'banana', 'pear'];
let cities = ['Moscow', 'Bratislava', 'Vienna']
let users = [
    { name: "Anna", age: 22 },
    { name: "John", age: 30 }
];

// Excersice 1
let fruitsBasketAdded = fruitsBasket.push('orange');
console.log("AFTER PUSH - changed array with a new element: ",fruitsBasket);
console.log("PUSH returns lenth of a changed array, not array: ", fruitsBasketAdded);

// Excersice 2
console.log("Added one element to the original 'cities' array and it has now lenth:", cities.push('Tomsk'), " and now cities is:", cities);

// Excersice 3 with an array of objects
let newUser = { name: "Mia", age: 25 };
let addNewUser = users.push(newUser);
console.log("Original array with added user:  ", users);
console.log("Var with push returns the lenth of a changed array:  ", addNewUser);


console.log("\n1.2 POP METHOD\n") //1. pop() removes the last element and return this element

// Excersice 1
let lastElementToPop = cities.pop();
console.log("Method returns popped element: ", lastElementToPop);
console.log("After popping the last element: ", cities);

// Excersice 2
let fruitsBasketLenth = fruitsBasket.pop();
console.log("returns poped element: ", fruitsBasketLenth);
console.log("returns original array without popped element: ", fruitsBasket);

// Excersice 3
let popedUser = users.pop();
console.log("Remove the last object of the array and display it:", popedUser);
console.log("Array after removing:", users);

console.log("\n1.3 UNSHIFT METHOD\n") // unshift() - adds first element

// Excersice 1
fruitsBasket.unshift("mango")
console.log("After adding a first element: ", fruitsBasket);

// Excersice 2
newUserToStart = {name: "Vera", age: 37};
console.log("Users lenth after adding to the start: ", users.unshift(newUserToStart));
console.log("Users after adding to the start: ", users);


console.log("\n1.4 SHIFT METHOD\n") // shift() - removes element from the begining and returns removing element

// Excersice 1
let firstElement = fruitsBasket.shift()
console.log("The first element to delete: ", firstElement);
console.log("After removing the first element: ", fruitsBasket);

// Excersice 2
let myNumberArray = [2, 3, 4];
myNumberArray.shift();
console.log(myNumberArray);

//Excersice 3 Используй shift() и выведи возраст удалённого пользователя

console.log("Age of the removed user from the begining:", users.shift().age);

console.log("\n1.5 COMBINED Exersice\n") //

//1. Создай пустой массив с названием messages. Добавь в конец массива три объекта.
//Каждый объект должен содержать текст сообщения и имя отправителя, например: { text: "Привет!", from: "Anna" }
let message = [];
message.push({text: "Hello", from: "Anna"}
);
message.push({text: "Urgent", from: "Boris"});
message.push({text: "Invoice", from: "Vera"});
console.log("Added to the end 3 objects:", message);

//2. Удали последний элемент из массива.
// Добавь важное сообщение в начало массива.

message.pop();
console.log("After Popped last object:", message);
message.unshift({text: "Important!", from: "Dmitrii"})

console.log(message);

//3. Удали первый элемент из массива и выведи в консоль его text.
removedFirts = message.shift()
console.log(removedFirts.text)

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



