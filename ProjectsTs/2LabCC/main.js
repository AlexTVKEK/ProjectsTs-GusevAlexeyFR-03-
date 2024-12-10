// Задание 1: Работа с массивами
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Одномерный массив: поиск минимального числа
function findMinimum(arr) {
    if (arr.length === 0)
        throw new Error("Массив пуст");
    return Math.min.apply(Math, arr);
}
// Двумерный массив: подсчет нулевых значенийсды
function countZeros(matrix) {
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0)
                count++;
        }
    }
    return count;
}
// Тестирование первого задания
console.log("=== Задание 1 ===");
var numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
console.log("Минимальное число:", findMinimum(numbers));
var matrix = [
    [1, 0, 3],
    [0, 5, 0],
    [7, 0, 9]
];
console.log("Количество нулей в матрице:", countZeros(matrix));
function concatenateStrings(tuple) {
    return tuple[0] + tuple[1] + tuple[2];
}
// Тестирование второго задания
console.log("\n=== Задание 2 ===");
var stringTuple = ["Hello", ", ", "World!"];
console.log("Конкатенация строк:", concatenateStrings(stringTuple));
// Задание 3: Перечисление типов принтеров
var PrinterType;
(function (PrinterType) {
    PrinterType["InkJet"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439";
    PrinterType["Laser"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439";
    PrinterType["LED"] = "\u0421\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439";
    PrinterType["Matrix"] = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439";
    PrinterType["Thermal"] = "\u0422\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439";
})(PrinterType || (PrinterType = {}));
// Тестирование третьего задания
console.log("\n=== Задание 3 ===");
console.log("Тип принтера:", PrinterType.Laser);
// Задание 4: Работа с классами и обобщенными типами
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
// Обобщенный метод для вывода информации о животном
function displayPetInfo(pet) {
    var petInfo = {
        type: pet instanceof Dog ? 'Dog' :
            pet instanceof Cat ? 'Cat' : 'Pet',
        name: pet.name,
        age: pet.age,
        voice: pet.speak()
    };
    if (pet instanceof Dog) {
        petInfo.label = pet.label; // Прямое присваивание свойства
    }
    console.log(petInfo);
}
// Тестирование четвертого задания
console.log("\n=== Задание 4 ===");
var dog = new Dog();
var cat = new Cat();
displayPetInfo(dog);
displayPetInfo(cat);
// Создание объекта принтера
var printer = {
    type: PrinterType.Laser,
    model: "HP LaserJet Pro M404dn",
    isColor: false,
    ppm: 38,
    resolution: "1200x1200 dpi",
    wireless: true,
    price: 299.99
};
// Тестирование пятого задания
console.log("\n=== Задание 5 ===");
console.log("Информация о принтере:");
console.log(JSON.stringify(printer, null, 2));
