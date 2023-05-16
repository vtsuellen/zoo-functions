const data = require('../data/zoo_data');

const countEntrants = (entrants) =>
  entrants.reduce(
    (acc, pessoa) => {
      if (pessoa.age < 18) {
        acc.child += 1;
        return acc;
      }
      if (pessoa.age >= 18 && pessoa.age < 50) {
        acc.adult += 1;
        return acc;
      }
      if (pessoa.age >= 50) {
        acc.senior += 1;
        return acc;
      }
      return acc;
    }, { child: 0, adult: 0, senior: 0 },
  );

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) return 0;
  return countEntrants(entrants).adult * 49.99
  + countEntrants(entrants).senior * 24.99 + countEntrants(entrants).child * 20.99;
};

// adult: 49.99,
// senior: 24.99,
// child: 20.99,
module.exports = { calculateEntry, countEntrants };
