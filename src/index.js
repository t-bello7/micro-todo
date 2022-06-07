import './style.css';
let taskContainer = document.querySelector('.tasks')

let task = {
    description: "",
    completed: "",
    index: ""
}
let taskArr = [
    {
        description: " wash the dishes",
        completed: "",
        index: "1"
    },
    {
        description: "go out with friends",
        completed: "",
        index: "2"
    }
]

const renderElements = (arr, container) => {
    arr.forEach( element => {
        let task = document.createElement('div')
        task.innerHTML = ` <input type="checkbox"> ${element.description}`
        container.appendChild(task);
    })

    let clearButton = document.createElement('button');
    clearButton.innerHTML='clear completed'
    container.appendChild(clearButton)
}

renderElements(taskArr, taskContainer);