let todoInput = document.querySelectorAll('.new-todo')[0];
let todoListDiv = document.querySelectorAll('.todo-list');
let allTodos = [];

function add() {
    let todoVal = todoInput.value;
    if (todoVal !== '') {
        allTodos.push(todoVal);
        printAllTodos();
        todoInput.value = '';
    }

}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span id="todo-${i}" class="py-2 ps-2 pe-5 rounded-2 bg-white ">
                ${allTodos[i]}
            </span>
            <div>
            <button class="btn btn-light" onclick="editTodo(${i})">Edit</button>
            <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
            </div>
        </div>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}


let editTodoDiv = document.querySelectorAll('#edit-todo-container')[0];
let addTodoDiv = document.querySelectorAll('#add-new-todo-container')[0];
let editTodoInput = document.querySelectorAll('.edit-todo')[0];
let editIndex;
function editTodo(index) {
    editIndex = index;
    toggleTodoForm();
    editTodoInput.value = allTodos[index];
}

function cancelCmd(params) {
    toggleTodoForm();

}
function upadateTodo() {
    toggleTodoForm();
    allTodos.splice(editIndex, 1, editTodoInput.value);
    printAllTodos();
}

let isEditing = false;
function toggleTodoForm() {
    if (!isEditing) {
        editTodoDiv.classList.remove("hide")
        addTodoDiv.className += " hide";
    }
    else {
        editTodoDiv.className += " hide";
        addTodoDiv.classList.remove("hide")
    }
    isEditing = !isEditing;
}
