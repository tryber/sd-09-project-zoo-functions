/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  const retorna = data.animals.filter(animal => ids.includes(animal.id));
  return retorna;
}

function animalsOlderThan(animal, age) {
  const animalOlder = data.animals.find(especimen => especimen.name === animal);
  return animalOlder.residents.every(especimen => especimen.age > age);
}

function employeeByName(employeeName) {
  const retorno = data.employees.find(unit => unit.firstName === employeeName || employeeName);
  if (employeeName){
    return retorno;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const retorna = data.employees.some(admin => admin.managers.includes(id));
  return retorna;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const retorno = data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return retorno;
}

function animalCount(species) {
  let especimens = {};
  data.animals.forEach((animal) => {
    if (!species) {
      especimens[animal.name] = animal.residents.length;
    } else {
      const animalserched = data.animals.find(unit => unit.name === species);
      especimens = animalserched.residents.length;
    }
  });
  return especimens;
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
