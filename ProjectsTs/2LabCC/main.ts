// Задание 1: Работа с массивами

// Одномерный массив: поиск минимального числа
function findMinimum(arr: number[]): number {
    if (arr.length === 0) throw new Error("Массив пуст");
    return Math.min(...arr);
}

// Двумерный массив: подсчет нулевых значенийсды
function countZeros(matrix: number[][]): number {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) count++;
        }
    }
    return count;
}

// Тестирование первого задания
console.log("=== Задание 1 ===");
const numbers = [3.14, 2.71, 1.41, 1.73, 2.23];
console.log("Минимальное число:", findMinimum(numbers));

const matrix = [
    [1, 0, 3],
    [0, 5, 0],
    [7, 0, 9]
];
console.log("Количество нулей в матрице:", countZeros(matrix));

// Задание 2: Работа с кортежем
type StringTuple = [string, string, string];

function concatenateStrings(tuple: StringTuple): string {
    return tuple[0] + tuple[1] + tuple[2];
}

// Тестирование второго задания
console.log("\n=== Задание 2 ===");
const stringTuple: StringTuple = ["Hello", ", ", "World!"];
console.log("Конкатенация строк:", concatenateStrings(stringTuple));

// Задание 3: Перечисление типов принтеров
enum PrinterType {
    InkJet = "Струйный",
    Laser = "Лазерный",
    LED = "Светодиодный",
    Matrix = "Матричный",
    Thermal = "Термальный"
}

// Тестирование третьего задания
console.log("\n=== Задание 3 ===");
console.log("Тип принтера:", PrinterType.Laser);

// Задание 4: Работа с классами и обобщенными типами
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

// Обобщенный метод для вывода информации о животном
function displayPetInfo<T extends Pet>(pet: T): void {
    const petInfo: any = {
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
const dog = new Dog();
const cat = new Cat();
displayPetInfo(dog);
displayPetInfo(cat);

// Задание 5: Создание типа с использованием перечисления
interface Printer {
    type: PrinterType;
    model: string;
    isColor: boolean;
    ppm: number; // pages per minute
    resolution: string;
    wireless: boolean;
    price: number;
}

// Создание объекта принтера
const printer: Printer = {
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