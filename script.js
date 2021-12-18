'use strict';


const personalMovieDB = {
    start: function () {

        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {

        let genresValue;

        for (let i = 1; i <= 3; i++) {

            do {
                genresValue = prompt(`Ваш любимый жанр под номером ${i}`);
            } while (genresValue == null || genresValue == '');

            this.genres[i - 1] = genresValue;

        }

        this.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat === true) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};