const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = species.find((specie) => specie.name === animal);
  // retorna true se algum eleemento satisfaz uma condição 
  return animals.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
