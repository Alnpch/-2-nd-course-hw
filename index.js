// Задание 1

let m = 'js';
console.log(m.toUpperCase());

// Задание 2
const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
animals.forEach(animal => {
    if (animal.toLowerCase().includes(search.toLowerCase())) {
        
	console.log([animal]);
	}  
 });

// Задание 3

let value = 32.58884;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));


// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
const random = () => {
    return Math.round(Math.random() * (10 - 1)) + 1;
}
console.log(random());

// Задание 6
const getRandomArrNumbers = (randomNumber) => {
    let sixthArray = [];
    let arrLength = Math.round(randomNumber / 2)
    for (let i = 0; i < arrLength; i++) {
    sixthArray.push(Math.round(Math.random() * randomNumber));    
}
    console.log(sixthArray);

}    

(getRandomArrNumbers(8));

// Задание 7

const randomValue = (a, b) => {
    return Math.round(Math.random() * (a - b)) + b;
}
console.log(randomValue(5, 10));

// Задание 8

let myDate = new Date();
console.log(myDate); 

// Задание 9

let currentDate = new Date();
currentDate.setDate(73);
console.log(currentDate);

// Задание 10

myDate = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
 "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

 const date = () => {
   return   myDate.getDate() + " " + months[myDate.getMonth()] +
 " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] +
 " " + myDate.getHours() + " часов" + " " + myDate.getMinutes() + " минут" +
  " " + myDate.getSeconds()+ " секунд";
 
     
 }
 console.log(date());

// задания к сайту
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


// задание 11
const checkFruits = () => {
  
let list =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(`Запомните порядок элементов ${ list}`);

let userAnswer =(prompt('Чему равнялся первый элемент массива?'));
let userAnswerTwo = (prompt('Чему равнялся последний элемент массива?'));

if (userAnswer.toLowerCase() == list[0].toLowerCase() && userAnswerTwo.toLowerCase() == list[6].toLowerCase()) {
    alert('Поздравляю, вы угадали оба элемента');
} else if (userAnswer.toLowerCase() == list[0].toLowerCase() || userAnswerTwo.toLowerCase() == list[6].toLowerCase()) {
    alert('Вы были близки к победе!'); 
} else {
alert('Вы не угадали ни одного элемента');
    
}
 }




