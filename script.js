// Event Listeners to fetch the button and the input.
const submitBtn = document.getElementById('btn');
const userName = document.getElementById('input__userName');
const email = document.getElementById('input__email');
const phone = document.getElementById('input__phone');
const password = document.getElementById('input__password');
const cPassword = document.getElementById('input__c-password');


//Predefined validation values to be validate after the user input values.
let userNameIsValid = false;
let emailIsValid = false;
let phoneIsValid = false;
let passwordIsValid = false;
let cPasswordIsValid = false;


// Validation processes as per the user input for different fields.
userName.addEventListener('blur', () => {
  const regex = /^[\w@\-]{5,20}$/;
  const str = userName.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    userNameIsValid = true;
  } else {
    userNameIsValid = false;
  }
})
email.addEventListener('blur', () => {
  const regex = /^[\d\w\-\.\&]{5,30}[@][a-z]{5,11}[\.][a-z]{3,7}$/;
  const str = email.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    emailIsValid = true;
  } else {
    emailIsValid = false;
  }

})
phone.addEventListener('blur', () => {
  const regex = /^\d{10}$/;
  const str = phone.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    phoneIsValid = true;
  } else {
    phoneIsValid = false;
  }

})
password.addEventListener('blur', () => {
  const regex = /^[\d\w\.\-@!#%^&*()=\+\[\]\|\\'";:/\?,<>`~ ]{6,}/;
  const str = password.value;
  // console.log(regex.exec(str));
  if (regex.exec(str)) {
    passwordIsValid = true;
  } else {
    passwordIsValid = false;
  }

})
cPassword.addEventListener('blur', () => {
  if (password.value === cPassword.value && password.length === cPassword.length) {
    cPasswordIsValid = true;
  } else {
    cPasswordIsValid = false;
  }
})


// Event Listener to validate the user input values.
submitBtn.addEventListener('click', () => {
  if (userNameIsValid && emailIsValid && phoneIsValid && passwordIsValid && cPasswordIsValid) {
    alert('Form Submitted Successfully.');
  } else {
    alert('Form is not valid.Please try again.');
  }

})