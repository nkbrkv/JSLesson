'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let adv = document.querySelectorAll('.promo__adv img');
    let list = document.querySelector('.promo__interactive-list');
    let genre = document.querySelector('.promo__genre');
    let bg = document.querySelector('.promo__bg');

    const btn = document.querySelector('.add').querySelector('button');
    const del = document.querySelectorAll('.promo__interactive-item');

    const form = document.querySelector('form.add');
    const input = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type="checkbox"]');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    // remove advertisement
    const removeAdv = (adv) => {
        adv.forEach(item => item.remove());
    };

    // change the genre name and background image 
    const changeElements = () => {
        genre.textContent = 'драма';
        bg.style.background = `url('../img/bg.jpg') center center/cover no-repeat`;
    };

    // Update list of films
    function updateListOfFilms(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, i) => {

            if (film.length > 21) {
                film = `${film.substring(0, 22)}...`;
            }

            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {

                btn.parentElement.remove();
                films.splice(i, 1);

                updateListOfFilms(films, parent);
            });
        });
    }

    function sortArray(arr) {
        arr.sort();
    }


    form.addEventListener('submit', event => {

        event.preventDefault();

        if (input.value) {
            movieDB.movies.push(input.value);
            sortArray(movieDB.movies);
            updateListOfFilms(movieDB.movies, list);
        }

        event.target.reset();

    });

    // Run program

    removeAdv(adv);
    changeElements();
    updateListOfFilms(movieDB.movies, list);


});