
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if ( personalMovieDB.count < 10 ){
    alert('Просмотрено довольно мало фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
    alert('You so cool watcher');
} else if (personalMovieDB.count > 31){
    alert('You amazing! 30+');
} else {
    alert('Error');
}

first: for ( let i = 0; i < 2; i++ ){
    let a = prompt('Один из последних просмотренных фильмов?', '',);
    let b = prompt('На сколько оцените его?', '');
    for ( let k = 0; k < 1; k++ ){
        if ( a === null && b === null ){
            console.log("ebannui stud");  
        }
    }
  
    personalMovieDB.movies[a] = b;
}

