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
const { animals, employees, prices } = require('./data');
const data = require('./data');

// Projeto refeito após revisão realizada pelo Márcio Daniel e Paulo Simões da
// T-8 em 15/02.
function animalsByIds(ids) {
  // verifica se o array está vazio
  if(!ids) {
    return []
  }
  return animals.filter(animal => animal.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // find: busca por animal / every: analisa a idade e compara se for maior dar
  // falso.
  return animals.find(SearchAnimal => SearchAnimal.name === animal)
  .residents.every(AgeAnimal => AgeAnimal.age >= age);

}

function employeeByName(employeeName) {
  if(!employeeName) {
    return {}
  }
  return employees.find(employeesId => (employeesId.firstName === employeeName)
  || (employeesId.lastName === employeeName));
}

//console.log(employeeByName('Nigel'))

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = ({ ...personalInfo, ...associatedWith});
  return newEmployee;
  // Spread sendo aplicado para "espalhar" as informações dadas por parâmtro
}
// console.log(createEmployee((['Kamila'])))




function isManager(id) {
  return employees.some(employee => employee.managers
  .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animalZoo = {};
  animals.forEach(animal => (animalZoo[animal.name] = animal.residents.length));
  if (species) {
    return animalZoo[species];
  }
  return animalZoo;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  //  Object.entries() retorna um array cujos elementos são também arrays
  // correspondentes aos pares de propriedades [key, value];
  return Object.entries(entrants).reduce((accPrices,
    [ticketPersonKey, pricesVal]) => (
    accPrices + (prices[ticketPersonKey] * pricesVal)
  ), 0);
}
// exercicios abaixos feitos assistindo os plantões do Oliva
function animalMap(options) {
//   const locations = retrieveAvailableLocations();

//   const {includeNames = false, sex, sorted = false } = options;

//   if (includeNames) {
//     return retrieveAnimalsPerLocationWithName(locations);
//   }

//   return retrieveAnimalPerLocation(locations)

// }

// function retrieveAnimalsPerLocationWithName(locations, sorted, sex) {
//   const animalsPerLocation = {};

//   locations.forEach(location => {
//     const filteredAnimals = animals
//     .filter(animal => animal.location === location)
//     .map(animal => {
//       const nameKey = animal.name;
//       const nameValue = animal.residents
//       .map( resident => resident.name);
//       if (sorted) {
//         nameValue.sort()
//       }
//       return { [nameKey]: nameValue }
//     });
//     animalsPerLocation[location] = filteredAnimals;
//   });
//   return animalsPerLocation;
// }

// function retrieveAnimalPerLocation(locations) {
//   const animalsPerLocation = {};

//   locations.forEach(location => {
//     const filteredAnimals = animals
//     .filter(animal => animal.location === location)
//     .map(animal => animal.name);
//     animalsPerLocation[location] = filteredAnimals;
//   });
//   return animalsPerLocation;
// }
// function retrieveAvailableLocations() {
//   return ['NE', 'NW', 'SE', 'SW'];
}

function schedule(dayName) {
  const hours = data.hours;
  const allDays = Object.keys(hours);
  const schedules = {};
  allDays.forEach((day) => {
    function change24HoursFormatTo12Format(hour) {
      const formattedHour = hour - 12;
      return formattedHour < 0 ? hour : formattedHour;
    }
    const { open, close } = hours[day];

    if (open === 0 && close === 0) {
      schedules[day] = 'CLOSED';
    } else {
      schedules[day] = `Open from ${open}am until ${change24HoursFormatTo12Format(close)}pm`;
    }
  });
  if (dayName === undefined) {
    return schedules;
  }
  return { [dayName]: schedules[dayName] };
}
schedule('Tuesday');

function oldestFromFirstSpecies(id) {
  // resgatando o id do funcionário
  const employeesId = employees.find(employee => employee.id === id);
  // encontrando a primeira especie de animal gerenciado por um funcionário
  const [animalFirstForEmployees] = employeesId.responsibleFor;
  const animalList = animals.find(currAnimal => currAnimal.id === animalFirstForEmployees);
  const animalOld = animalList.residents.reduce((accAge, curAge) => (
    curAge.age > accAge.age ? curAge : accAge
  ));
  return Object.values(animalOld);
}


function increasePrices(percentage) {
  // seu código aqui
}
// Questões resolvidas no plantão com Murilo e Bernardo
function getAnimalListFromEmplyee(employee) {
  return employee.responsibleFor.map(
    animalId => animals.find(animal => animalId === animal.id).name);
  // ['id1', 'id2'] => ['lion', 'tinger']
}
function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
  return employees.reduce((accumulator, employee) => {
    const animalList = getAnimalListFromEmplyee(employee);
    accumulator[getEmployeeFullName(employee)] = animalList;
    return accumulator;
  }, {});
}
function getEmployeedByNameOrId(idOrName) {
  return employees.find(
    employee =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);
}

function employeeCoverage(idOrName) {
  // Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais são responsáveis
  if (!idOrName) {
    // firstName, lastName de employees, responsibleFor
    return getAllEmployeesAndAnimals();
  }
  const targetEmployee = getEmployeedByNameOrId(idOrName);
  const animalList = getAnimalListFromEmplyee(targetEmployee);
  const key = getEmployeeFullName(targetEmployee);
  return { [key]: animalList };
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
