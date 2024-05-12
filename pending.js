document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventInput = document.getElementById('event').value;
        const dateInput = document.getElementById('date').value;

        if (eventInput && dateInput) {
            addTodoItem(eventInput, dateInput);
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });

    function addTodoItem(event, date) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${event}</span> - <span>${date}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);

        const deleteBtn = todoItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            todoItem.remove();
        });
    }
});
