import { expect } from 'chai';
import Calculator from '../src/calculator.js';

describe('Calculator Unit Test', function () {
  let calculator;

  before(function () {
    calculator = new Calculator();
  });

  describe('add()', function () {
    it('should return the sum of two positive numbers', function () {
      const result = calculator.add(2, 3);
      expect(result).to.equal(5);
    });

    it('should return the sum when adding negative numbers', function () {
      const result = calculator.add(-2, -3);
      expect(result).to.equal(-5);
    });

    it('should return correct sum when adding zero', function () {
      const result = calculator.add(5, 0);
      expect(result).to.equal(5);
    });
  });

  describe('subtract()', function () {
    it('should return the difference of two numbers', function () {
      const result = calculator.subtract(5, 2);
      expect(result).to.equal(3);
    });

    it('should handle negative results', function () {
      const result = calculator.subtract(2, 5);
      expect(result).to.equal(-3);
    });
  });

  describe('multiply()', function () {
    it('should return the product of two numbers', function () {
      const result = calculator.multiply(3, 4);
      expect(result).to.equal(12);
    });

    it('should return 0 when multiplying by 0', function () {
      const result = calculator.multiply(5, 0);
      expect(result).to.equal(0);
    });

    it('should handle negative numbers', function () {
      const result = calculator.multiply(-3, 4);
      expect(result).to.equal(-12);
    });
  });

  describe('divide()', function () {
    it('should return the quotient of two numbers', function () {
      const result = calculator.divide(10, 2);
      expect(result).to.equal(5);
    });

    it('should handle division by negative number', function () {
      const result = calculator.divide(10, -2);
      expect(result).to.equal(-5);
    });

    it('should throw an error when dividing by zero', function () {
      expect(() => calculator.divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
