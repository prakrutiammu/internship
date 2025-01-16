document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText) {
            addTodo(todoText);
            todoInput.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '✔️';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
