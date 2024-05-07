// задача

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres(){
    for ( let i = 1; i <= 3; i++ ){
       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)        
    }
}

writeYourGenres();

console.log(personalMovieDB);

function showMyDB(){
    if  ( personalMovieDB.privat === false ){
        console.log(personalMovieDB);
    }
}

showMyDB();

function rememberMyFilms(){
    for ( let i = 0; i < 2; i++ ){
        let a = prompt('Один из последних просмотренных фильмов?', '',);
        let b = prompt('На сколько оцените его?', '');
        
        if ( a !== null && b !== null && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }    
}

rememberMyFilms();

function detectPersonalLevel(){
    if ( personalMovieDB.count < 10 ){
        alert('Просмотрено довольно мало фильмов');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
        alert('You so cool watcher');
    } else if (personalMovieDB.count > 31){
        alert('You amazing! 30+');
    } else {
        alert('Error');
    }
}

detectPersonalLevel();



function calculateVolumeAndArea(a) {
    let value = a * a * a;
    let square = (a * a) * 6;
    let result = `Объем куба: ${value}, площадь всей поверхности: ${square}`;
    if ( typeof(a) === 'string' || a % 1 !== 0 ){
        result = 'При вычислении произошла ошибка';
    }
    return result;
}

console.log(calculateVolumeAndArea(15.5));


let obj = {
    1: [1,2,3,4],
    2: [5,6,7,8],
    3: [9,10,11,12],
    4: [13,14,15,16],
    5: [17,18,19,20],
    6: [21,22,23,24],
    7: [25,26,27,28],
    8: [29,30,31,32],
    9: [33,34,35,36]
}

function getCoupeNumber(a){

    if ( typeof(a) === 'string' || a < 0 || a % 1 != 0 ){
        console.log('"Ошибка. Проверьте правильность введенного номера места"');
    } else if ( a === 0 || a > 36 ) {
        console.log('Таких мест в вагоне не существует');
    } else {
        for ( let i = 1; i <= 9; i ++){
            for ( let k = 0; k <= 3; k++ ){
                if ( obj[i][k] === a ) {
                    return i;
                }
            }
            
        }
    }
    
}
// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" -
// оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
//Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


function getTimeFromMinutes(data) {

    if ( typeof(data) === 'number' && Number.isInteger(data) && data > 0 ){
        let hours;
        let minutes;
        let hoursQuantity;
        console.log(Number.isInteger(data));

        if ( data < 60 ) {
            hours = 0;
            minutes = data;
            hoursQuantity = 'часов';
        } else if ( data > 59 && data < 120 ){
            hours = 1;
            minutes = data % 60;
            hoursQuantity = 'час';
        } else if ( data >= 120 && data < 400 ){
            hours = data / 60;
            minutes = data % 60;
            hoursQuantity = 'часа';
        } else if ( data >= 400 && data <= 600){
            hours = data / 60;
            minutes = data % 60;
            hoursQuantity = 'часов';
        } else {
            console.log('Ошибка, проверьте данные');
        }
        
        let result = `Это ${Math.floor(hours)} ${hoursQuantity} и ${minutes} минут`;
        console.log(result);
        return result;

    } else {
        console.log('Ошибка, проверьте данные')
    }

    
}

getTimeFromMinutes();
console.log(160 / 60);

console.log(Number.isInteger(4.5));

function findMaxNumber(a, b, c, d){
    if ( a, b, c, d !== undefined && Number.isFinite(a)){
        return Math.max(a, b, c, d);
    } else {
        return 0;
    }
}

//findMaxNumber(1, 2, 3, 4);

console.log(findMaxNumber('1', 2, 3, 4));

//a !== undefined && b !== undefined && c !== undefined && d !== undefined
//Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c) && Number.isFinite(d)
console.log(Number.isFinite('2'));

function fib(a) {

    let first = 0;
    let second = 1;
    let result = `${first} ${second}`;

    if ( Number.isInteger(a) && a > 1 && Number.isFinite(a) ){
        let sum;
        for ( let i = 2; i < a; i++ ){
            sum = first + second;
            result += ` ${sum}`;
            first = second;           
            second = sum;
        }
        return result;
    } else if ( a === 1 ){
        return result = '0';
    } else {
        return result = '';
    }
 
}
console.log(fib(1));


function count(start, callback){
    
    while ( start < 11 ){
        console.log(start);
        start++;
    }    
    callback();
}

function countFinish(){
    return console.log('WE FINISHED');
}

count(7, countFinish);


let object = {
    a: 1,
    b: 2, 
    c: 3,
    d: 4
}

for ( let key in object ){
    console.log(`${key}: ${object[key]}`);
}