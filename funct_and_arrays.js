let numbersArray = [1, 2, 3, 4, 5];

function elementPlusOne(somearray){
    let newArray = [];
    for (let i = 0; i < somearray.length; i++)
    {
        let somearrayNew = somearray[i] + 1;
        newArray.push(somearrayNew);
    } return newArray;
};

resultArray = elementPlusOne(numbersArray)
console.log(resultArray);

/* Task 1: Array Methods
Create a function that takes an array of numbers and returns a new array
where each number is multiplied by its index + 1
Example: [1, 2, 3] should return [1, 4, 9]
*/

function multiplyToindexPlusOne(somearray){
    let newArray = [];
    for (let i = 0; i < somearray.length; i++)
    {
        let somearrayNew = somearray[i] * (i + 1);
        newArray.push(somearrayNew);
    } return newArray;
};

resultArray2 = multiplyToindexPlusOne(numbersArray)
console.log(resultArray2);


/* Task 2: Object Transformation
Create a function that takes an object of student scores
and returns an object with the same keys but with pass/fail values
(pass if score >= 60)
Example: { John: 80, Jane: 45 } should return { John: 'pass', Jane: 'fail' }
*/


const studensScores = {
    John: 80,
    Jane: 45
}

const result = {}

for (let name in studensScores){
    console.log(name)
}

for (let score in studensScores){
    console.log(studensScores[score])
}

for (let student in studensScores){
    if (studensScores[student] >= 60) {
        console.log(`${student} pass`)
    } else if (studensScores[student] < 60){
        console.log(`${student} fail`)
    }else {
        console.log(`${student} error`)
    }
}


for (let student in studensScores){
    if (studensScores[student] >= 60) {
        result[student] = "pass";
    } else if (studensScores[student] < 60){
        result[student] = "fail";
    }else {
        console.log(`${student} error`);
    }
}

console.log(result);

function studentResult(StudentsData){
    const result = {};
    for (let student in StudentsData){
        if (StudentsData[student] >= 60) {
            result[student] = "pass";
        } else if (StudentsData[student] < 60){
            result[student] = "fail";
        }else {
            console.log(`${student} error`);
        }
    }

    return result;
}

scoreDate = studentResult(studensScores);
console.log(scoreDate);









//     "Task 4: Fibonacci"  - попробуй через:
//     - рекурсия ( как раз ее обсудим)




// Find the first non-repeating character
