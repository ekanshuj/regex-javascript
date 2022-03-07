
function validateForm() {
  let name = document.forms['myForm']['f-name'].value;
  if (name === '' || name === null || name.length < 4) {
    nameError.innerHTML = 'Error';
    return false;
  }
  else {
    nameError.innerHTML = '';
  }

  //

  let email = document.forms['myForm']['f-email'].value;
  if (email.length < 12 || email.length === 0) {
    mailError.innerHTML = 'Invalid Email';
    return false;
  }
  else {
    mailError.innerHTML = '';
  }

  //

  let phone = document.forms['myForm']['f-phone'].value;
  if (phone.length !== 10 || phone.length === 0 || phone === '') {
    phoneError.innerHTML = 'Invalid number';
    return false;
  }
  else {
    phoneError.innerHTML = '';
  }

  //

  let pass = document.forms['myForm']['f-pass'].value;
  if (pass.length < 6) {
    passError.innerHTML = 'Password too short'
    return false;
  }
  else {
    passError.innerHTML = '';
  }

  //

  let cpass = document.forms['myForm']['fc-pass'].value;
  if (cpass.length != pass) {
    cpassError.innerHTML = 'Password does not match!'
    return false;
  }
  else {
    cpassError.innerHTML = '';
  }

  return true;

}