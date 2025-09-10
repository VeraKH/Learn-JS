console.log("1. Минимальное и максимальное число из массива - for loop")

let arr = [1, 2, 4, 5, 6];

function findMaxMinNumber(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];

    }
    return {min,max};
}

console.log(findMaxMinNumber(arr));

console.log("2. Минимальное и максимальное число из массива - min, max methods and spread")

myMax = Math.max(...arr);
console.log(myMax);

console.log("2. Минимальное и максимальное число из массива - Reduce")
let maxReduce = arr.reduce((acc, cur) => cur > acc ? cur : acc, -Infinity);
let minReduce = arr.reduce((acc, cur) => cur < acc ? cur : acc, Infinity);

console.log("Max:", maxReduce); // 6
console.log("Min:", minReduce); // 1