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
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age2) {
  const teste = animals.filter(({ name }) => animal === name);
  const teste2 = teste[0].residents;
  return teste2.every(({ age }) => age >= age2);
}

function employeeByName(name) {
  let emply = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (emply === undefined) {
    emply = {};
  }
  return emply;
}

function createEmployee(personalInfo, associatedWith) {
  const object = {
   id: personalInfo.id,
   firstName: personalInfo.firstName,
   lastName: personalInfo.lastName,
   managers: associatedWith.managers,
   responsibleFor: associatedWith.responsibleFor };
  return object;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
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
