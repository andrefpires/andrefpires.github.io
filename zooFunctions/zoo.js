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
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 },
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
  },
  prices: {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
  }
};

// geral functions
const removeElements = (sectionName) => {
  const { found, notFound, errorMessage } = {
    found: document.querySelector(`#${sectionName}Found`),
    notFound: document.querySelector(`#${sectionName}NotFound`),
    errorMessage: document.querySelector('#errorMessage'),
  };

  if (found) {
    found.remove();
  } else if (notFound) {
    notFound.remove();
  } else if (errorMessage) {
    errorMessage.remove();
  }
}; // OK

const notFound = (sectionName) => {
  removeElements(sectionName);
  const checkElement = document.querySelector(`#${sectionName}NotFound`);
  const animalSearchResults = document.querySelector(`#${sectionName}SearchResults`);
  const messageNotFound = document.createElement('p');
  messageNotFound.innerText = 'O item não foi encontrado';
  messageNotFound.id = `${sectionName}NotFound`;
  if (checkElement) {
    checkElement.remove();
  }
  animalSearchResults.appendChild(messageNotFound);
}; // OK

const errorMessage = (sectionName) => {
  const idName = `#${sectionName}SearchResults`;
  const parentElement = document.querySelector(idName);
  const errorTextElement = document.createElement('p');
  errorTextElement.innerText = (
    'Campo necessário para busca vazio'
  );
  errorTextElement.id = 'errorMessage';
  parentElement.appendChild(errorTextElement);
}; // OK

const textModeler = (words) => {
  const text = words.reduce((acc, animal, index) => {
    if (index === words.length - 2) {
      acc += `${animal} `;
    } else if (words.length === 1) {
      acc += `${animal}.`;
    } else if (index === words.length - 1) {
      acc += `e ${animal}.`;
    } else {
      acc += `${animal}, `;
    }
    return acc;
  },'');

  return text;
}; // OK

// animals functions
const createAnimalResidents = ({ residents }) => {
  const titleResidentsElement = document.createElement('h3');
  titleResidentsElement.innerText = `Residents: ${residents.length}`;
  const divForResidents = document.querySelector('#animalResidents');
  divForResidents.appendChild(titleResidentsElement);

  residents.forEach((resident) => {
    const newResident = document.createElement('div');
    newResident.className = 'newResident';
    const residentName = document.createElement('h4');
    const residentSex = document.createElement('p');
    const residentAge = document.createElement('p');

    residentName.innerText = resident.name;
    residentSex.innerText = resident.sex;
    residentAge.innerText = resident.age;

    newResident.appendChild(residentName);
    newResident.appendChild(residentSex);
    newResident.appendChild(residentAge);

    divForResidents.appendChild(newResident);
  });
}; // OK

const createAnimalInformations = (informations) => {
  const animalSearchResults = document.querySelector('#animalSearchResults');
  const animalFound = document.createElement('div');
  animalFound.id = 'animalFound';
  const animalInformations = document.createElement('div');
  animalInformations.id = 'animalInformations';
  const animalResidents = document.createElement('div');
  animalResidents.id = 'animalResidents';

  animalSearchResults.appendChild(animalFound);
  animalFound.appendChild(animalInformations);
  animalFound.appendChild(animalResidents);

  const tagNames = ['h2', 'p', 'p'];
  const animalAtributes = ['name', 'location', 'popularity'];
  const animalsAndYourResponsibles = Object.entries(responsibleListCreator());
  const employeesResponsibles = document.createElement('p');

  const responsibles = [];

  animalsAndYourResponsibles
  .forEach(employeeAndAnimals => employeeAndAnimals[1]
    .find(animal => {
      if (animal === informations.name) {
        responsibles.push(employeeAndAnimals[0]);
      }
    })
  );

  employeesResponsibles.innerText = textModeler(responsibles);

  tagNames.map((tagName, index) => {
    const newElement = document.createElement(tagName);
    newElement.innerText = informations[animalAtributes[index]];
    animalInformations.appendChild(newElement);
  });

  animalInformations.appendChild(employeesResponsibles);

  createAnimalResidents(informations);
}; // OK

