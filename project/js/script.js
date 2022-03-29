/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


// my solution

// 'use strict';

// const movieDB = {
//     movies: [
//         "Р",
//         "А",
//         "С",
//         "Б",
//         "Х",
//     ]
// };


// const promos = document.querySelector('.promo__adv')
// const promosImage = promos.querySelectorAll('img')
// promosImage.forEach(img => {
//     img.remove()
// })
// document.querySelector('.promo__genre').textContent = "драма"
// document.querySelector('.promo__bg').style.backgroundImage = 'url(img/bg.jpg)'

// const list = document.querySelector('.promo__interactive-list')
// const listItems = list.querySelectorAll('li')


// listItems.forEach(li => {
//     li.remove()
// })


// for (let i = 0; i < movieDB.movies.length; i++) {
//     const newLi = document.createElement('li')
//     newLi.classList.add('promo__interactive-item')
//     movieDB.movies.sort()
//     newLi.textContent = `${i + 1} - ${movieDB.movies[i]}`
//     list.append(newLi)

// }


// resolution from lesson

'use strict'

const movieDB = {
    movies: [
        "Р",
        "А",
        "С",
        "Б",
        "Х",
    ]
};


const adv = document.querySelectorAll('.promo__adv img')

adv.forEach(item => {
    item.remove()
})

const poster = document.querySelector('.promo__bg')
const genres = poster.querySelector('.promo__genre')

genres.textContent = 'драма'

// кавычки должны быть всегд разные если используются внутри
poster.style.backgroundImage = 'url("img/bg.jpg")'



const movieList = document.querySelector('.promo__interactive-list')
// console.log(movieList)

movieList.innerHTML = ""
movieDB.movies.sort()


// позволяет получать элементы со страницы
// console.log(poster.innerHTML);



movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `
})






