// задание 1
function comparison(a, b) {
    if (a <= b) {
      return a;
        
    } else {
      return b;
    }
}

let result = comparison(4, 8);
console.log(result);

result = comparison(6, 6);
console.log(result);

//задание 2
const calc = (a) => {
    a % 2 == 0 ? console.log( 'Число четное') : console.log('Число нечетное' );   
}
calc(5);

// задание 3
const calсSquare = (b) => { 
    result = b ** 2;
    console.log(result);
    return b ** 2;
}   
calсSquare(2);

// задание 4

const greeting = () => {
    let userAnswer = (prompt('Сколько вам лет?'));
    if (userAnswer < 0) {
        alert('Вы ввели неправильное значение');   
    } else if (userAnswer <= 12) {
        alert('Привет, друг!');    
    } else {
     alert('Добро пожаловать!');  
    }
}
greeting();

// задание 5
let a;
let b;
const checkNumber = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return  console.log(a * b);
    } else {
        return console.log('Одно или оба значения не являются числом'); 
    } 
}
checkNumber(4, 4);
checkNumber(4, 'four');

// задание 6
const userInteraction = () => {
    let request  = (prompt('Введите число'));

    if (!isNaN(request)) {
        return alert(`${request} в кубе равняется ${request ** 3} `);
        
    } else {
        return alert('Переданный параметр не является числом');
    }
}
userInteraction();

// задание 7
const checkSeason = () => {
    let n =(prompt('Введите номер месяца (от 1 до 12)'));

    if (n <= 0 || isNaN(n) || n >= 13 ) {
        return alert('Упс, такого месяца не сущесвует');

    } else if (n <= 2 || n == 12 && !isNaN(n) ) {
      return alert('Зима'); 

    } else if (n <= 5 && !isNaN(n)) {
        return alert('Весна'); 

    } else if (n <= 8 && !isNaN(n)) {
        return alert('Лето');

    } else if (n <= 11 && !isNaN(n)) {
        return alert('Осень');

    } 
}
