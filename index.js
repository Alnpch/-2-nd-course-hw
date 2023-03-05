// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

// Задание 2

const position = [1, 5, 4, 10, 0, 3];
 console.log(position.indexOf(4));
    
  // Задание 3

 let value = [1, 3, 5, 10, 20];
 
 value = value.join(' ');
 console.log(value);
 
 // Задание 4

 let arr = [];

 for (let a = 0; a < 3; a++) {
  arr.push([1, 1, 1]);
  arr.join(',');    
 }
 console.log(arr);
 
// Задание 5

arr = [1, 1, 1];

arr.push(2, 2, 2);
console.log(arr);

// Задание 6

arr = [9, 8, 7, 'a', 6, 5];

arr.sort();
arr.pop();
console.log(arr);

// Задание 7

const number = [9, 8, 7, 6, 5];

let userNumber = (prompt('Введите число от 1 до 10'));
let search = number.includes(+ userNumber );
console.log(search);

// Задание 8

 let rev = 'abcdef';

rev = rev.split('');
rev = rev.reverse();
rev = rev.join('');
 console.log(rev);
  
// Задание 9

 arr = [
    [1, 2, 3,],
    [4, 5, 6]
]
let arrayFirst = [1, 2, 3,];
let arraySecond =[4, 5, 6];
const newArray = arrayFirst.concat(arraySecond);
console.log(newArray);


 // Задание 10

 arrSum = [2, 4, 6, 8];
 for(let d = 0; d < arrSum.length ; d++ ) { 
    if (arrSum[d] == 8) break;
    console.log(arrSum[d + 1] + arrSum[d]);
 }

 // Задание 11

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let random = arr[Math.floor(Math.random() * arr.length)];
console.log(arr);
const even = arr.filter(el => el % 2 === 0);
console.log(even);


// Задание 12
arr = [1, 2, 3, 4, 5, 6];

random = arr[Math.floor(Math.random() * arr.length)];
const sum = arr.reduce((a, b) => (a +b)) / arr.length;
console.log(sum);
