console.log("1. Unique elements array with the object");

let array = [1, 2, 2, 3, 4, 4, 5];
let myObj = {};
let newArray = [];
let newArrayMap = [];

for (let char of array){
    if (myObj[char] === undefined) {
        myObj[char] = 1
    } else {
        myObj[char]++;
    }
};

for(let key in myObj){
    if (myObj[key] === 1){
        newArray.push(key);
    }
};
console.log(newArray);


console.log("1. Unique elements array with the object and MAP");

//Нам нужно посчитать, сколько раз встречается каждое число. Для этого мы используем Map — это как "таблица" число → количество.
let map = new Map();
for(let num of array){
//map.get(num) - возвращает текущий элемент массива
if(map.get(num) === undefined){
    //map.set(num) - устанавливает значение
    map.set(num, 1);
}else {
    map.set(num, map.get(num)+1)
}
}

//короткая запись
// for (let num of array) {
//     mapOne.set(char, (mapOne.get(char) || 0) +1); //если undefined, то берём 0, +1 → увеличиваем счётчик.
// }

for(let [key, value] of map){
    if(value=== 1){
        newArrayMap.push(key);
    }
};
console.log(newArrayMap);


console.log("1. Unique elements array with the IndexOf and Filter");

let uniqueIndexes = array.filter(function(num){
    let firstIndex = array.indexOf(num);
    let lastIndex = array.lastIndexOf(num);
    return firstIndex === lastIndex;
});

//let uniqueIndexes = array.filter(num => array.indexOf(num) === array.lastIndexOf(num));

console.log(uniqueIndexes);