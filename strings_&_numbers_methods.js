let loginField = prompt('Login', 'Login');
let passwordField = prompt('Password', 'Password');
while ( loginField === '' || loginField === null ){
    loginField = prompt('Login', 'Login');
}
if ( loginField.toLowerCase() === 'vitalii' && passwordField === '12345' ) {
    alert('access accepted');
} else {
    alert('access denied');
}


let string = 'Vitalii Gorid';


let say = string.split(' ');
console.log(say[0]);

// let a; a.substr(5, 10); почне рызати строку з 5 номеру массива і вирыжі наступні 10 символів

let number = 12.5;
console.log(Math.round(number));

let test = 'width: 320px';
let windowWidth = test.split(' ');
console.log(parseInt(windowWidth[1]));

let test2 = '320.6px';
console.log(parseFloat(test2));