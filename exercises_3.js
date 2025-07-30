/* ------ Exercise 1 - leapYears
Create a function that determines whether or not a given year is a leap year.
Leap years are determined by the following rules:

Leap years are years


divisible by four (like 1984 and 2004) or  divisible by 400 and  100


However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing)
Hints
use an if statement and && to make sure all the conditions are met properly*/




const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log(year, ' is a leap year')
    } else{
        console.log(year, ' is not a leap year')
    }

};

leapYears(2678) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false


/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number )
is the sum of the two preceding numbers. In this exercise,
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */


console.log("Fibonacci");

for (let num = 1; num<=5; num++) {
        console.log(num);
    }
