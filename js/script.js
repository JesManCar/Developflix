import peliculas from './peliculas.js'

const actionFilms_DIV = document.getElementById("genero-28");
const thrillerFilms_DIV = document.getElementById("genero-53");
const adventureFilms_DIV = document.getElementById("genero-12");

peliculas.map((f) => {

    if (f.genre_ids.includes(28)) actionFilms_DIV.insertAdjacentHTML("afterbegin",`<div class="unique_film"><img class="poster" src=https://image.tmdb.org/t/p/w500/${f.poster_path}></img><p>${f.original_title}</p></div>`)
    if (f.genre_ids.includes(53)) thrillerFilms_DIV.insertAdjacentHTML("afterbegin",`<div class="unique_film"><img class="poster" src=https://image.tmdb.org/t/p/w500/${f.poster_path}></img><p>${f.original_title}</p></div>`)
    if (f.genre_ids.includes(12)) adventureFilms_DIV.insertAdjacentHTML("afterbegin",`<div class="unique_film"><img class="poster" src=https://image.tmdb.org/t/p/w500/${f.poster_path}></img><p>${f.original_title}</p></div>`)
})