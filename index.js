let a = 10;
alert(a);
a = 20;
alert(a);
let iphone = 2007;
alert(iphone);
let founder = 'Brendan Eich';
alert(founder);
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);
let result = 2 ** 5;
alert(result);
a = 9;
let b = 2;
alert(a % b);
let nam = 1;
nam += 5;
nam -= 3;
nam *= 7;
nam /= 3;
nam++;
nam--; 
alert(nam);
let age = Number (prompt("Сколько вам лет?"));
alert(age);
const user = {
	name: 'Alina',
	age: 21 ,
    isAdmin: true
};
user['city of residence'] = 'Moscow';
user.age = 23;
delete user['city of residence'];
let info = prompt("Что вы хотите узнать о пользователе?");
alert(user[info]);
let userName = prompt(("Введите ваше имя"));
let greeting = 'Привет,';
result = (greeting + userName + '!');
alert(result);