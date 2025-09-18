console.log("Task 1. Polindromes: 'for' loop")

let word = "Moscow";
let lowerWord = word.toLowerCase();
let wordArrayNew = [];
let arrayToString = '';
let polydrom = '';

console.log("Task 1. Polindromes: 'for' loop")

// for(let i=lowerWord.length-1; i>=0; i--){
//     wordArrayNew.push(lowerWord[i]);
// }

// for (let i = 0; i<lowerWord.length; i++){
//     arrayToString += wordArrayNew[i];
// }
// console.log(arrayToString);

for(i = lowerWord.length-1; i>=0; i--){
    polydrom += lowerWord[i];
}
console.log(polydrom);


console.log("Task 2. Polindromes: reduce is not applicable for this task");

console.log("Task 3. Polindromes: array methods");

// lowerWordArray = lowerWord.split('');
// lowerWordArray.reverse();
// //let polydrom = lowerWordArray.join('');

polydrom = lowerWord.split('').reverse().join('');
console.log(polydrom);

