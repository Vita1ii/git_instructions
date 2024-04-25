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


