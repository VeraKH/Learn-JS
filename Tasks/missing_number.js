console.log("!!!!1. Find the missing number in an array of 1..N with sorting");

let arr = [1, 2, 4, 5, 6];

function findMissingNumber(arr) {

    //arr.sort((a, b) => a - b);
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            console.log("Missing number:", arr[i] + 1);
            break;
        }
    }
}

findMissingNumber(arr);

console.log("1. Find the missing number in an array of 1..N with sum");

function findMissingNumberSum(arr) {
    let N = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > N) N = arr[i];
    }

    // Сумма чисел от 1 до N
    let toBeSum = N * (N + 1) / 2;

    // Сумма чисел массива
    let arrSum = arr.reduce((a, b) => a + b, 0);

    // Разница = пропущенное число
    return toBeSum - arrSum;
}

console.log("Missing number:", findMissingNumberSum(arr));