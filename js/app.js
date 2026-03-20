document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fetch and display tasks
    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/tasks');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            const tasks = await response.json();
            renderTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Render tasks to the DOM
    const renderTasks = (tasks) => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.dataset.id = task.id;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTaskStatus(task.id, checkbox.checked));

            const taskText = document.createElement('span');
            taskText.textContent = task.title;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(task.id));

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    };

    // Add a new task
    const addTask = async (e) => {
        e.preventDefault();
        const title = taskInput.value.trim();
        if (!title) return;

        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });

            if (!response.ok) {
                throw new Error('Failed to add task');
            }

            taskInput.value = '';
            await fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    // Toggle task status
    const toggleTaskStatus = async (taskId, completed) => {
        try {
            const response = await fetch(`/api/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed }),
            });

            if (!response.ok) {
                throw new Error('Failed to update task status');
            }

            await fetchTasks();
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    // Delete a task
    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            await fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // Event listeners
    taskForm.addEventListener('submit', addTask);

    // Initial fetch
    fetchTasks();
});