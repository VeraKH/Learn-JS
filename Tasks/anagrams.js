console.log('1. Check if two strings are anagrams with comparing keys/values');
let anagramOne = 'Колба'.toLowerCase();
let anagramTwo = 'бокал'.toLowerCase();

let objectOne = {};
let objectTwo = {};

//объект хранит счетчики символов, а цикл просто идёт по символам строки и обновляет объект.
for (let char of anagramOne){ //
    if (objectOne[char] === undefined){ //  objectOne[char] = (objectOne[char] || 0) +1;
        objectOne[char] = 1;
    } else {
        objectOne[char] ++;
    }
}

for (let char of anagramTwo){
    if (objectTwo[char] === undefined){ // objectTwo[char] (objectTwo[char] || 0) +1;
        objectTwo[char] = 1;
    } else {
        objectTwo[char] ++;
    }
}


function isAnagramFunc(objOne, objTwo){
    objectOneKeys = Object.keys(objOne);
    objectTwoKeys = Object.keys(objTwo);

    if (objectOneKeys.length !== objectTwoKeys.length){
        return false;
    }

    for (let key of objectOneKeys){
        if(objectOne[key] !== objectTwo[key]){
            return false;
        }
    }
    
    return true;
}

if (isAnagramFunc(objectOne, objectTwo)) {
    console.log('This is an anagram');
} else {
    console.log('NOT an anagram');
}

console.log('2. Check if two strings are anagrams with sorting');

function AnagramsSort(anagramOne, anagramTwo){
    if(anagramOne.toLowerCase().split('').sort().join('') ===
        anagramTwo.toLowerCase().split('').sort().join('')){
        return true;
    }
}

if(AnagramsSort(anagramOne, anagramTwo)){
    console.log('This is anagram');
} else {
    console.log('NOT an anagram');
}

console.log('3. Check if two strings are anagrams with MAP');

function isAnagramMap(anagramOne, anagramTwo){
    if (anagramOne.length !== anagramTwo.length) return false;

    //Создаём словари (Map), в которых будем хранить: букву как ключ, количество вхождений как значение.
    let mapOne = new Map();
    let mapTwo = new Map();

    for(let char of anagramOne) mapOne.set(char, (mapOne.get(char) || 0) +1);
    for(let char of anagramTwo) mapTwo.set(char, (mapTwo.get(char) || 0) +1);

    for (let [key, value] of mapOne){
        let v = mapTwo.get(key); //get value for a key in mapTwo
        if (v !== value) return false;
    }
    return true;
}

if (isAnagramMap(anagramOne, anagramTwo)){
    console.log('This is anagramMap');
}
