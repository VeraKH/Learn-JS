console.log("Task 1: Fibonacci recursion");
/*
F₀ = 0
F₁ = 1
Fₙ = Fₙ₋₁ + Fₙ₋₂
*/
function fibonacciRecursion(num){
    //Рекурсия работает с конкретными значениями (точные номера чисел)
    if(num === 0) {return num};
    if(num === 1) {return num};

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

console.log("Task 1.2: Fibonacci recursion - когда нужна вся последовательность");
for(i=0; i<=5; i++){
    console.log(fibonacciRecursion(i));
}

console.log("Task 1.1: Fibonacci recursion - когда нужна не вся последовательность, а только одно конкретное число.");
console.log(fibonacciRecursion(7));


console.log("Task 2 Fibonacci for loop");

function fibonacciFor(num){

    let a = 0;
    let b = 1;


    if(num >= 1) {console.log(a)};
    if(num >= 2) {console.log(b)};

    for (let i=3; i<=num; i++){
        let next = a+b;
        console.log(next);

        a = b;
        b = next;
    }
};

fibonacciFor(5);


