'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

if (numberOfFilms<10){
console.log('Просмотрено довольно мало фильмов');
}else if (numberOfFilms>=30){
console.log('Вы киноман');
}else if (10<=numberOfFilms<=30){
console.log('Вы классический зритель');
}else {console.log('Error');}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: falseб,
    
}

for (let i=1;i<2; i++){
const lastWatchingFilm = prompt('Один из последних просмотренных фильмов?',''),
      gradeOfFilm = prompt('На сколько оцените его?','');

      if (lastWatchingFilm != null && lastWatchingFilm!='' && lastWatchingFilm.length<50 && gradeOfFilm != null && gradeOfFilm!='' && gradeOfFilm.length<50){
            personalMovieDB.movies[lastWatchingFilm]=gradeOfFilm;
      }else{
        console.log('Error');
        i--;
      }
    
}
// let i=0
// while (i<2){
//     i++;
//     const lastWatchingFilm = prompt('Один из последних просмотренных фильмов?',''),
//           gradeOfFilm = prompt('На сколько оцените его?','');
    
//           if (lastWatchingFilm != null && lastWatchingFilm!='' && lastWatchingFilm.length<50 && gradeOfFilm != null && gradeOfFilm!='' && gradeOfFilm.length<50){
//                 personalMovieDB.movies[lastWatchingFilm]=gradeOfFilm;
//           }else{
//             console.log('Error');
//             i--;
//           }
        
//     }

// console.log(personalMovieDB);
// let i=0
// do {
//     i++;
//     const lastWatchingFilm = prompt('Один из последних просмотренных фильмов?',''),
//           gradeOfFilm = prompt('На сколько оцените его?','');
    
//           if (lastWatchingFilm != null && lastWatchingFilm!='' && lastWatchingFilm.length<50 && gradeOfFilm != null && gradeOfFilm!='' && gradeOfFilm.length<50){
//                 personalMovieDB.movies[lastWatchingFilm]=gradeOfFilm;
//           }else{
//             console.log('Error');
//             i--;
//           }
        
//     }
// while (i<2)

console.log(personalMovieDB);