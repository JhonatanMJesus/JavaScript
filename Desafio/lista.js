document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Carregar tarefas do localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    };

    const createTaskElement = (taskText, completed = false) => {
        const listItem = document.createElement('li');
    
        // Criar container para checkbox e texto
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container');
    
        // Criar checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('form-check-input')
        checkbox.checked = completed;
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed', checkbox.checked);
            updateLocalStorage();
        });
        checkboxContainer.appendChild(checkbox);
    
        // Criar label da tarefa
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        if (completed) {
            taskLabel.style.textDecoration = 'line-through';
        }
        checkboxContainer.appendChild(taskLabel);
    
        listItem.appendChild(checkboxContainer);
    
        // Botão para editar
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-warning', 'me-2');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const newTaskText = prompt('Edite sua tarefa:', taskText);
            if (newTaskText) {
                taskLabel.textContent = newTaskText;
                updateLocalStorage();
            }
        });
        listItem.appendChild(editButton);
    
        // Botão para excluir
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            taskList.removeChild(listItem);
            updateLocalStorage();
        });
        listItem.appendChild(deleteButton);
    
        taskList.appendChild(listItem);
    };

    // Atualizar localStorage
    const updateLocalStorage = () => {
        const tasks = Array.from(taskList.children).map(item => ({
            text: item.querySelector('span').textContent,
            completed: item.querySelector('input[type="checkbox"]').checked
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Adicionar nova tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            createTaskElement(taskText);
            taskInput.value = '';
            updateLocalStorage();
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    loadTasks(); // Carregar tarefas ao iniciar
});