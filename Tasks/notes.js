/*
Получил JSON (обычно строку из сервера):

let json = '{"name":"Alex","age":25,"hobbies":["JS","chess"]}';


Парсим строку → получаем JS-значение:

let data = JSON.parse(json);
console.log(data); // { name: "Alex", age: 25, hobbies: ["JS","chess"] }


Смотрим, что за тип (object, array, string...):

console.log(typeof data); // "object"


Дальше — используем обычные методы JS для работы с этим типом.

🔹 Если это объект ({})

Методы:

    Доступ к полям: data.name, data["age"].

    Получить все ключи: Object.keys(data).

    Получить все значения: Object.values(data).

    Пример:

console.log(data.name);         // Alex
console.log(Object.keys(data)); // ["name", "age", "hobbies"]

🔹 Если это массив ([])

Методы:

    Перебор: for...of, .map(), .filter(), .reduce().

    Доступ по индексу: data[0].

    Пример:

console.log(data.hobbies[0]);     // JS
console.log(data.hobbies.length); // 2
console.log(data.hobbies.map(h => h.toUpperCase())); // ["JS", "CHESS"]

🔹 Если это строка ("...")

Методы:

    .length, .toUpperCase(), .includes().

    Пример:

let s = JSON.parse('"hello"');
console.log(s.toUpperCase()); // HELLO

🔹 Если это число

Методы:

    Обычная математика: +, *, Math.max(...).

    Пример:

let n = JSON.parse("42");
console.log(n + 8); // 50

🔹 Если это boolean (true/false)

Просто условие:

    let flag = JSON.parse("true");
if (flag) console.log("Да, true!");

🔹 Если это null

Обычно проверка:

    let val = JSON.parse("null");
if (val === null) console.log("Это null");


✅ То есть: JSON.parse просто возвращает обычные JS-значения.
    А дальше ты работаешь с ними так, как будто сам их создал.

 */