console.log("TOPIC 1. Async in JavaScript");

//Example of the method to use in async - setTimeout(function, delay,  arg1, arg2, ...)

console.log("1.1 Async + passing a function by reference with delayed execution and parameters");
function greeting(greeting, name){
    console.log(greeting + ", " + name);
}

function asyncFunc() {
    console.log("One");
    setTimeout(greeting, 1000, "Hey", "Vera");
    console.log("Two");
}
asyncFunc();

console.log("1.2 Async + delayed execution of an anonymous arrow function with parameters:");
function asyncArrowFunc() {
    console.log("One");
    setTimeout((greeting, name) => console.log(greeting + ", " + name), 1000, "Hey", "Vera");
    console.log("Two");
}
asyncArrowFunc();


console.log("1.3 delayed execution of an arrow function using closure to capture outer variables:");
function asyncFuncArrowClosure(greeting, name) {
    console.log("One");
    setTimeout(() => console.log(greeting+", "+name),1000);
    console.log("Two");
}

asyncFuncArrowClosure("Hey", "Vera");


console.log("1.4 Execution of an anonymous arrow function:");
function asyncFuncNoArgs(){
    console.log(1);
    setTimeout(() => {console.log("2"); }, 0);
    console.log(3)
}

asyncFuncNoArgs();

console.log("1.5 Practice - Simple Timer");

function simpleTimer(){
    console.log("Start!");

    setTimeout(() => {console.log("It's done!")}, 2000);
    console.log("Waited for 1 sec");
}

simpleTimer();

console.log("TOPIC 2. Promises");
console.log("2.1 Practice - Creating a new object of Promis");

const promiseExampleTest = new Promise((resolve, reject) => {
    //some code with async operation
});

console.log("2.2 Practice - Creating a new object of Promis and resolving an object of Promis with then, catch");

const isSuccessNew = true;
const promiseExample = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(isSuccessNew){
            resolve("successfully done!")
        } else {
            reject("Error!")
        }
    }, 2000)
});

//колбэки анонимно
promiseExample
    .then((message) => {console.log(message)}) //.then(message => console.log(message))
    .catch((error) => {console.log(error)}); //.catch(error => console.log(error));



console.log("2.3 Practice - Simple Timer with Promises and Resolver");
function simpleTimerPromise() {
    console.log("Start");

    return new Promise((resolve, reject) => {
        let isSuccess = true;

        setTimeout(() => {
            if(isSuccess){
                resolve("You are done!");
            }else{
                reject("Error");

            }
        }, 1000)

    })
}

simpleTimerPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));


function makeSandwich(){

    return new Promise((resolve, reject) => {setTimeout(()=>{
        let haveIngredients = true;
        if(haveIngredients) {
            resolve("🥪 Sandwich is ready");
        } else {
            reject("❌No ingredients");
        }
    },1000)})

}

makeSandwich()
    .then(message => console.log(message))
    .catch(error => console.log(error));


console.log("2.4 Practice - Simple Timer for getting a Taxi");

function getTaxi(){
    return new Promise((resolve, reject) => {
        console.log("Order has been accepted");

        setTimeout(() => {
            let isCar = true;
            if(isCar){
                resolve("Your car is waiting for you");
            }else {
                reject("We don't have available cars now.");
            }
        }, 2000)
    })
}

getTaxi()
    .then(message => console.log(message))
    .catch(error => console.log(error));



