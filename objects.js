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
