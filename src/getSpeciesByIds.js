const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => species.find((specie) => specie.id === id));
};

module.exports = getSpeciesByIds;

// map manipular e construir array
// find encontrar o primeiro elemento que atende a uma determinada condição
// ... Spread Operator nos permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto
