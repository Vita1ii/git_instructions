let n = 1022;

if (n === 10) {
    console.log('true');
} else if (n !== 10) {
    console.log('false');
} else {
    console.log('do u love me again?');
}

// у світч можна указувати тільки строге порівняння, більше або менше не можно
// default - потрібен для того щоб прописати логіку для непередбаченних кейсами логік

switch (n){
    case 1: 
        console.log('no');
        break;
    case 10:
        console.log('yes');
        break;
    case 100: 
        console.log('debil');
        break;
    default:
        console.log('why?');
        break;    
}

// оператор && повертаэ останнє правдиве значення чи перше хибне 
// нижче у коды, коли выдпрацюэ змінна zer, скріпт припине виконання і виведе значення false, бо 0 = false
let num = 2,
    lum = 5,
    zer = 0;

if ( num && zer && lum ) {
    console.log('true');
} else {
    console.log('false');
}

// в наступному прикладі оператор порівняння відпрацює до кінця бо усі значення вірні, тобто true. Також, як результат порівняння буде видан останній істинний операнд, тобто "5"
let numOne = 2,
    lumOne = 5;

if ( numOne && lumOne ) {
    console.log('true');
    console.log(( numOne && lumOne ));
} else {
    console.log('false');
}


// Шаблонные строки (``) намного проще писать и читать
const username = "Anna";
// Динамические значения вставляются с помощью выражения ${}
const greeting = `Hi ${username}, how are you?`;


// continue - завершує ітерацію циклу і переходить до наступної, пропускаючи поточну
// break - завершує ітерацію циклу і закінчує роботу з циклом
let userName = 'Vitalii';

for (let i = 0; i < 10; i++) {
    if ( i === 2 || i === 7 ) {
        continue;
    } else if ( i === 9) {
        break;
    }
    console.log(`Hi, ${userName}, your number in queue is ${i}`);
}

// += перезаписує значення змінної

let i = 0;
i += 10;
console.log(i);

// на прикладі циклу
let queue = 0;
const length = 10;

for (let i = 0; i < length; i++){
    queue += 1; //кожну ітерацію циклу до змінної queue додаэться 1. Отже, консольлог видасть "1,2,3,4,5...10"
    console.log(queue);
}

//11 12 13 21 22 23 31 32 33

for (let i = 1; i < 4; i++){
    for (let k = 1; k < 4; k++){
        console.log(`${i}${k}`);
    }
}



