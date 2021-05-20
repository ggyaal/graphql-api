const aMan = {
  name: "Lee",
  age: 22,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => aMan,
  },
};

export default resolvers;
