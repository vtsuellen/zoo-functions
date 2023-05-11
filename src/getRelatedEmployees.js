// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employee) => employee.managers.includes(id));
  // const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  // const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  // const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// if (id === stephanieId || id === olaId || id === burlId) {
//   return true;
// }
// return false;

const getRelatedEmployees = (managerId) => {
// const manager = isManager;
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
