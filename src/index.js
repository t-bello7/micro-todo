import './style.css';
import {addTask, removeTask, getTasks, checkTask} from './modules/task.js';
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
        task.innerHTML = `<input type="checkbox" id="${element.index}" class="task-check" data-id="${element.index}" value="${element.completed}"> <input type="input" for="${element.index}" class="task-edit" value="${element.description}"> <button class="task-delete" >delete</button>`
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
    const taskDelete = e.target.closest('.task-delete')
    const taskEdit = e.target.closest('.task-edit');
    const taskCheck = e.target.closest('.task-check');
    if (taskCheck){
        let index = taskCheck.getAttribute('data-id');
        checkTask(taskCheck, index, taskArr)
    }
    if (taskDelete){
        let index = taskDelete.previousElementSibling.previousElementSibling.getAttribute('data-id');
        removeTask(index, taskArr);
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
    taskArr = getTasks();
    taskArr = taskArr.filter(element => element.completed === false)
    taskArr = taskArr.map((element,index) => {
        element.index = index+1
        return element
    })
    localStorage.setItem('taskArr', JSON.stringify(taskArr))
    renderElements(taskArr, taskContainer);
})