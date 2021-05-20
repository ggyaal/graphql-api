import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (obj, { id }) => getById(id),
  },
};

export default resolvers;
