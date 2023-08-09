const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  // encontra o id referente a pessoa colaboradora
  const findId = employees.find((employee) => employee.id === id);
  const findSpecie = species.find((specie) => specie.id === findId.responsibleFor[0]);
  // array do animal mais velho
  const animal = findSpecie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(animal);
};
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = getOldestFromFirstSpecies;
