console.log("минимальное и максимальное число из массива.")

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