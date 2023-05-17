const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  // encontra o id referente a pessoa colaboradora
  const findId = employees.find((employee) => employee.id === id);
  const findSpecie = species.find((specie) => specie.id === findId.responsibleFor[0]);
  // array do animal mias velho
  const animal = findSpecie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(animal);
};
module.exports = getOldestFromFirstSpecies;
