function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('tasks-list');

        const newTask = document.createElement('li');
        newTask.innerHTML = `
            ${taskText}
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = ''; // Limpa o campo de input
    }
}

function deleteTask(taskElement) {
    const taskItem = taskElement.parentElement;
    taskItem.remove();
}
