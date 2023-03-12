// задание 1
const getResult = (callback) => {
    let arr =[2, 3];
    callback();
  
}
const sum = () => {
    let arr =[2, 3, 4];
console.log(arr.reduce((a, b) => a + b)); 
}
const mult = () => {
    let arr =[2, 3, 4];
console.log( arr.reduce((a, b) => a * b));
}

getResult(sum);
getResult(mult);

// задание 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
 
const getSortedArrayObj = (a, b) => {
   return (a.age - b.age)
}
users.sort(getSortedArrayObj); 
console.log(users);

// задание 3


const each = (callback) => {
  callback();   
}
const arrRevers = () => {
    const arr = [1, '4', 9, 'two'];
   console.log(arr.reverse());   
}
const toNumberArr = () => {
    const arr = [1, '4', false, 9, 'two'];
    result = arr.map(el => (Number(el)));
  
   
    
    console.log(result);
}
each(arrRevers);
each(toNumberArr);

// задание 4


const timer = (myDate) => {
    myDate = new Date();
    console.log(myDate);
    const idInterval = setInterval(() => {
        myDate = new Date();
        console.log(myDate);
    }, 3000);
    setTimeout(() => {
        clearInterval(idInterval);
        console.log('30 секунд прошло');
    }, 30000); 
}
timer();

// задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
};

function talk() {
    console.log('Разговор');
    
};
calling();
beeps(talk);


