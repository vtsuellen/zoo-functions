const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  } else {
    return ids.map((id) => {
      return species.find((specie) => {
        return specie.id === id;
      });
    });
  }
};

module.exports = getSpeciesByIds;

// map manipular e construir array
// find encontrar o primeiro elemento que atende a uma determinada condição
// ... Spread Operator nos permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto