const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const resultado = {};
  if (!animal) {
    data.species.forEach((specie) => {
      resultado[specie.name] = specie.residents.length;
    });
    return resultado;
  }
  const encontraSpecie = species.find((specie) => specie.name === animal.species);
  const encontraBySex = encontraSpecie.residents
    .filter((elemento) => elemento.sex === animal.sex);

  if (animal.sex) return encontraBySex.length;
  return encontraSpecie.residents.length;
};
console.log(countAnimals({ species: 'giraffes' }));
module.exports = countAnimals;