const newAnimal = (animalInformations) => {
  if (animalInformations === undefined) {
    notFound('animal');
  } else if (animalInformations.name === undefined) {
    notFound('animal');
  } else {
    createAnimalInformations(animalInformations);
  }
}; // OK

const animalsOlderThan = (event) => {
  removeElements('animal');
  let animalNameInput = event.target.previousSibling.previousSibling.lastChild.value;
  const animalAgeInput = parseFloat(event.target.previousSibling.lastChild.value);

  if (animalNameInput === '' || Number.isNaN(animalAgeInput)) {
    errorMessage('animal');
  } else {
    const animalObject = {};
    const { animals } = data;
    Object.assign(animalObject, animals.find(animal => (
      animal.name === animalNameInput.toLowerCase()
    )));

    if (animalObject.residents !== undefined) {
      const animalsFound = (
        animalObject.residents.filter(({ age }) => age >= animalAgeInput)
      );
      animalObject.residents = animalsFound;
    }

    newAnimal(animalObject);
  }
}; //Ok

const animalsByIds = ({ responsibleFor }) => {
  let arrayOfAnimalObjects = [];
  arrayOfAnimalObjects = responsibleFor.map(id => data.animals.find(animal => animal.id === id));
  return arrayOfAnimalObjects;
}; // OK

function animalMap(options) {
  // seu código aqui
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

// employees functions
const responsibleListCreator = () => {
  const listAnimals = {};
  const listEmployees = {};
  const { animals, employees } = data;

  animals.forEach(({ name, id }) => {
    listAnimals[name] = id;
  });

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const employeeFullName = `${firstName} ${lastName}`;
    listEmployees[employeeFullName] = responsibleFor;
  });

  const entriesAnimals = Object.entries(listAnimals);
  const entriesEmployees = Object.entries(listEmployees);

  const responsibleForList = (
    entriesEmployees.reduce((accumulator, currentValue) => {
      const animalsForEmployee = [];
      currentValue[1].forEach((element) => {
        entriesAnimals.forEach((arrAnimal) => {
          if (arrAnimal[1] === element) {
            animalsForEmployee.push(arrAnimal[0]);
          }
        });
      });
      accumulator[currentValue[0]] = animalsForEmployee;

      return accumulator;
    }, {})
  );

  return responsibleForList;
}; // OK

const managers = (ids) => {
  const nameOfManagers = data.employees.reduce((acc, { id: employeeId, firstName, lastName }) => {
    ids.forEach((id) => {
      if (employeeId === id) {
        acc.push(`${firstName} ${lastName}`);
      };
    })
    return acc;
  }, []);

  return nameOfManagers;
};

const createAnimalSearchArea = () => {
  const { checked } = document.querySelector('#inputForAnimals');
  const inputForEmployees = document.querySelector('#inputForEmployees');

  if (checked) {
    inputForEmployees.disabled = true;
    const divBodyPage = document.querySelector('#bodyPage');
    const sectionAnimal = document.createElement('section');
    sectionAnimal.id = 'animal';
    divBodyPage.appendChild(sectionAnimal);

    // animals
    const divAnimalSearchElements = document.createElement('div');
    divAnimalSearchElements.id = 'animalSearchElements';

    const divAnimalSearchResults = document.createElement('div');
    divAnimalSearchResults.id = 'animalSearchResults';
    
    const labelForName = document.createElement('label');
    labelForName.innerText = 'Nome:';
    const inputForName = document.createElement('input');
    inputForName.type = 'text';
    inputForName.placeholder = 'Escreva o nome do animal aqui';

    const labelForAge = document.createElement('label');
    labelForAge.innerText = 'Idade mínima:';
    const inputForAge = document.createElement('input');
    inputForAge.type = 'number';
    inputForAge.value = '0';

    const buttonSearchAnimal = document.createElement('button');
    buttonSearchAnimal.className = 'buttonSearchAnimal';
    buttonSearchAnimal.innerText = 'Ok';

    sectionAnimal.appendChild(divAnimalSearchElements);
    sectionAnimal.appendChild(divAnimalSearchResults);
    divAnimalSearchElements.appendChild(labelForName);
    labelForName.appendChild(inputForName);
    divAnimalSearchElements.appendChild(labelForAge);
    labelForAge.appendChild(inputForAge);
    divAnimalSearchElements.appendChild(buttonSearchAnimal);

    buttonSearchAnimal.addEventListener('click', animalsOlderThan);

  } else {
    const errorMessageValidation = document.querySelector('#errorMessage');
    if (errorMessageValidation) {
      errorMessageValidation.remove();
    }
    inputForEmployees.disabled = false;
    const sectionAnimal = document.querySelector('#animal');
    sectionAnimal.remove();
  }
};

