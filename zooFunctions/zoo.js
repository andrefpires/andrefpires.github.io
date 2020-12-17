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
const data = {
  animals: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46']
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
      ]
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274']
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        '0938aa23-f153-4937-9f88-4858b24d6bce']
    }
  ],
  hours: {
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 }
  },
  prices: {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
  }
};

const errorMessage = () => {
  const tagDivApp = document.querySelector('.app');
  const error = document.createElement('p');
  error.innerText = 'Faltando valor';
  error.id = 'errorMessage';
  tagDivApp.appendChild(error);
}

const removeElements = () => {
  const verifyTagDivGeral = document.querySelector('#geral');
  const errorMessage = document.querySelector('#errorMessage');

  if (verifyTagDivGeral !== null) {
    verifyTagDivGeral.remove();
  } else if (errorMessage !== null) {
    errorMessage.remove();
  }
}

const animalCount = (species) => {
  if (species === undefined) {
    const obj = {};
    data.animals.forEach((animal) => { obj[animal.name] = animal.residents.length; });
    return obj;
  }

  const residents = data.animals.find(animal => animal.name === species).residents.length;
  return residents;
};

const createResidents = ({ residents }) => {
  const tagh3 = document.createElement('h3');
  tagh3.innerText = `Residents: ${residents.length}`;
  const tagDivResidents = document.querySelector('#residents');
  tagDivResidents.appendChild(tagh3);

  residents.forEach((resident) => {
    const newResident = document.createElement('div');
    newResident.className = 'newResident';
    const tagForName = document.createElement('h4');
    const tagForSex = document.createElement('p');
    const tagForAge = document.createElement('p');

    tagForName.innerText = resident.name;
    tagForSex.innerText = resident.sex;
    tagForAge.innerText = resident.age;

    newResident.appendChild(tagForName);
    newResident.appendChild(tagForSex);
    newResident.appendChild(tagForAge);

    tagDivResidents.appendChild(newResident);
  });
};

const createAnimal = (informations) => {
  const tagDivAnimalInformations = document.querySelector('#animalInformations');
  const tagNames = ['h2', 'p', 'p'];
  const animalAtributes = ['name', 'location', 'popularity'];

  tagNames.map((tagName, index) => {
    const newElement = document.createElement(tagName);
    newElement.innerText = informations[animalAtributes[index]];
    tagDivAnimalInformations.appendChild(newElement);
  })

  createResidents(informations);
};

const notFound = () => {
  const animalsInformations = document.querySelector('#geral');
  const messageNotFound = document.createElement('p');
  messageNotFound.innerText = 'Not Found';
  messageNotFound.id = 'notFound';
  animalsInformations.appendChild(messageNotFound);
}

const newAnimal = (animalInformations) => {
  const tagDivApp = document.querySelector('.app');
  const tagDivGeral = document.createElement('div');
  tagDivGeral.id = 'geral';
  const tagDivAnimalInformations = document.createElement('div');
  tagDivAnimalInformations.id = 'animalInformations';
  const tagDivResidents = document.createElement('div');
  tagDivResidents.id = 'residents';

  tagDivApp.appendChild(tagDivGeral);
  tagDivGeral.appendChild(tagDivAnimalInformations);
  tagDivGeral.appendChild(tagDivResidents);

  if (animalInformations === undefined) {
    notFound();
  } else if (animalInformations.name === undefined) {
    notFound();
  } else {
    createAnimal(animalInformations);
  }
};

const animalsOlderThan = (event) => {
  removeElements();
  let animal = event.target.parentNode.childNodes[1].firstChild.nextSibling.value;
  const age = parseFloat(event.target.parentNode.childNodes[3].firstChild.nextSibling.value);
  if (animal === '' || Number.isNaN(age)) {
    errorMessage();
  } else {
    const animalsResidents = {};
    Object.assign(animalsResidents, data.animals.find(element => element.name === animal));
    if (animalsResidents.residents !== undefined) {
      const animalsFound = animalsResidents.residents.filter(resident => resident.age >= age);
      animalsResidents.residents = animalsFound;
    }

    newAnimal(animalsResidents);
  }
};

const animalsByIds = (event) => {
  removeElements();
  let arrReturned = [];
  const ids = [event.target.previousElementSibling.value];
  if (ids[0] === '') {
    errorMessage();
  } else {
    arrReturned = ids.map(id => data.animals.find(animal => animal.id === id));
    arrReturned.forEach(animal => newAnimal(animal));
  }
};

const buttonByName = document.querySelector('.button-byName');
buttonByName.addEventListener('click', animalsOlderThan);

const buttonById = document.querySelector('.button-byId');
buttonById.addEventListener('click', animalsByIds);

