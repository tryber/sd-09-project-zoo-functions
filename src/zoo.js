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

function animalsByIds(...ids) {
  // seu código aqui
  // comparar ids passadas como parametros com ids do objeto;
  // retornar as ids que forem iguais;
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, idade) {
  // seu código aqui
  // retorna true or false
  // testa se todas as espécies do animal possuem idade >= age;
  const objectName = animals.filter(({ name }) => animal === name);
  const objectResidents = objectName[0].residents;
  return objectResidents.every(({ age }) => age >= idade);
}

function employeeByName(employeeName) {
  // seu código aqui
  // sem parametros retorna um obj vazio;
  // passado o primeiro nome do func. retorna o obj do func. ;
  // passado o último nome do func. retorna o obj do func. ;
  if (!employeeName) return {};
  return employees.filter(({ firstName, lastName }) =>
  employeeName === firstName || employeeName === lastName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // funcao cria um obj semelhante a de uma pessoa colaboradora e retorna-o;
  // personalInfo: obj com as propriedades id, firstName e lastName;
  // associatedWith: recebe obj contendo dois arrays: managers e responsiblefor;
  /* funcao: cria um novo colaborador a partir de obj contendo:
  personalInfo, managers e responsiblefor; */

  return { ...personalInfo, ...associatedWith };
}

function isManager(id = 0) {
  // seu código aqui
  // Testa se o ID passado é um gerente;
  // Retorna um boolean;
  const managersArray = employees.map(({ managers }) =>
  managers).reduce((prev, curr) => {
    curr.forEach(element => prev.push(element));
    return prev;
  }, []);

  // SOLUÇÃO ALTERNATIVA
  // const managers = employees.map(({ managers }) => managers).flat();
  return managersArray.indexOf(id) !== -1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // funcao add nova pessoa colaboradora no array employees;
  // add no fim da lista;
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employees;
}

function animalCount(species) {
  // seu código aqui
  // conta o total de animais;
  // sem parametros retorna objeto com chave: nome & valor: quantidade;
  // nome de uma especie retorna numero total dessa especie;
  if (species) {
    const speciesDefined = animals.find(({ name }) =>
    species === name).residents.length;
    return speciesDefined;
  }
  const speciesUndefined = {};
  animals.forEach(animal =>
  (speciesUndefined[animal.name] = animal.residents.length));
  return speciesUndefined;
}

function entryCalculator(entrants) {
  // seu código aqui
  /* parametro entrants recebe { child, adult, senior }
  com numero total de visitantes de cada chave; */
  // retorna 0 se nenhum arg. for passado;
  // retorna 0 se {};
  // retorna o preço total a ser cobrado;
  if (!entrants) return 0;
  return Object.keys(entrants).map(element =>
  entrants[element] * prices[element]).reduce((acc, cur) => acc + cur, 0);
}

function noOptions() {
	const result = { NE: [], NW: [], SE: [], SW: [] };

	result['NE'] = animals.filter(({ location }) => location === 'NE').map(({ name }) => name);
	result['NW'] = animals.filter(({ location }) => location === 'NW').map(({ name }) => name);
	result['SE'] = animals.filter(({ location }) => location === 'SE').map(({ name }) => name);
	result['SW'] = animals.filter(({ location }) => location === 'SW').map(({ name }) => name);

	return result;
}

function addPerRegion( { sorted = false, sex: genre = false }) {
	const result = { NE: [], NW: [], SE: [], SW: [] };
	const speciesAndTheirNames = [];
	animals.forEach(animal => {
		let specieNames = [];
		if (!genre) {
			specieNames = animal.residents.map(({ name }) => name);
		}
		else {
			specieNames = animal.residents.filter(({ sex }) => genre === sex).map(({ name }) => name);
		}
		if (sorted) {
			specieNames.sort();
		}
			const species = {};
			species[animal.name] = specieNames;
			speciesAndTheirNames.push(species);
	});

	animals.filter(({ location }) => location === 'NE').map(({ name }) => name).forEach(specie =>
	result['NE'].push(speciesAndTheirNames.find(element => element[specie])));
	animals.filter(({ location }) => location === 'NW').map(({ name }) => name).forEach(specie =>
	result['NW'].push(speciesAndTheirNames.find(element => element[specie])));
	animals.filter(({ location }) => location === 'SE').map(({ name }) => name).forEach(specie =>
	result['SE'].push(speciesAndTheirNames.find(element => element[specie])));
	animals.filter(({ location }) => location === 'SW').map(({ name }) => name).forEach(specie =>
	result['SW'].push(speciesAndTheirNames.find(element => element[specie])));

	return result;
}

function animalMap(options) {
  // seu código aqui
  // mapeamento das especies e animais;
  // filra por ordem alfabetica e genero;
  // sem parametros: retorna animais categorizados por localizacao;
  // includeNames = true, retorna nomes de animais;
  // sorted = true, retorna nomes de animais ordenados alfabeticamente;
	// sex = female ou sex = male, retorna somente os animais do genero;
	if (!options || !options.includeNames) {
		return noOptions();
	}
		return addPerRegion(options);
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
