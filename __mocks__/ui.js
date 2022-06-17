const renderElements = (arr, container) => {
  container.innerHTML = '';
  arr.forEach((element) => {
    const task = document.createElement('div');
    task.classList.add('bg-secondary');
    task.classList.add('task-item');
    task.setAttribute('draggable', true);
    task.setAttribute('id', element.index);
    task.innerHTML = `
                              <input type="checkbox" id="${element.index}" class="task-check" data-id="${element.index}" value="${element.completed}"> 
                              <input type="input" for="${element.index}" class="task-edit" value="${element.description}">
                              <button class="rm-btn-default clr-primary task-delete"><i class="fa-solid fa-trash"></i></button> 
                              <button class="rm-btn-default clr-primary task-drag"><i class="fa-solid fa-ellipsis-vertical"></i> </button>
                           `;
    container.appendChild(task);
  });
};

export default renderElements;