const employeeByName = (employeeName) => {
  let obj = {};
  if (typeof employeeName === 'string') {
    const { employees: arr } = data;
    obj = arr.find(({ firstName: a, lastName: b }) => a === employeeName || b === employeeName);
  }
  return obj;
};

const createEmployee = (personalInfo, associatedWith) => {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
};

function isManager(id) {
  // seu código aqui
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(newEmployee);
};

const entryCalculator = (entrants) => {
  let sum = 0;

  if (typeof entrants === 'object') {
    const tCategory = Object.keys(entrants);
    const numberOfTickets = Object.values(entrants);

    tCategory.map((category, i) => {
      sum += data.prices[category] * numberOfTickets[i];
      return sum;
    });
  }

  return sum;
};

function animalMap(options) {
  // seu código aqui
}

const schedule = (dayName) => {
  const arrHours = Object.entries(data.hours);
  const weekSchedule = arrHours.reduce((acc, day) => {
    acc[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    return acc;
  }, {});
  weekSchedule.Monday = 'CLOSED';

  if (dayName === undefined) {
    return weekSchedule;
  }

  const daySchedule = {};
  daySchedule[dayName] = weekSchedule[dayName];
  return daySchedule;
};

const oldestFromFirstSpecies = (idEmployee) => {
  const { animals, employees } = data;
  const employeeFound = employees.find(employee => employee.id === idEmployee);
  const specieFound = animals.find(({ id }) => id === employeeFound.responsibleFor[0]);
  const oldestAge = specieFound.residents.reduce((arr, curr) => {
    if (arr < curr.age) {
      arr = curr.age;
    }
    return arr;
  }, 0);
  const animalFound = specieFound.residents.filter(animal => animal.age === oldestAge);
  const valuesAnimalFound = Object.values(animalFound[0]);

  return valuesAnimalFound;
};

const decimalAdjust = (price) => {
  price = price.split('');
  const decimalPartString = price[4] + price[5];
  const decimalPartNumber = parseInt(decimalPartString, 10);
  const decimalNumber = decimalPartNumber / 10;
  const roundedDecimalNumber = Math.ceil(decimalNumber);
  price.pop();
  price.pop();
  let roundedPrice = '';
  price[4] = roundedDecimalNumber;
  price.forEach((number) => {
    roundedPrice += number;
  });

  roundedPrice = parseFloat(roundedPrice);
  return roundedPrice;
};

// A função decimalAdjust foi feita a partir do exemplo de ajuste decimal:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

const increasePrices = (percentage) => {
  const entries = Object.entries(data.prices);
  const multiplier = percentage / 100;
  const newPrices = entries.map((array) => {
    let increasePrice = array[1];
    increasePrice += array[1] * multiplier;
    const fixedIncreasePrice = increasePrice.toFixed(3);
    return fixedIncreasePrice;
  });

  newPrices.forEach((newPrice, i) => {
    data.prices[entries[i][0]] = decimalAdjust(newPrice);
  });
};

const employeesNamesAndAnimals = () => {
  const listAnimals = {};
  const listEmployees = {};
  const { animals, employees } = data;

  animals.forEach(({ name, id }) => {
    listAnimals[name] = id;
  });

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const employee = `${firstName} ${lastName}`;
    listEmployees[employee] = responsibleFor;
  });

  const entriesAnimals = Object.entries(listAnimals);
  const entriesEmployees = Object.entries(listEmployees);

  const employeesNamesAndAnimalsObject = entriesEmployees.reduce((acc, curr) => {
    const animalsForEmployee = [];
    curr[1].forEach((element) => {
      entriesAnimals.forEach((arrAnimal) => {
        if (arrAnimal[1] === element) {
          animalsForEmployee.push(arrAnimal[0]);
        }
      });
    });
    acc[curr[0]] = animalsForEmployee;

    return acc;
  }, {});

  return employeesNamesAndAnimalsObject;
};

const employeeCoverage = (idOrName) => {
  const finalObject = employeesNamesAndAnimals();
  if (idOrName !== undefined) {
    const a = idOrName;
    const employee = data.employees
      .find(({ id, firstName, lastName }) => id === a || firstName === a || lastName === a);
    const { firstName, lastName } = employee;
    const keyAndValue = `${firstName} ${lastName}`;
    const employeeFound = { [keyAndValue]: finalObject[keyAndValue] };

    return employeeFound;
  }

  return finalObject;
};

// Agradeço a ajuda de @loren-gt, @danwhat, @isaacbatst e @mhamaji que deram muitas dicas e
// mostraram soluções diferentes fazendo com que conseguisse desenvolver a lógica
// da função employeeCoverage

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
