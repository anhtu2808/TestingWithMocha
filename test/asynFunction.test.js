import { expect } from 'chai';
import doubleAfter2Second from '../src/asyncFunction.js';

describe('Asynchronous Function Testing', function () {

  it('should return the double of the number after 1 seconds', async function () {
    const result = await doubleAfter2Second(5);
    expect(result).to.equal(10);
  });
});
