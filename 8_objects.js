console.log("PART 1: OBJECT METHODS");

let person = {
    name: 'John',
    age: 37,
    profession: 'Software Engineer',
};

console.log("Object.keys():", Object.keys(person));
console.log("Object.values():", Object.values(person));
console.log("Object.entries():", Object.entries(person));


console.log("Task 2: PUSH method for array of objects");

let users = [
    { name: "Anna", age: 22 },
    { name: "John", age: 30 }
];

let newUser = {
    name: "Mia",
    age: 25
};

let addNewUser = users.push(newUser);
console.log("Original array with added user:  ", users);
console.log("Var with push returns the lenth of a changed array:  ", addNewUser);

users.push({name: "Vera", age: 37});
console.log("After adding new user to the end of the array:  ", users);

console.log("Task 2: POP method for array of objects");

let popedUser = users.pop();
console.log("Remove the last object of the array and display it:", popedUser);
console.log("Array after removing:", users);

console.log("\n1.3 UNSHIFT METHOD for objects\n") // unshift() - adds first element

// Excersice 2
newUserToStart = {name: "Vera", age: 37};
console.log("Users lenth after adding to the start: ", users.unshift(newUserToStart));
console.log("Users after adding to the start: ", users);


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

//Excersice 3 Используй shift() и выведи возраст удалённого пользователя

console.log("Age of the removed user from the begining:", users.shift().age);


//Exersice 1
let products = [
    {name: "Laptop", price: 1000, category: "electronics", inStock: true},
    {name: "Phone", price: 600, category: "electronics", inStock: false},
    {name: "Book", price: 20, category: "education", inStock: true},
    {name: "Headphones", price: 150, category: "electronics", inStock: true},
    {name: "Notebook", price: 5, category: "education", inStock: true}
];


//Task 1: get all products inStock
let productsInStock = products.filter(product => product.inStock === true);
console.log("ProductsInStock: ", productsInStock);

// Task 2: create a new array with just products names and prices
let nameAndPriceArrayReturn = products.map(product => {
    return {
        name: product.name,
        price: product.price}
});
console.log("New array with only name And Price with RETURN: ", nameAndPriceArrayReturn)

let nameAndPriceNoReturn = products.map(product => ({
    name: product.name,
    product: product.price
}))
console.log("New array with only name And Price WITHOUT return: ", nameAndPriceNoReturn)

let nameAndPriceFunction = products.map(product => {
    const name = product.name;
    const price = product.price;
    return {name: name, price: price}
});
console.log("New array with only name And Price FUNCTION: ", nameAndPriceFunction)

//Task 3: find first product in education cat.

let firstInEdu = products.filter(product => product.category === "education")
console.log("First product in education category FILTER: ", firstInEdu[0])

let firstEducation = products.find(product => product.category === "education");
console.log("First product in Education category:", firstEducation);

//Task 4: Calculate total value of all products in the Stock

let pricesInStock = productsInStock.map(product => product.price);
let sum = pricesInStock.reduce((acc, price)  => acc + price, 0);
console.log("Calculate total value of all products in the Stock:", sum);

// let sum = products
//     .filter(p => p.inStock)
//     .map(p => p.price)
//     .reduce((acc, price) => acc + price, 0);

//Task 5: Check if there are any product under 50$
let productsUnder50 = products.filter(product => product.price <= 50);
console.log("Check if there are any product under 50$", productsUnder50);

