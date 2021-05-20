import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (obj, { name, score }) => addMovie(name, score),
    deleteMovie: (obj, { id }) => deleteMovie(id),
  },
};

export default resolvers;
