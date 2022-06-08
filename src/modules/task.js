export const addTask = (task,taskArr) => {
    taskArr.push(task)
    localStorage.setItem('taskArr', JSON.stringify(taskArr))
} 
export const removeTask = (index, taskArr) => {
    taskArr.splice(index, 1)
} 

export const getTasks = () =>{
    let taskArr = []
    if (localStorage.getItem('taskArr') != null){
        taskArr = JSON.parse(localStorage.getItem('taskArr'))
    }
    return taskArr;
}