let {
  textModeler,
  responsibleListCreator,
  animalCount,
  oldestFromFirstSpecies,
  managersList,
  isManager,
  employeeCoverage,
  decimalAdjust,
} = require('./zoo');

describe('zooFunctions', () => {
  const employees = ['Nigel Nelson', 'Burl Bethea', 'Emery Elser'];

  it('Função textModeler', () => {
    const textResponse = 'Nigel Nelson, Burl Bethea e Emery Elser.';

    expect(textModeler(employees)).toBeDefined();
    expect(textModeler(employees)).toStrictEqual(textResponse);
    expect(typeof textModeler(employees)).toBe('string');
  });

  const responsibleList = {
    "Nigel Nelson": ["lions","tigers"],
    "Burl Bethea": ["lions","tigers","bears","penguins"],
    "Ola Orloff": ["otters","frogs","snakes","elephants"],
    "Wilburn Wishart": ["snakes","elephants"],
    "Stephanie Strauss": ["giraffes","otters"],
    "Sharonda Spry": ["otters","frogs"],
    "Ardith Azevado": ["tigers","bears"],
    "Emery Elser": ["elephants","bears","lions"],
  };

  it('Função responsibleListCreator', () => {
    expect(responsibleListCreator()).toBeDefined();
    expect(responsibleListCreator()).toStrictEqual(responsibleList);
    expect(typeof responsibleListCreator()).toBe('object');
    expect(typeof responsibleListCreator()['Nigel Nelson']).toBe('object');
  });

  it('Função animalCount', () => {
    const animalResidents = {
      "bears": 3,
      "elephants": 4,
      "frogs": 2,
      "giraffes": 6,
      "lions": 4,
      "otters": 4,
      "penguins": 4,
      "snakes": 2,
      "tigers": 2,
    };

    expect(animalCount('lions')).toBeDefined();
    expect(animalCount()).toStrictEqual(animalResidents);
    expect(typeof animalCount('lions')).toBe('number');
    expect(animalCount('frogs')).toBe(2);
    expect(animalCount('giraffes')).toBe(6);
  });

  it('Função oldestFromFirstSpecies', () => {
    const lionsId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
    const lionsOldestSpecie = ['Maxwell', 'male', 15];

    expect(oldestFromFirstSpecies(lionsId)).toBeDefined();
    expect(oldestFromFirstSpecies(lionsId)).toStrictEqual(lionsOldestSpecie);
    expect(typeof lionsOldestSpecie).toBe('object');
  });

  const employeeId = ['fdb2543b-5662-46a7-badc-93d960fdc0a8'];
  const employeeIds = [
    '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    'b0dc644a-5335-489b-8a2c-4e086c7819a2'
  ];

  it('Função managersList', () => {
    const secondResponse = ['Sharonda Spry', 'Emery Elser'];

    expect(managersList(employeeId)).toBeDefined();
    expect(managersList(employeeId)).toStrictEqual(['Ola Orloff']);
    expect(managersList(employeeIds)).toStrictEqual(secondResponse);
    employeeIds.push('fdb2543b-5662-46a7-badc-93d960fdc0a8');
    expect(managersList(employeeIds).length).toBe(3);
    expect(managersList(['notExist'])).toStrictEqual([]);
  });

  it('Função isManager', () => {
    expect(isManager(employeeId)).toBeDefined();
    expect(isManager(employeeId)).toBeFalsy();
    expect(isManager(employeeIds[1])).toBeTruthy();
  });

  it('Função employeeCoverage', () => {
    const sharonda = {
      "Sharonda Spry": ["otters", "frogs"],
    };

    expect(employeeCoverage()).toBeDefined();
    expect(employeeCoverage()).toStrictEqual(responsibleList);
    expect(employeeCoverage(employeeIds[0])).toStrictEqual(sharonda);
  });

  it('Função decimalAdjust', () => {
    expect(decimalAdjust('54.638')).toBeDefined();
    expect(decimalAdjust('54.638')).toBe(54.64);
    expect(decimalAdjust('54.63594464')).toBe(54.64);
  });
});
