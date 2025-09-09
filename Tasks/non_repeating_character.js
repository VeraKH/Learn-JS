console.log("1. Find the first non-repeating character in a string - for loop");

let str = "abacaba"; ///

for (let i = 0; i<str.length; i++){
    let isUnic = true;
    for (let n = 0; n<str.length; n++){
        if (i !== n && str[i] === str[n]){
            isUnic = false;
            break; //no need to go further, it's not unique
        }
    }

    if (isUnic){
        console.log(str[i]);
        break;
    }
};

console.log("1.2 Find the first non-repeating character in a string - indexOf");

for(let i = 0; i<str.length; i++){
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        console.log(str[i]);
        break;
    }
}

console.log("1.3 Find the first non-repeating character in a string - object");

let obj = {};

// 1. Считаем сколько раз встречается каждая буква
for (let char of str) {
    if (obj[char] === undefined) {
        obj[char] = 1;
    } else {
        obj[char]++;
    }
}

// 2. Ищем первую уникальную
for (let char of str) {
    if (obj[char] === 1) {
        console.log(char); // первая уникальная
        break; // сразу останавливаемся
    }
}

