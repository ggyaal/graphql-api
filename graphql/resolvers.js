import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (obj, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
