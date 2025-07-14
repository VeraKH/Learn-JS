//Примитивные типы
let number = 1;
let string = 'Hello';
let boolean = true;
//let null = null;
//let undefined = undefined;
let symbol = Symbol();


//Ссылочные типы - объект. Ньюанс с const и созданием нового значения через переменную

const myObject = {
    a: 10,
    b: true
};

const myObject2 = myObject;

console.log(myObject.a);
myObject.a = 12;
console.log(myObject2.a);
myObject.c = 'string value';
console.log(myObject);
console.log(myObject2);


console.log(typeof myObject2);
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof symbol);
console.log(typeof null);

