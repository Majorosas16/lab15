 const form = document.getElementById('todo-form')
 
 form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const todoInput = document.getElementById('todo-input').value;
    const todos = JSON.parse(localStorage.getItem('todos')) || []; // Obtengo los TODOs del local storage o un array vacío

    todos.push({ text: todoInput, completed: false }); // Agrega el nuevo TODO
    localStorage.setItem('todos', JSON.stringify(todos)); // Guarda los TODOs en el local storage

    const mensa= document.getElementById('message')
    mensa.textContent = 'Tarea guardada :D';

    const campo = document.getElementById('todo-input')
    campo.value = ''; // Limpio el campo de entrada
});
