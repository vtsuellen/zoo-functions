const { employees, species } = require('../data/zoo_data');

// const getEmployees = (param) =>
//   employees.find(
//     (employee) =>
//       employee.firstName === param ||
//       employee.lasterName === param ||
//       employee.id === param
//   );

const getEmployee = employees.map((element) => {
  const object = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map(
      (id) => species.find((specie) => specie.id === id).name,
    ),
    locations: element.responsibleFor.map(
      (id) => species.find((specie) => specie.id === id).location,
    ),
  };
  console.log(object);
  return object;
});

const getEmployeesCoverage = (param) => {
  if (!param) return getEmployee;

  const validação = getEmployee.find((element) =>
    element.fullName.includes(Object.values(param))
|| element.id.includes(Object.values(param)));
  if (!validação) throw new Error('Informações inválidas');
  return validação;
};

module.exports = getEmployeesCoverage;
