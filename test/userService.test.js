// userService.test.js

import { expect } from 'chai';
import getUserById from '../src/userService.js';

describe('User Service - getUserById', function () {

  it('should return user data when ID is 1', async function () {
    const user = await getUserById(1);
    expect(user).to.be.an('object');
    expect(user).to.have.property('id', 1);
    expect(user).to.have.property('name', 'John Doe');
    expect(user).to.have.property('email', 'john@example.com');
  });

  it('should throw an error when user is not found', async function () {
    try {
      await getUserById(2);
      throw new Error('Test failed: Expected an error to be thrown');
    } catch (error) {
      expect(error).to.be.an('error');
      expect(error.message).to.equal('User not found');
    }
  });
});
