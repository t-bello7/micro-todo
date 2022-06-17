import renderElements from '../__mocks__/ui.js';
import { addTask, removeTask } from '../__mocks__/task.js';
import { clearCompletedTask, editTask } from '../src/modules/task.js';

describe('UI update', () => {
  // Arrange
  document.body.innerHTML = '<ul class="task-list"> </ul>';
  let taskArr = [{ description: 'Task default', completed: false, index: 1 }, { description: 'Task default', completed: false, index: 2 }];
  const container = document.querySelector('.task-list');

  describe('create and delete task', () => {
    test('add a task to the list', () => {
      // Act
      taskArr = addTask('Task created 1', taskArr);
      renderElements(taskArr, container);
      const nodeChildren = document.querySelectorAll('.task-item');
      // Assert
      expect(nodeChildren.length).toStrictEqual(3);
    });

    test('delete a task to the list', () => {
      // Act
      taskArr = removeTask(3, taskArr);
      renderElements(taskArr, container);
      const nodeChildren = document.querySelectorAll('.task-item');
      // Assert
      expect(nodeChildren.length).toStrictEqual(2);
    });
  });

  describe('Clear completed and edit task', () => {
    test('clear completed tasks', () => {
      taskArr[0].completed = true;
      taskArr = clearCompletedTask(taskArr);
      renderElements(taskArr, container);
      const nodeChildren = document.querySelectorAll('.task-item');
      expect(nodeChildren.length).toStrictEqual(1);
    });

    test('Edit tasks', () => {
      taskArr = editTask(1, taskArr, 'Task Edited');
      renderElements(taskArr, container);
      const nodeChildren = document.querySelectorAll('.task-edit');
      expect(nodeChildren[0].value).toStrictEqual('Task Edited');
    });
  });
});