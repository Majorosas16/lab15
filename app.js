document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todoList.innerHTML = ''; // Limpia la lista antes de cargar los TODOs

        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            li.style.textDecoration = todo.completed ? 'line-through' : 'none';

            const toggleButton = document.createElement('button');
            toggleButton.textContent = todo.completed ? 'Marcar como por hacer' : 'Marcar como completado';
            toggleButton.addEventListener('click', function() {
                todos[index].completed = !todos[index].completed;
                localStorage.setItem('todos', JSON.stringify(todos));
                loadTodos(); // Recarga la lista de TODOs
            });

            li.appendChild(toggleButton);
            todoList.appendChild(li);
        });
    }

    loadTodos(); // Carga los TODOs al iniciar la página
});