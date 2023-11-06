console.log("Задание 1\n\n");
let v1 = prompt("Введите ваше имя", "");
if (v1.length > 5) {
    console.log("Длинное имя");
} else {
    console.log("Короткое имя");
}
console.log("\n\n\n");

console.log("Задание 2\n\n");

let v2 = prompt("Введите ваше имя", "");
var catNames = [
    "Барсик",
    "Мурзик",
    "Вася",
    "Лиза",
    "Миша",
    "Том",
    "Снежок",
    "Кэти"
];

var dogNames = [
    "Рэмбо",
    "Рекс",
    "Белла",
    "Лука",
    "Барни",
    "Джек",
    "Лейла",
    "Макс"
];
let flag = 0;
for (let i = 0; i < 8; i++) {
    if (v2 == catNames[i]) {
        console.log("Вы кот");
        flag = 1;
    } else if (v2 == dogNames[i]) {
        console.log("Вы собакен");
        flag = 1;
    }
}
if (flag == 0) {
    console.log("Вы человек");
}

console.log("\n\n\n");

console.log("Задание 3\n\n");

let v3 = prompt("Введите день (на английском)", "");

let arr = [
    { day: "monday", breakfast: "pasta", go_to: "college" },
    { day: "tuesday", breakfast: "salad", go_to: "college" },
    { day: "wednesday", breakfast: "flakes", go_to: "college" },
    { day: "thursday", breakfast: "pasta", go_to: "college" },
    { day: "friday", breakfast: "salad", go_to: "college" },
    { day: "saturday", breakfast: "flakes", go_to: "theater" },
    { day: "sunday", breakfast: "salad", go_to: "sinema" },
];

flag = 0;
for (let i = 0; i < 7; i++) {
    if (v3 == arr[i].day) {
        console.log("you will be eat", arr[i].breakfast, "and then you will go to the", arr[i].go_to);
        if (arr[i].go_to == "college") {
            window.open('https://www.ci.nsu.ru/');
        } else if (arr[i].go_to == "theater") {
            window.open('https://novat.ru/');
        } else {
            window.open('https://www.kino-mir.ru/');
        }
        flag = 1;
    }
}
if (flag == 0) {
    console.log("incorrect day input");
}

console.log("\n\n\n");

console.log("Задание 4\n\n");

var v4 = prompt("Введите дату (например, YYYY-MM-DD):");
var significantDate = new Date(v4);
var currentDate = new Date();

// Рассчитываем разницу в днях
var timeDifference = (currentDate - significantDate) / (1000 * 60 * 60 * 24);

console.log("Дней прошло с вашей значимой даты: " + Math.floor(timeDifference) + " дней.");


