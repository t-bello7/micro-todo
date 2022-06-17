import { addTask, removeTask } from '../__mocks__/task.js';

jest.mock('../src/modules/task');

describe(' Task Create and Delete', () => {
  describe('Create Task', () => {
    test('add a task to the list', () => {
      const list = [];
      expect(addTask('Task created', list)).toStrictEqual([{ description: 'Task created', completed: false, index: 1 }]);
    });
  });

  describe('Delete Task', () => {
    test('delete a task from list', () => {
      const list = [
        { description: 'Task Created 1', completed: false, index: 1 },
        { description: 'Task Created 2', completed: false, index: 2 },
      ];
      expect(removeTask(2, list)).toStrictEqual([{ description: 'Task Created 1', completed: false, index: 1 }]);
    });
  });
});