export const getTasks = () => {
  let taskArr = [];
  if (localStorage.getItem('taskArr') != null) {
    taskArr = JSON.parse(localStorage.getItem('taskArr'));
  }
  return taskArr;
};

export const addTask = (task, taskArr) => {
  taskArr.push(task);
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
};

export const removeTask = (index, taskArr) => {
  taskArr.splice(index - 1, 1);
  taskArr.forEach((element) => {
    if (element.index > index) {
      element.index -= 1;
    }
  });
  localStorage.setItem('taskArr', JSON.stringify(taskArr));
};

export const checkTask = (taskCheck, index, taskArr) => {
  taskArr.forEach((element) => {
    if (element.index === parseInt(index, 10)) {
      if (taskCheck.checked === true) {
        element.completed = true;
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
      } else {
        element.completed = false;
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
      }
    }
  });
};