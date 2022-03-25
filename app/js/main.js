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










// let tvLook;
// let personalMovieDB = {
//     count: {},
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// start()
// questions()
// showMyDB(personalMovieDB.privat)
// writeYourGenres()
// function start() {
//     tvLook = +prompt("Сколько фильмов посмотрели?")
//     while (tvLook == "" || tvLook == null || isNaN(tvLook)) {
//         tvLook = prompt("Сколько фильмов посмотрели?")
//     }
//     if (tvLook < 10) {
//         alert('МАло')
//     } else if (tvLook > 10 && tvLook < 30) {
//         alert('средне')
//     } else {
//         alert('много')

//     }
// }
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }

// }

// function writeYourGenres() {
//     for (i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }



// function questions() {
//     for (i = 0; i < 2; i++) {
//         const filmLastQ = prompt("Последний фильм?");
//         const filmLastQReview = +prompt("Оценка фильма?");
//         if (filmLastQ != "" && filmLastQReview != "" && filmLastQ != null && filmLastQReview != null && filmLastQ.length < 10) {
//             personalMovieDB.movies[filmLastQ] = filmLastQReview
//         } else {
//             i--
//         }
//     }
// }


// function learnJS(lang, callback) {
//     console.log(`Я учусь!: ${lang}`);
//     callback();
// }                                                  // в виде аргумента передаётся другая функция которая и есть callback


// function done() {
//     console.log('Yes')
// }



// learnJS('хорошо', function () {
//     console.log('Yes')
// });

// learnJS('js', done)



const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}



let counter = 0;

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let keyy in options[key]) {
            console.log(`Свойства ${keyy} имеет значение ${options[key][keyy]}`)
            counter++
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`)
        counter++
    }
}
console.log(options)
console.log(counter)
