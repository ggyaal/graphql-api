export const people = [
  {
    id: 1,
    name: "Kim",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Lee",
    age: 21,
    gender: "male",
  },
  {
    id: 3,
    name: "Park",
    age: 17,
    gender: "female",
  },
  {
    id: 4,
    name: "Chei",
    age: 23,
    gender: "female",
  },
  {
    id: 5,
    name: "Chang",
    age: 16,
    gender: "male",
  },
  {
    id: 6,
    name: "Won",
    age: 21,
    gender: "female",
  },
  {
    id: 7,
    name: "Chung",
    age: 26,
    gender: "female",
  },
];

export const getById = (id) => {
  const getPeople = people.filter((people) => people.id === id);
  return getPeople[0];
};
