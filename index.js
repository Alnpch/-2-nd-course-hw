// задание 1
let password = 'пароль';

let logIn = (prompt('Введите пароль'));

if (password == logIn) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}


// задание 2
let c = 2;
if ( c > 0 && c < 10) { 
    console.log('Верно');
    
} else {
    console.log('Неверно');
}
// проверила со всеми значениями, работает, но пишет True или False


// задание 3
let d = 101;
let e = 99;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');


// задание 4
let a = 2;
let b = 3;
alert(a + b);


// задание 5
let  monthNumber = Number (prompt('Введите номер месяца'));

switch ( monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;                                  
    default: console.log( 'такого месяца не сущесвует');
        break;
}


// задание 7
let value = Number (prompt('Пожалуйста, введите любое число'));
alert(value);
if (value %2===0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// задание 8
let clientOS = 1 || 0;
if (clientOS = 1) {
    alert('Установите версию приложения для Android по ссылке');
} else if (clientOS = 0) {
   alert('Установите версию приложения для iOS по ссылке'); 
} 

// задание 9
let clientDeviceYear = 2015;
clientOS = 1 || 0;
let message = prompt('Введите год выпуска вашего телефона' );
if ((message < clientDeviceYear ) && (clientOS = 1)) {
    alert('Установите облегченную версию приложения для Android по ссылке')
} else if ((message > clientDeviceYear ) && (clientOS = 0)){
  alert('Установите облегченную версию приложения для iOS по ссылке')  
}
else
{ alert('Установите наше приложение');
}