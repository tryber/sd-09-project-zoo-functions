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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  /*
if (ids === undefined) {
  return [];
}
const foundAnimals = ids.find(actualId => {
  return actualId === animal.id).animals.find((animal) =>{
})
  return foundAnimals;
})
}
*/
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
.find(animalName => animalName.name === animal).residents
.every(ageGiven => ageGiven.age >= age);
}
console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
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
