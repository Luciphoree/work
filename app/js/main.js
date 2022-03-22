//  "use strict" // современный режим(стандарт)

// let number = 15 // присваивание переменной Number числа 15
// let NUmber = 15 // уже разные переменные ( регистр ), переменная изменяемая
// const BLUE = "blue" // константа не изменяется
// хороший тон - использовать const где это возможно
// const obj = {
//     a: 50
// }                // не будет ошибкой, так как прямых констант в JS не бывает

// obj.a = 10;


// var name = "Ivan"  // общая область видимости, изменяемая + всплытие(хостинг)

// console.log(name) //  undefined выведется потому что общая область видимости, то есть видна даже до объявления
// var name = "Ivan" 

// {
//     let result = 50;  // если объявить в блоке кода, то будет видна только в нём
// }


const tvLookQ = +prompt("Сколько фильмов посмотрели?")
const tvLook = tvLookQ

const filmLastQ = prompt("Последний фильм?");
const filmLastQReview = +prompt("Оценка фильма?");
const filmLastQ2 = prompt("Последний фильм?");
const filmLastQ2Review = +prompt("Оценка фильма?");





const personalMovieDB = {
    count: tvLook,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[filmLastQ] = filmLastQReview;
personalMovieDB.movies[filmLastQ2] = filmLastQ2Review;

console.log(personalMovieDB)


