import LocalStorage from './localStorage.js';
let testTasks = new LocalStorage;

export const addTask = ( value,taskArr = []) => {
    const task = {
        description: value,
        completed: false,
        index: taskArr.length + 1
    }
    taskArr.push(task)
    return taskArr;
} 

export const removeTask = (index, taskArr) => {
    taskArr.splice(index-1, 1)
    taskArr.forEach(element=> {
        if (element.index > index){
            element.index = element.index - 1; 
        }
    })
    return taskArr;
} 