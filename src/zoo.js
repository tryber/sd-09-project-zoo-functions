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
  // seu código aqui

  return animals.filter(animal =>
    ids.find(element => element === animal.id));
}

function animalsOlderThan(animal, age) {
  const { residents } = data.animals.find(species => species.name === animal);
  return residents.every(specimen => specimen.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const managers = employees.some(employee =>
    employee.managers.some(manager => manager === id));

  return managers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const NewEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(NewEmployees);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const objAnimal = {};
    animals.forEach(animal => (objAnimal[animal.name] = animal.residents.length));
    return objAnimal;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  let fullPrice = 0;
  if (entrants === undefined) {
    return 0;
  }
  Object.keys(entrants).forEach((key) => { fullPrice += data.prices[key] * entrants[key]; });
  return fullPrice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = employees.find(employee => employee.id === id).responsibleFor[0];
  const specie = animals.find(animal => animal.id === specieId);
  let oldestAge = 0;
  let oldestResident = [];
  specie.residents.forEach((resident) => {
    if (resident.age > oldestAge) {
      oldestAge = resident.age;
      oldestResident = [resident.name, resident.sex, resident.age];
    }
  });
  return oldestResident;
}

function increasePrices(percentage) {
  // seu código aqui
  const priceChange = 1 + (percentage / 100);
  const objPricenew = Object.keys(data.prices);
  objPricenew.forEach((price) => {
    data.prices[price] = Math.round((data.prices[price] * priceChange) * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const answer = {};
  let helper;
  let holder;
  if (idOrName) {
    helper = [data.employees.find(person => person.id === idOrName ||
      person.firstName === idOrName || person.lastName === idOrName)];
  } else helper = data.employees;
  helper.forEach((person) => {
    holder = { [`${person.firstName} ${person.lastName}`]:
      person.responsibleFor.map(id => data.animals.find(tag => tag.id === id).name) };
    Object.assign(answer, holder);
  });
  return answer;
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
