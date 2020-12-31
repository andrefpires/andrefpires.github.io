const { textModeler, responsibleListCreator } = require('./zoo');

describe('zooFunctions', () => {
  it('Função textModeler', () => {
    expect(textModeler(['Nigel Nelson', 'Burl Bethea', 'Emery Elser']))
    .toEqual('Nigel Nelson, Burl Bethea e Emery Elser.');
    expect(textModeler(['Nigel Nelson', 'Burl Bethea', 'Emery Elser']))
    .not.toEqual('Nigel NelsonBurl BetheaEmery Elser');
    expect(typeof textModeler(['Nigel Nelson', 'Burl Bethea', 'Emery Elser']))
    .toBe('string');
  });

  it('Função responsibleListCreator', () => {
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

    expect(responsibleListCreator()).toStrictEqual(responsibleList);
  });
});

