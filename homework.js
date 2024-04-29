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

    if ( typeof(a) === 'string' || a < 0  ){
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
getCoupeNumber();
console.log(getCoupeNumber(1));