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
const navBar = document.getElementById('input');
const menu = document.getElementsByClassName("icon")[0]; // Assuming there's only one element with class "menu"
const info = document.getElementsByClassName("dis")[0]
const info1 = document.getElementsByClassName("dis1")[0]
const info2 = document.getElementsByClassName("dis2")[0]
const info3 = document.getElementsByClassName("dis3")[0]
const info4 = document.getElementsByClassName("dis4")[0]
const info5 = document.getElementsByClassName("dis5")[0]
const info6 = document.getElementsByClassName("dis6")[0]


menu.addEventListener('click', function () {
    navBar.style.width = "15%";
    info.style.display = "flex"
    info1.style.display = "flex"
    info2.style.display = "flex"
    info3.style.display = "flex"
    info4.style.display = "flex"
    info5.style.display = "flex"
    info6.style.display = "flex"
});
  