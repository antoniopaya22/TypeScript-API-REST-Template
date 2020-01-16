import { expect } from 'chai';
import 'mocha';
import { UserController } from '../controllers/user-controller';

describe('First test', 
  () => { 
    it('should return true', () => { 
      const userController = new UserController();
      expect(true).to.equal(true); 
  }); 
});