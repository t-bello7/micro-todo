import { updateStorage, getStorage } from './localStorage.js';

export const getTasks = () => {
  let taskArr = [];
  if (getStorage('taskArr').length !== 0) {
    taskArr = getStorage('taskArr');
  }
  return taskArr;
};

export const addTask = (task, taskArr) => {
  taskArr.push(task);
  updateStorage('taskArr', taskArr);
};
export const removeTask = (index, taskArr) => {
  taskArr.splice(index - 1, 1);
  taskArr.forEach((element) => {
    if (element.index > index) {
      element.index -= 1;
    }
  });
  updateStorage('taskArr', taskArr);
};

export const checkTask = (taskCheck, index, taskArr) => {
  taskArr.forEach((element) => {
    if (element.index === parseInt(index, 10)) {
      if (taskCheck.checked === true) {
        element.completed = true;
        updateStorage('taskArr', taskArr);
      } else {
        element.completed = false;
        updateStorage('taskArr', taskArr);
      }
    }
  });
};