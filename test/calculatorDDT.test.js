import { expect } from 'chai';
import Calculator from '../src/calculator.js';

describe('Calculator Test With DDT', function () {
  let calculator;

  before(function () {
    calculator = new Calculator();
  });

  const testCasesForAddition = [
    { a: 2, b: 3, expected: 5 },
    { a: -2, b: -3, expected: -5 },
    { a: 5, b: 0, expected: 5 },
    { a: -5, b: 5, expected: 0 },
    { a: 1.5, b: 2.5, expected: 4 },
  ];

  const testCasesForSubtraction = [
    { a: 2, b: 3, expected: -1 },
    { a: -2, b: -3, expected: 1 },
    { a: 5, b: 0, expected: 5 },
    { a: -5, b: 5, expected: -10 },
    { a: 1.5, b: 2.5, expected: -1 },
  ];

  describe('add()', function () {
    testCasesForAddition.forEach(({ a, b, expected }) => {
      it(`should return ${expected} when adding ${a} and ${b}`, function () {
        const result = calculator.add(a, b);
        expect(result).to.equal(expected);
      });
    });
  });

  describe('subtract()', function () {
    testCasesForSubtraction.forEach(({ a, b, expected }) => {
      it(`should return ${expected} when subtracting ${a} and ${b}`, function () {
        const result = calculator.subtract(a, b);
        expect(result).to.equal(expected);
      });
    });
  });
});
