'use strict';

//-------- Grab DOM Elements --------

const form = document.getElementById("formNewsletterSubscribe");
const emailControl = document.getElementById("newsletterEmailControl");
const submitBtn = document.getElementById("signUpBtn");
const error = emailControl.nextElementSibling;

// As per the HTML Specification Regex

const emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//--- Empty filed check ----------------

const isEmpty = str => !str.trim().length;

//-------- Add & Remove Error message and Tints  ---------

const addErrorMsg = (msg, addClass) => {
  error.textContent = msg;
  emailControl.classList.add(addClass);
}

const removeErrorMsg = (msg, addClass) => {
  error.textContent = msg;
  emailControl.classList.remove(addClass);
}

const addErrorTextColor = (color) => {
  error.classList.add(color);
}

const submitForm = () => {
   form.submit(); // Submit the form
   form.reset();  // Reset all form data
}

//-------- Validation Check --------

const isEmailValidated = (e) => {
    if(emailRegExp.test(e.target.value)){
    addErrorMsg('', "border-success");
    if(emailControl.classList.contains("border-success")){
      removeErrorMsg('', "border-danger");
    }
  }
  else if(e.target.value.length === 0){
    addErrorMsg('Email is empty', "border-danger");    
  }
  else{
    addErrorMsg('Please provide a valid email address', "border-danger");
    addErrorTextColor("text-danger");
  }
}

//-------- Event Listners `Submit, Keyboad focus events` --------

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  if(emailControl.value.length === 0){
    addErrorMsg('Email is empty', "border-danger");
    addErrorTextColor("text-danger");
    return;
  }
  console.log(`Submitted!`);
  submitForm();
});

emailControl.addEventListener("keyup", (e) =>{
  isEmailValidated(e);
});