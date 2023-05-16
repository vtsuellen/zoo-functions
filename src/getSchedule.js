// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const cronograma = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [
      'tigers',
      'otters',
      'frogs',
      'snakes',
      'elephants',
      'giraffes',
    ],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday', 'Sunday'];

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) return cronograma;
  // find pra procurar specie do parametro
  const especie = data.species.find((specie) => specie.name === scheduleTarget);
  // find para se tiver o day do parametro
  const dia = days.find((day) => day === scheduleTarget);
  if (especie) {
    return especie.availability;
  }
  if (!especie && !dia) return cronograma;
  return { [scheduleTarget]: cronograma[scheduleTarget] };
};
console.log('Sunday');
//   Tuesday: { open: 8, close: 6 },
//   Wednesday: { open: 8, close: 6 },
//   Thursday: { open: 10, close: 8 },
//   Friday: { open: 10, close: 8 },
//   Saturday: { open: 8, close: 10 },
//   Sunday: { open: 8, close: 8 },
//   Monday: { open: 0, close: 0 },
// },
module.exports = getSchedule;
