import { expect } from 'chai';

import path from 'path';

const removeArrayItem = require(path.resolve('./src/index.js'));

describe('removeArrayItem', () => {
  const baseArr = [
    'red',
    ['red', 'green', ['red', 'blue']]
  ];
  it('exposes a funtion', () => {
    expect(removeArrayItem).to.to.be.a('function');
  });
});