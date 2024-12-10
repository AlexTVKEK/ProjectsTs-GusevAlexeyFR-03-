// Задание 1
var multiply = function (a, b) { return a * b; };
console.log(multiply(3, 4));
// Задание 2
var age = 19;
var userName = "berries";
var isStudent = true;
var hobbies = ["кушать", "спать", "пить"];
var user = { id: 1, username: "berries" };
var address = null;
var anything = "Что угодно? ООО ДА это просто Чиловый парень!";
var unknownType = 52;
console.log(age, userName, isStudent, hobbies, user, address, anything, unknownType);
var data = {
    id: 5,
    e1: 666,
    e2: null
};
// Преобразование в JSON-строку
var jsonString = JSON.stringify(data);
console.log(jsonString);
