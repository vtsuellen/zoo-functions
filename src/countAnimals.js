const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const result = {};
  if (!animal) {
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  const findSpecie = species.find((specie) => specie.name === animal.species);
  const findBySex = findSpecie.residents
    .filter((elemento) => elemento.sex === animal.sex);

  if (animal.sex) return findBySex.length;
  return findSpecie.residents.length;
};
console.log(countAnimals({ species: 'giraffes' }));
module.exports = countAnimals;
