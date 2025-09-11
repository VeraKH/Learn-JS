console.log("10. Напиши функцию, которая принимает JSON строку и безопасно её парсит. Если парсинг невозможен"")

//Что может лежать в JSON (по стандарту) Объект: {"name": "Alex"} → вернётся JS-объект { name: "Alex" }.
//Массив: [1, 2, 3] → вернётся JS-массив [1, 2, 3].
//Строка: "hello" → вернётся JS-строка "hello".
// Число: 123 → вернётся JS-число 123.
// Булево: true → вернётся JS-значение true.
//null:  null → вернётся null.

//JSON.parse сам разбирает, что внутри, и возвращает правильный тип данных. Проверить можно через typeof или Array.isArray.
    
let jsonString = '{"name":"Alex","age":25}';
let badJSON = "{name: Alex, age: 25}"



function JSONParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.log("Invalid JSON:", e.message);
        return null;
    }
}

let obj = JSON.parse(jsonString);

console.log(obj.name); // "Alex"
console.log(obj.age);  // 25