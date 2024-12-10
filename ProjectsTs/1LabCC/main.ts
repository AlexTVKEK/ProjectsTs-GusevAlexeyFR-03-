// Задание 1
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(3, 4));

// Задание 2
const age: number = 19;
let userName: string = "berries";
const isStudent: boolean = true;
const hobbies: [string, string, string] = ["кушать", "спать", "пить"];
let user: { id: number; username: string } = { id: 1, username: "berries" };
const address: null = null;
let anything: any = "Что угодно? ООО ДА это просто Чиловый парень!";
let unknownType: unknown = 52;

console.log(age, userName, isStudent, hobbies, user, address, anything, unknownType);

// Задание 3
interface Entity {
   id: number;
}

interface ToJsonStringify extends Entity {
   e1?: number | null;
   e2?: string | null;
}

const data: ToJsonStringify = {
   id: 5,
   e1: 666,
   e2: null
};

// Преобразование в JSON-строку
const jsonString: string = JSON.stringify(data);
console.log(jsonString);
