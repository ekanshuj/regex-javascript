const submitBtn = document.getElementById('btn');
const userName = document.getElementById('input__userName');
let userNameIsValid = false;
const email = document.getElementById('input__email');
let emailIsValid = false;
const phone = document.getElementById('input__phone');
let phoneIsValid = false;
const password = document.getElementById('input__password');
let passwordIsValid = false;
const cPassword = document.getElementById('input__c-password');
let cPasswordIsValid = false;

userName.addEventListener('blur', () => {
  const regex = /^[\w@\-]{5,20}$/;
  const str = userName.value;
  console.log(regex.exec(str));
  if (regex.exec(str)) {
    userNameIsValid = true;
  } else {
    userNameIsValid = false;
  }
})
email.addEventListener('blur', () => {
  const regex = /^[\d\w\-\.\&]{5,30}[@][a-z]{5,11}[\.][a-z]{3,7}$/;
  const str = email.value;
  console.log(regex.exec(str));
  if (regex.exec(str)) {
    emailIsValid = true;
  } else {
    emailIsValid = false;
  }

})
phone.addEventListener('blur', () => {
  const regex = /^\d{10}$/;
  const str = phone.value;
  console.log(regex.exec(str));
  if (regex.exec(str)) {
    phoneIsValid = true;
  } else {
    phoneIsValid = false;
  }

})
password.addEventListener('blur', () => {
  const regex = /^[\d\w\.\-@!#%^&*()=\+\[\]\|\\'";:/\?,<>`~ ]{6,}/;
  const str = password.value;
  console.log(regex.exec(str));
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


submitBtn.addEventListener('click', () => {
  if (userNameIsValid && emailIsValid && phoneIsValid && passwordIsValid && cPasswordIsValid) {
    alert('Form Submitted Successfully.');
  } else {
    alert('Form is not valid.Please try again.');
  }

})