const inputForAnimals = document.querySelector('#inputForAnimals');
inputForAnimals.addEventListener('click', createAnimalSearchArea);

const isManager = (id) => {
  const managersIds = data.employees.reduce((acc, { managers }) => {
    acc.push(...managers);
    return acc;
  }, []);
  const trueOrFalse = managersIds.some(managerId => managerId === id);
  return trueOrFalse;
};

const createEmployee = (newEmployee) => {
  if (newEmployee !== undefined) {
    const managerOrNotManager = isManager(newEmployee.id);
    const divEmployeeSearchResults = document.querySelector('#employeeSearchResults');
    const divFound = document.createElement('div');
    divFound.id = 'employeeFound';
    const employeeFullName = `${newEmployee.firstName} ${newEmployee.lastName}`;
    const employeeName = document.createElement('h3');
    let textEmployeeName = '';
    if (managerOrNotManager) {
      textEmployeeName = `${employeeFullName} (Manager)`;
    } else {
      textEmployeeName = `${employeeFullName}`;
    }

    const responsibleFor = animalsByIds(newEmployee);
    const animalsResponsibleFor = responsibleFor.map(element => element.name);

    const tagResponsibleFor = document.createElement('p');
    tagResponsibleFor.innerText = (
      `Responsável por: ${textModeler(animalsResponsibleFor)}`
    );

    const managersName = managers(newEmployee.managers);
    const tagManagersName = document.createElement('p');

    if (newEmployee.firstName === 'Stephanie') {
      textEmployeeName = `${employeeFullName} (Principal Manager)`;
    } else {
      tagManagersName.innerText = `Líderes: ${textModeler(managersName)}`;
    }

    employeeName.innerText = textEmployeeName;

    divEmployeeSearchResults.appendChild(divFound);
    divFound.appendChild(employeeName);
    divFound.appendChild(tagResponsibleFor);
    divFound.appendChild(tagManagersName);
  } 
  else {
    notFound('employee');
  }
};

const employeeByName = (event) => {
  removeElements('employee');
  const employeeName = event.target.previousSibling.lastChild;
  let obj = {};
  if (employeeName.value === '') {
    errorMessage(('employee'));
  } else {
    const { employees: arr } = data;
    obj = arr.find(({ firstName: a, lastName: b }) => (
      a === employeeName.value || b === employeeName.value || `${a} ${b}` === employeeName.value
    ));
    createEmployee(obj);
  }
};

