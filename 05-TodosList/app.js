'use strict';

//-------- Grab DOM Elements --------

const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');
console.log(list.children);

//-------- Append todos to DOM  -----------

const addTodos = (todo) => {
    const htmlNode = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`
    list.innerHTML += htmlNode;
}

//-------- Delete todos event -----------

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


//-------- Event Listners -----------

addForm.addEventListener('submit', (e) =>{
    e.preventDefault();    
    const todo = addForm.add.value.trim();    
    addTodos(todo);
})