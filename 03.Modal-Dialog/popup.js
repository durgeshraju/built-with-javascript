'use strict';

//-------- Grab DOM Elements --------

const btnModalTrigger = document.querySelector("button.btn");
const modalWrapper = document.querySelector(".modal");
const modalbtnClose = document.querySelectorAll(".isBtnDismiss");
const modalCloseBtnArr = Array.from(modalbtnClose);

//-------- Modal Toggle & Overlay --------

const modalVisible = (toggleClass) => {
   return modalWrapper.classList.toggle(toggleClass);
};

const modalOverlay = (isOverlay) => {
    return modalWrapper.classList.toggle(isOverlay);
};

//-------- Event Listners --------

//--->> Open Modal
btnModalTrigger.addEventListener('click', () =>{
  if(modalVisible('d-block')){
    modalOverlay('opened')    
  }
});

//--->> Close Modal
modalCloseBtnArr.forEach(close => {
    close.addEventListener('click', () =>{
        modalVisible('d-block');
        modalOverlay('opened');
    });
});

//--->> Keybaord Event `ESC` key close modal
document.addEventListener('keydown', (event) =>{
    if(event.key === "Escape"){
        modalVisible('d-block');
        modalOverlay('opened');
    }
});