const createEmployeesSearchArea = () => {
  const { checked } = document.querySelector('#inputForEmployees');
  const inputForAnimals = document.querySelector('#inputForAnimals');

  if(checked) {
    inputForAnimals.disabled = true;
    const divSearchAreasSelected = document.querySelector('#bodyPage');
    const sectionEmployee = document.createElement('section');
    sectionEmployee.id = 'employee';
    divSearchAreasSelected.appendChild(sectionEmployee);

    // employee
    const labelForFirstOrLastName = document.createElement('label');
    labelForFirstOrLastName.innerText = 'Nome:';
    const divEmployeeSearchElements = document.createElement('div');
    divEmployeeSearchElements.id = 'employeeSearchElements';
    const inputForFirstOrLastName = document.createElement('input');
    inputForFirstOrLastName.placeholder = 'Escreva o nome do funcionário';
    inputForFirstOrLastName.type = 'text';
    const buttonSearchEmployee = document.createElement('button');
    buttonSearchEmployee.id = 'buttonSearchEmployee';
    buttonSearchEmployee.innerText = 'Ok';
    const divEmployeeSearchResults = document.createElement('div');
    divEmployeeSearchResults.id = 'employeeSearchResults';

    sectionEmployee.appendChild(divEmployeeSearchElements);
    divEmployeeSearchElements.appendChild(labelForFirstOrLastName);
    labelForFirstOrLastName.appendChild(inputForFirstOrLastName);
    buttonSearchEmployee.addEventListener('click', employeeByName);
    divEmployeeSearchElements.appendChild(buttonSearchEmployee);
    sectionEmployee.appendChild(divEmployeeSearchResults);
  } else {
    inputForAnimals.disabled = false;
    const errorMessageValidation = document.querySelector('#errorMessage');
    const sectionEmployee = document.querySelector('#employee');
    sectionEmployee.remove();
    if (errorMessageValidation) {
      errorMessageValidation.remove();
    }
  }
};

const inputForEmployees = document.querySelector('#inputForEmployees');
inputForEmployees.addEventListener('click', createEmployeesSearchArea);

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

const entryCalculator = () => {
  removeElements('entrys');
  const entrants = {
    Adult: parseFloat(document.querySelector('#adult').value),
    Senior: parseFloat(document.querySelector('#senior').value),
    Child: parseFloat(document.querySelector('#child').value),
  };

  let sum = 0;

  if (typeof entrants === 'object') {
    const tCategory = Object.keys(entrants);
    const numberOfTickets = Object.values(entrants);

    tCategory.map((category, i) => {
      sum += data.prices[category] * numberOfTickets[i];
      return sum;
    });
  }

  if (sum || sum === 0) {
    const divEntrysSeaarchResults = document.querySelector('#pricesSearchResults');
    const pForSum = document.createElement('p');
    pForSum.innerText = `TOTAL: R$ ${sum}`;
    pForSum.id = 'entrysFound';
    divEntrysSeaarchResults.appendChild(pForSum);
  } else {
    errorMessage('prices');
  }
};

const buttonSearchPrices = document.querySelector('#buttonSearchPrices');
buttonSearchPrices.addEventListener('click', entryCalculator);

const schedule = () => {
  const dayName = document.querySelector('#scheduleInput').value;
  const arrHours = Object.entries(data.hours);
  const weekSchedule = arrHours.reduce((acc, day) => {
    acc[day[0]] = `${day[1].open}am - ${day[1].close - 12}pm`;
    return acc;
  }, {});
  weekSchedule.Monday = 'CLOSED';

  if (dayName === '') {
    scheduleTableCreator(weekSchedule);
  } else {
    const daySchedule = {};
    daySchedule[dayName] = weekSchedule[dayName];
    if (daySchedule[dayName] === undefined) {
      notFound('schedule');
    } else {
      scheduleTableCreator(daySchedule);
    }
  }
};

const scheduleTableCreator = (daysAndHours) => {
  removeElements('schedule');
  const scheduleTable = document.querySelector('#scheduleSearchResults');
  const tbody = document.createElement('tbody');
  tbody.id = 'scheduleFound';

  scheduleTable.appendChild(tbody);

  let days = Object.keys(daysAndHours);

  days.forEach((dayName) => {
    const universalTr = document.createElement('tr');
    const tdDay = document.createElement('td');
    tdDay.innerText = dayName;

    universalTr.appendChild(tdDay);

    const tdHour = document.createElement('td');
    tdHour.innerText = daysAndHours[dayName];

    universalTr.appendChild(tdHour);
    tbody.appendChild(universalTr);
  })
};

schedule();

const scheduleSearchButton = document.querySelector('#scheduleSearchButton');
scheduleSearchButton.addEventListener('click', schedule);

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

const employeeCoverage = (idOrName) => {
  const finalObject = responsibleListCreator();
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
