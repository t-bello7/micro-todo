import './style.css';
import {addTask, removeTask, getTasks} from './modules/task.js';
const taskContainer = document.querySelector('.task-list');
const taskInput = document.querySelector('.task-input');
const taskEnter = document.querySelector('.task-enter');

let task = {
    description: "",
    completed: "",
    index: ""
}

let taskArr = getTasks()

const renderElements = (arr, container) => {
    container.innerHTML = '';
    arr.forEach( element => {
        let task = document.createElement('li')
        task.innerHTML = ` <input type="checkbox" id="task-check" data-id="${element.index}"> ${element.description}`
        container.appendChild(task)
    })
}
renderElements(taskArr, taskContainer);


taskInput.addEventListener('change', (e)=> {
    task.description = e.target.value;
    //get taskarr and update task index with length of taskArr + 1
})

taskEnter.addEventListener('click', () => {
    addTask(task,taskArr)
    taskArr=getTasks()
    renderElements(taskArr, taskContainer);

})

taskInput.addEventListener('keypress',(e)=> {
    if (e.key === "Enter"){
        e.preventDefault();
        taskEnter.click()
    }
})

taskContainer.addEventListener('click', e=>{
    const taskId = e.target.closest('#task-check')
    if (taskId){
        removeTask(taskId.getAttribute('data-id'), taskArr);
        console.log(taskArr)
    }
})