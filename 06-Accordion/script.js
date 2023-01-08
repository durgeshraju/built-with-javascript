'use strict';

//-------- Grab DOM Elements --------

const accordionWrapper = document.querySelector(".accordion-flush");

//-------- Event Listners --------

accordionWrapper.addEventListener('click', (e)=>{
  let collapseElement = e.target.parentElement.parentElement;
  e.target.classList.toggle('collapsed');
  collapseElement.children[1].classList.toggle('collapse');
});