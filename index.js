// 1 задание

let i = 0;
while (i <= 2) {
    console.log('Привет');
 i++;   
}

// 2 задание

r = 1;
while (r <= 5) {
    console.log(r);
    r++;
}

// 3 задание

a = 7;
while (a <= 22) {
    console.log(a);
    a++;
}

// 4 задание

const obj = {
	'Коля':'200',
    'Вася':'300',
    'Петя':'400'
};
for (let salary in obj) {   
    console.log('${obj[salary]} - зарплата  ${salary} долларов.');
    }
  
// 5 задание  

let n = 1000;
let nam = 0;
while (n>=50) {
    n/=2;
    nam++;
    console.log(n);
}

// 6 задание

for (let Friday = 5; Friday <= 31 ; Friday++) {
    Friday += 7;
    alert('Сегодня пятница, ${Friday} -е число. Необходимо подготовить отчет.');
}