'use strict';

//-------- Grab DOM Elements --------

const formWrapper = document.querySelector("#form");
const formControl = document.querySelector(".form-control");
const btnAdd =  document.querySelector('#btnAdd');
const btnCancel = document.querySelector('#btnCancel');
const btnClearUsers = document.querySelector("#clearUsers");

//----Btns "Clear" & "Add" Enable/Disable -------

const isBtnActive = (isActive) =>{
  let isActionBtns = document.querySelectorAll(".form-group-btn-wrapper > .btn");
  isActionBtns.forEach(function (item) {
      item.disabled = isActive;
  });
}
isBtnActive(true);

//----Input Handler Onchnage -------

const inputHandler = () => {
  if(formControl.value.length > 5){
    isBtnActive(false);
  }
  else{
    isBtnActive(true);
  }
}
const inputHnandleChange = formControl.addEventListener('input', inputHandler);

//----Reset inputHandler `click cancel btn` -------

const cancelBtnHandler = () => {
  if(formControl.value.length === 0){
    isBtnActive(false);
  }
  else{
    isBtnActive(true);
  }
  return formControl.value = '';
}
const cancelBtnReset = btnCancel.addEventListener('click', cancelBtnHandler);

//----Array Items placeholder -------

let displayUsers = [];

//----Append user items in to DOM -------

const addUser = () =>{
  let appendNodeElement = displayUsers.map((user) =>`<li class="list-group-item">${user} <i class='fa-solid fa-trash deleteIcon'></i></li>`);
  document.querySelector("#results").innerHTML = appendNodeElement;
  console.log(`Array Item added in the DOM ${displayUsers.length}`); //--check array add element length      
}

console.log(addUser.length);

//---- Add Users from the DOM Tree -------

const addBtnHandler = () => {
  let addUserItems = displayUsers.push(formControl.value);    
  addUser(addUserItems);  
  if(addUserItems >= 2){     
     isBtnRemoveEnabled(false);
  }
  removeUser();  
}

//---- Remove Users from the DOM Tree ------

const removeUser = () => {
const target = document.querySelectorAll('.deleteIcon');    
  for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function(e){
      let getTragetName = target[i].parentElement.textContent
      if(confirm(`Are you sure want to delete this item ${getTragetName}`)) {
        displayUsers.pop(e.target.parentNode.remove());  
        if (displayUsers.length === 1){
          isBtnRemoveEnabled(true);
        }   
      }     
      console.log(`Array Item Deleted in the DOM ${displayUsers.length}`); //--check array remove element length       
    });
  }
}

//---- 'Remove All' Btn Enable / Disable ------

const isBtnRemoveEnabled = (isActive) =>{
  let btnRemoveAll = document.querySelector("#clearUsers");
  btnRemoveAll.disabled = isActive;
}

//---- Remove All Users from the DOM Tree arr [] empty ------

const btnClearUsersHandler = () => {
  let clearNodeElement = document.querySelector("#results");
  clearNodeElement.innerHTML = displayUsers.splice(0, displayUsers.length);  
  clearNodeElement.innerHTML = `<h3 class="listitems-displayMsg">Hey! No Users you have removed. :(</h3>`
  console.log(`clearNodeElement ===>> ${displayUsers.length}`);
  if(displayUsers.length){
    document.querySelector("#clearUsers").disabled = true
  }
  else{
    document.querySelector("#clearUsers").disabled = true;
  }
}

//---- Form Handlers ------

const addItems = btnAdd.addEventListener('click', addBtnHandler);
const clearUsersList = btnClearUsers.addEventListener('click', btnClearUsersHandler);

formWrapper.addEventListener('submit', function (e) {
  e.preventDefault();
  inputHnandleChange;
  cancelBtnReset;
  addItems;  
  clearUsersList;
  formWrapper.reset();
  if(!formWrapper.reset()){
    isBtnActive(true);
  }
});