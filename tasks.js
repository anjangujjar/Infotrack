document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTableBody = document.querySelector('#taskTable tbody');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskTableBody.innerHTML = '';
        tasks.forEach((task, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task}</td>
                <td class="actions">
                    <button class="edit" data-index="${index}">Edit</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </td>
            `;
            taskTableBody.appendChild(row);
        });
    }

    function addTask(task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function editTask(index, newTask) {
        tasks[index] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    taskTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            const index = event.target.dataset.index;
            const newTask = prompt('Edit your task', tasks[index]);
            if (newTask) {
                editTask(index, newTask.trim());
            }
        }

        if (event.target.classList.contains('delete')) {
            const index = event.target.dataset.index;
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(index);
            }
        }
    });

    renderTasks();
});
