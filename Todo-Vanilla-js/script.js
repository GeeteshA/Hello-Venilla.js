const addButton = document.getElementById('add-task-btn');
const inputField = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

function createTodoItem(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.classList.add('delete-btn');
    removeButton.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(removeButton);

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    todoList.appendChild(li);
}

addButton.addEventListener('click', () => {
    const taskContent = inputField.value.trim();
    if (taskContent) {
        createTodoItem(taskContent);
        inputField.value = '';
    }
});
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskContent = inputField.value.trim();
        if (taskContent) {
            createTodoItem(taskContent);
            inputField.value = '';
        }
    }
});

// const item =  document.getElementById('new-task');
// const toDoList = document.getElementById('todo-list');

// item.addEventListener(
//     'keyup',
//     function (event) {
//         if(event.key == 'Enter'){
//             console.log(this.value)
//     }
// }
// )