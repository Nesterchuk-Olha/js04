//Number: odd
{
let a = prompt('Введіть число');
let num = Number(a);
if (isNaN(num)) {
    console.log("Некоректне перетворення");
} else {
    console.log("Коректне перетворення");
}
if (num % 2 ===0) {
    console.log("Введене число є парним");
} else {
    console.log("Введене число є непарним");
}
}

//String: lexics
{
let str = prompt('Введіть текст');
if (str.includes("123") || str.includes("bad")){
    console.log("Є некоректні слова"); 
} else {
    console.log("Некоректних слів немає");
}
}

//Boolean
{
let answer_1 = confirm("Надворі літо?");
let answer_2 = confirm("Ви повнолітній(-я)?");
let answer_3 = confirm("Ви працюєте?");
}

//Boolean: if
{
let answer_1 = confirm("Надворі літо?");
let answer_2 = confirm("Ви повнолітній?");
let answer_3 = confirm("Ви працюєте?");
if (answer_1) {
    alert("Надворі літо");
} else {
    alert("Надворі не літо");
}
if (answer_2) {
    alert("Ви повнолітній");
} else {
    alert("Ви неповнолітній");
}
if (answer_3) {
    alert("Ви працюєте");
} else {
    alert("Ви безробітній");
}
}

//Comparison: sizes
//Перерахунок розміру верхнього одягу Великобританія -> США
{
let a = prompt('Введіть розмір вашого верхнього одягу (Великобританія)');
let b = a - 2;
if (a >= 8 && a <= 22) {
    alert(b); //Розмір США
} else {
    alert ("Такого розміру не існує");
}
}

//Перерахунок розміру жіночої білизни Великобританія -> США
{
let a = prompt('Введіть розмір вашої білизни (Великобританія)');
let b = a - 16;
if (a >= 24 && a <= 38) {
    alert(b); //Розмір США
} else {
    alert ("Такого розміру не існує");
}
}

//Перерахунок розміру носків Великобританія -> Європейські країни
{
let a = prompt('Введіть розмір ваших носків (Великобританія)');
let b = (a-8)/(0.5);
if (a >= 8 && a <= 11 && b % 0.5 === 0) {
    alert(b); //Розмір США
} else {
    alert ("Такого розміру не існує");
}
}

//Ternary
{
const message = confirm('Ви жінка?') ? "Ви жінка" : "Ви чоловік";
alert(message);
}

//Training
{
// bool type cast
!!2 //true
!!0 //false
!!1 //true
// or
2 || 1 //2
2 || 0 //0
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
confirm('left') || confirm('right')
confirm('left') && confirm('right')
//null, undefined, so on
null || 2 //2
undefined && 1 //underfined
alert("Hello") && confirm('Are you sexy?'); //underfined
alert("Hello") || confirm('Are you drunk?'); //Are you drunk?
//brackets and complex expressions
(undefined || 2) && (3 || 0) //3
(2 && 1) || (null && 0) // 1
(2 > 1) && "greater" //'greater'
(2 < 1) && null //false
null && (2 < 1) //null
// ternary operator
1 ? "one" : "not one" //one
0 ? "zero" : "not zero" //not zero
"0" ? "\"zero\"" : "not `zero`" //"zero"
parseInt("0") ? 'true' : 'false' //false
("" || 2) && (3 || "3.5") || (4 && 5) //3
(-1 + 1) && "zero" //0
"-1" + 1 && "oups" //oups
(typeof null === 'object') ? "null is object" : "null is null" //null is object
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' 
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a 
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' //prime
}

//Prompt: or
{
let a = prompt('Скільки Вам років?');
let b = 2023 - a;
if (a === null || a === "") {
    alert("false");
} else {
    alert(b);
}
}

//Confirm: or this days
{
confirm('Шопінг?') || alert('Ти-бяка');
}

//Confirm: if this day
{
let a = confirm('Шопінг?');
if (a === null || a === "") {
    alert("Ти-бяка");
} else {
    alert("Давай");
}
}

//Default: or
{
let name_1 = prompt('Введіть прізвище');
let name_2 = prompt('Введіть ім\'я');
let name_3 = prompt('Введіть по-батькові');
name_1 = name_1 || "";
name_2 = name_2 || "";
name_3 = name_3 || "";
console.log(name_1 + " " + name_2 + " " + name_3);
}

//Default: if
{
let name_1 = prompt('Введіть прізвище');
let name_2 = prompt('Введіть ім\'я');
let name_3 = prompt('Введіть по-батькові');
if (name_1 === null || name_1 === "") {
    name_1 = "";
} else {
    name_1;
}
if (name_2 === null || name_2 === "") {
    name_2 = "";
} else {
    name_2;
}
if (name_3 === null || name_3 === "") {
    name_3 = "";
} else {
    name_3;
}
console.log(name_1 + " " + name_2 + " " + name_3);
}

//Login and password
let login = prompt('Введіть логін');
if (login === "admin") {
    password = prompt('Введіть пароль');
}
if (password === "qwerty") {
    alert("Вітаю");
} else {
    alert("Помилка");
}

//Currency exchange
{
let currency = prompt("Введіть валюту (наприклад, USD, EUR, PLN)").toUpperCase();
let isBuying = confirm("Ви хочете купити цю валюту?");
let rate;
if (currency === "USD") {
  rate = isBuying ? 37.2 : 37.55;
} else if (currency === "EUR") {
  rate = isBuying ? 39.8 : 40.5;
} else if (currency === "PLN") {
  rate = isBuying ? 8.6 : 8.985;
} else {
  alert("Валюта не підтримується.");
}
let amount = prompt("Введіть суму для обміну:");
let result = isBuying ? amount / rate : amount * rate;
alert(`Ви отримаєте ${result.toFixed(2)} ${isBuying ? currency : "UAH"}`);
}

//Scissors
{
let user = prompt("Введіть: камінь, ножиці або папір");
if (user === null) {
    alert("Cкасовано");
} else {
    user.toLowerCase();
    if (user !== "камінь" && user !== "ножиці" && user !== "папір") {
        alert("Помилка");
    } else {
    let random = Math.random();
    let comp;
    if (random <0.33) {
        comp = "камінь";    
    } else if (random <0.66) {
        comp = "ножиці";    
    } else {
        comp = "папір"; 
    }
    alert ("Комп'ютер вибрав: " + comp);
    let winner;
    if (user === comp) {
        winner = "tie";
    } else if (
        (user === "камінь" && comp === "ножиці") ||
        (user === "ножиці" && comp === "папір") ||
        (user === "папір" && comp === "камінь"))
        {
            winner = "user";
        } else {
            winner = "computer"
        }
        if (winner === "user") {
            alert ("Ви перемогли!");
        } else if (winner === "computer") {
            alert ("Комп'ютер переміг");
        } else {
            alert ("Нічия!");
        }
    }
}
}