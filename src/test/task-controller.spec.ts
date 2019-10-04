import { expect } from 'chai';
import 'mocha';
import { TaskController } from '../controllers/task-controller';

describe('First test', 
  () => { 
    it('should return true', () => { 
      const task = new TaskController();
      expect(true).to.equal(true); 
  }); 
});