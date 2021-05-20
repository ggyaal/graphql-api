import fetch from "node-fetch";

const MOVIE_API = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let movie_api = MOVIE_API;

  if (limit > 0 && limit < 51) {
    movie_api += `limit=${limit}`;
  }

  if (rating > 0) {
    movie_api += `&minimum_rating=${rating}`;
  }

  return fetch(movie_api)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
