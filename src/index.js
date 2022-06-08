import './style.css';
import {addTask, removeTask, getTasks} from './modules/task.js';
const taskContainer = document.querySelector('.task-list');
const taskInput = document.querySelector('.task-input');
const taskEnter = document.querySelector('.task-enter');
const taskClear = document.querySelector('.task-complete')

let task = {
    description: "",
    completed: "",
    index: ""
}

let taskArr = getTasks();

const renderElements = (arr, container) => {
    container.innerHTML = '';
    arr.forEach( element => {
        let task = document.createElement('div')
        task.innerHTML = `<input type="checkbox" class="task-check" data-id="${element.index}"> <input type="input" class="task-edit" value="${element.description}">`
        container.appendChild(task)
    })
}
renderElements(taskArr, taskContainer);


taskInput.addEventListener('input', (e)=> {
    let taskArrLength = getTasks().length
    task.index = taskArrLength + 1
    task.completed = false
    task.description = e.target.value;
})

taskEnter.addEventListener('click', (e) => {
    addTask(task,taskArr)
    taskArr=getTasks()
    taskInput.value = ''
    renderElements(taskArr, taskContainer);
})

taskInput.addEventListener('keypress',(e)=> {
    if (e.key === "Enter"){
        e.preventDefault();
        taskEnter.click() 
    }
})

taskContainer.addEventListener('click', e => {
    const taskId = e.target.closest('.task-check')
    const taskEdit = e.target.closest('.task-edit');
    if (taskId){
        console.log(taskId.nextElementSibling)
        let index = taskId.getAttribute('data-id')
        removeTask(index, taskArr);
        taskArr.forEach(element=> {
            if (element.index > index){
                element.index = element.index - 1; 
            }
        })
        localStorage.setItem('taskArr', JSON.stringify(taskArr))
        renderElements(taskArr, taskContainer);
    }
    if (taskEdit){
        let index = taskEdit.previousElementSibling.getAttribute('data-id');
        taskEdit.addEventListener('change',(e)=>{
        taskArr.forEach( element => {
            if (element.index === parseInt(index)){
                element.description = e.target.value;
                localStorage.setItem('taskArr', JSON.stringify(taskArr))
            }
        })  
        renderElements(taskArr, taskContainer);

        })
    }
})

taskClear.addEventListener('click', ()=>{
    taskArr = []
    localStorage.setItem('taskArr', JSON.stringify(taskArr))
    renderElements(taskArr, taskContainer);
})