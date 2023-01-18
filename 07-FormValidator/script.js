const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

//------- Show `Error` -------

const isError = (input, message) => {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";
    const showMsg = formcontrol.querySelector("small");
    showMsg.textContent = message;
}

//------- Show `Success` -------

const isSuccess = input => {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}

//------- GetFiled Label Name -------

const getFiledName = input => input.id.charAt(0).toUpperCase() + input.id.slice(1);

//-------Check all filed are required -------

const isCheckRequired = inputArr => 
   inputArr.forEach(
      input => input.value.trim() === '' 
      ? isError(input, `${getFiledName(input)} is required`)
      : isSuccess(input)
);

//------- Email check isValid -------

const isCheckEmailValid = (input) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.trim() === ""){
     `${isError(input, 'Email is required')}`
    } 
    else if(regex.test(input.value.trim())){
        `${isSuccess(input)}`
    }
    else{
        `${isError(input, 'Email is not valid')}`
    }
}

//------- Username check with `min & max characters` 

const checkUsernameLength = (input, min, max) => {
    if(input.value.trim() === ""){
        isError(`${input} ${getFiledName(input)} is required`)
    }
    else if(input.value.length < min){       
        isError(input, `${getFiledName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
         isError(input, `${getFiledName(input)} must be less than ${max} characters`);
    }
    else{
        `${isSuccess(input)}`
    }
}

//------- Event listeners -------

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isCheckRequired([username, email, password, confirmPassword]);
    isCheckEmailValid(email);
    checkUsernameLength(username, 3, 16);    
});