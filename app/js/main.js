//  "use strict" // современный режим(стандарт)

// const { type } = require("jquery")

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



// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }




// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let keyy in options[key]) {
//             console.log(`Свойства ${keyy} имеет значение ${options[key][keyy]}`)
//             counter++
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`)
//         counter++
//     }
// }
// console.log(options)
// console.log(counter)



// console.log(Object.keys(options).length) cокрщает код выше


// Деструктуризация

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test')
//     }
// }

// options.makeTest();


// const {border, bg} = options.colors
// console.log(border)


// Массивы

// const arr = [15, 2, 5, 22, 35]

// arr.sort(compareNum)
// console.log(arr)

// function compareNum(a, b) {
//     return a - b
// }
//  (название того чего перебираем, номер элемента, и где) эта коллбэк функция которая выполнится сначала, а уже потом сам каллбек
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// конец массива удаляет
// arr.pop();

// конец массива добавляет
// arr.push();


// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// в этом цикле можно использовать break & continue , а в forEach - нет
// for (value of arr) {
//     console.log(value)
// }


// const str = prompt('')
// const products = str.split(', ')
// products.sort();
// console.log(products.join('; '))



// let a = 5;
// let b = a;
// здесь же примитивы и передаётся по значению поэтому оно меняется

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }


// const copy = obj;  // объекты передаются по ссылке, это ссылка


// copy.a = 10

// console.log(copy);
// console.log(obj);




// копии объектов

// function copy(mainObj) {
//     let objCopy = {};

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }

//     return objCopy;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers);


// newNumbers.a = 10;

// console.log(newNumbers)
// console.log(numbers)





// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }


// const add = {
//     d: 17,
//     e: 20
// }


// console.log(Object.assign(numbers, add)) // объединяет 2 объекта , независимая поверхностая копия 


// const clone = Object.assign({}, add) // независимая поверхностая копия 

// clone.d = 20;


// console.log(add)
// console.log(clone)


// // создай копию массива

// const oldArray = ['a', 'b', 'c']
// const newArray = oldArray.slice();


// newArray[1] = 'asdsadsa'

// console.log(newArray)
// console.log(oldArray)


// // spead(разворот)

// const video = ['youtube', 'vimeo', 'rutube']
// const blogs = ['wordpress', 'livejournal', 'blogger']
// const internet = [...video, ...blogs, 'vk', 'facebook']



// console.log(internet)


// function log(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// const num = [2, 5, 7];

// log(...num)


// const array = ['a', 'b']

// const newArrayy = [...array]


// const q = {
//     one: 1,
//     two: 2,
//     three: {
//         four: 4,
//         five: 5
//     }
// }

// const qq = { ...q }
// qq.one = 2

// console.log(q)
// console.log(qq)


// let str = 'some';
// let strObj = new String(str)

// console.log(typeof (str))
// console.log(typeof (strObj))




// let tvLook;
// let personalMovieDB = {
//     start: function () {
//         personalMovieDB.count = +prompt("Сколько фильмов посмотрели?")
//         while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             tvLook = prompt("Сколько фильмов посмотрели?")
//         }
//         if (personalMovieDB.count < 10) {
//             alert('МАло')
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             alert('средне')
//         } else {
//             alert('много')

//         }
//     },
//     questions: function () {
//         for (i = 0; i < 2; i++) {
//             const filmLastQ = prompt("Последний фильм?");
//             const filmLastQReview = +prompt("Оценка фильма?");
//             if (filmLastQ != "" && filmLastQReview != "" && filmLastQ != null && filmLastQReview != null && filmLastQ.length < 10) {
//                 personalMovieDB.movies[filmLastQ] = filmLastQReview
//             } else {
//                 i--
//             }
//         }
//     },
//     count: 0,
//     movies: {},
//     actors: {},
//     writeGenres: function () {
//         for (i = 1; i <= 3; i++) {
//             let genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`);
//             if (genresAnswer == "" || genresAnswer == null) {
//                 i--
//             } else {
//                 personalMovieDB.genres[i - 1] = genresAnswer;
//             }
//         }
//         personalMovieDB.genres.forEach(function (item, i) {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`)
//         });
//     },

//     genres: [],
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false
//         } else {
//             personalMovieDB.privat = true
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB)

//         }
//     },
//     privat: false,
// };

// start()
// questions()

// personalMovieDB.start()
// personalMovieDB.questions()
// personalMovieDB.writeGenres()
// personalMovieDB.showMyDB(personalMovieDB.privat)
// personalMovieDB.toggleVisibleMyDB()


// 1) К строке

// console.log(typeof (String(null)));
// console.log(typeof (String(4)));

// 2) К строке (конкатинация)

// console.log(typeof (5 + ""));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);
// console.log(`https://vk.com/catalog/${num}`);


// const fontSize = 26 + 'px';
// console.log(fontSize)

// 3) К числу


// console.log(typeof (Number('4')));

// 3) К числу через унарный +

// console.log(typeof (+"5"));


//3) через метод parseInt


// console.log(typeof (parseInt('15px', 10))); // 10-ная система исчисления

// let answ = +prompt('hello', '');



// к Булиевуму значению

//false = 0, null, "", undefined, NaN
// всё остальное true


// console.log(typeof (Boolean(null)));

// 4)

// console.log(typeof (!!'pes'));

// alert('1'[0])

// console.log(!!(2 && 2))
// console.log(' \t \n' - 2)
// console.log(typeof (+'kek'))


// DOM


// const box = document.getElementById('box');


// console.log(box)


// const btns = document.getElementsByTagName('button')
// получить нужный элемент через индекс [1]
// const btns = document.getElementsByTagName('button')[1]
//or
// console.log(btns[1])


//  получаем псевдомассив

// console.log(btns)


// const circles = document.getElementsByClassName('cricle')


// const hearts = document.querySelectorAll('.heart')
// поддерживает любые комбинации селекторв такие же как и в CSS
// исключение из псевдомассив потому что у него есть метод forEach
// возвращает Node коллекцию ( узлы ) , а не HTML коллекцию
// hearts.forEach(item => {
// console.log(item)
// })

// const oneHeart = document.querySelector('.heart');
// находит первый элемент или подходящий под выборку
// console.log(oneHeart)


const box = document.getElementById('box')
const btns = document.getElementsByTagName('button')
const circles = document.getElementsByClassName('circle')
const wrapper = document.querySelector('.wrapper')
// const hearts = wrapper.querySelectorAll('.heart') // аналог кода ниже
const hearts = document.querySelectorAll('.heart')
const oneHeart = document.querySelector('.heart')



// console.dir(box)
// box.style.backgroundColor = 'blue'
// box.style.width = '250px';


//чтобы записать все свойства как в CSS
box.style.cssText = 'background-color: red; width: 250px';


// для динамического расчёта
// box.style.cssText = `${num}250px`;


btns[2].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'


// for (let i = 0; i < hearts.length; ++i) {
//     hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
})



const div = document.createElement('div')
// const text = document.createTextNode('Тут был я');


div.classList.add('black')

wrapper.append(div)
// wrapper.appendChild(div) устарело

// вставить перед
// hearts[0].before(div)
// hearts[0].insertBefore(div, hearts[0]) устарело

//вставить после
// hearts[0].after(div)

// circles[0].remove()
// wrapper.removeChild(hearts[1]) устарело


hearts[0].replaceWith(circles[0])
// wrapper.replaceChild(circles[0], hearts[0]) устарело


div.innerHTML = '<h1>Hello World</h1>'
// div.textContent = 'hello'
// div.innerText = "hello"


div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>')


