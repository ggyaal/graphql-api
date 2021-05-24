import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (obj, { rating, limit }) => getMovies(limit, rating),
    movie: (obj, { id }) => getMovie(id),
    suggestions: (obj, { id }) => getSuggestions(id),
  },
};

export default resolvers;
