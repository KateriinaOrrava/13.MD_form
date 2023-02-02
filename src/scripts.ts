/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as $ from 'jquery';
import { validateName } from './tests/validateName';
import { validatePassword } from './tests/validatePassword';
import { validateEmail } from './tests/validateEmail';
// The .val() method is primarily used to get the values of form elements such as input, select and textarea.
// When called on an empty collection, it returns undefined.

// jQuery.ready() Description: A Promise-like object (or "thenable") that resolves when the document is ready.
$('#form').submit((e) => {
  e.preventDefault();
  const userName = $('#userName').val().toString();
  const userPassword = $('#password').val().toString();
  const userEmail = $('#email').val().toString();

  const validateFormSubmit = (nameInput:string, passwordInput:string, emailInput:string) => {
    // user name will be validated
    if (validateName(nameInput)) {
      // $('.submit-status').text('Registration is done');
      // console.log(`User: {name: ${nameInput}}`);
      $('#userNameLabel').after('<span class="success">✓</span>');
    } else {
      // $('.submit-status').text('Please, check all requirements');
      $('#userNameLabel').after('<span class="success">✕</span>');
    }
    // password will be validated
    if (validatePassword(passwordInput)) {
      $('#passwordLabel').after('<span  class="success">✓</span>');
    } else {
      $('#passwordLabel').after('<span  class="success">✕</span>');
    }
    // email will be validated
    if (validateEmail(emailInput)) {
      $('#emailLabel').after('<span  class="success">✓</span>');
    } else {
      $('#emailLabel').after('<span  class="success">✕</span>');
    }

    if (validateEmail(emailInput) && validatePassword(passwordInput) && validateName(nameInput)) {
      $('.form__submit-status').text('Registration is successful');
      console.log(`User: {username: ${nameInput}; e-mail: ${emailInput}; password: ${passwordInput}}`);
    } else if (!validateEmail(emailInput) || !validatePassword(passwordInput) || !validateName(nameInput)) {
      $('.form__submit-status').text('Check all requirements!');
    }
  };
  // calling function to validate form fields
  validateFormSubmit(userName, userPassword, userEmail);
});

// const lettersOnlyRegex = /^[A-Za-z]+$/;
// const emailFormRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
// const passwordValidationRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
// $(document).validate(() => {

// });
// $('#form').submit((e) => {
//   e.preventDefault();
//   const userName = $('#userName').val();
//   const email = $('#email').val();
//   const password = $('#password').val();

//   $('.error').remove();

//   let usernameValidBoolean = false;
//   let emailValidBoolean = false;
//   let passwordValidBoolean = false;

//   if ((`${userName}`).length < 2) {
//     $('#userName').after('<span class="error">Username should contain at least 2 letters</span>');
//   } else if ((`${userName}`).length > 50) {
//     $('#userName').after('<span class="error">Username can\'t have more than 50 characters</span>');
//   } else if (!(`${userName}`).match(lettersOnlyRegex)) {
//     $('#userName').after('<span class="error">Username can use only letters</span>');
//   } else if ((`${userName}`).match(lettersOnlyRegex) && (`${userName}`).length >= 2 && (`${userName}`).length <= 50) {
//     $('#userNameLabel').after('<span class="success">✓</span>');
//     usernameValidBoolean = true;
//   }

//   if ((`${email}`).length < 1) {
//     $('#email').after('<span class="error">This field is required</span>');
//   } else if (!(emailFormRegex.test(`${email}`))) {
//     $('#email').after('<span class="error">The email must be in a valid format (e.g. example@example.com)</span>');
//   } else if ((`${email}`).length >= 1 && emailFormRegex.test(`${email}`)) {
//     $('#emailLabel').after('<span  class="success">✓</span>');
//     emailValidBoolean = true;
//   }

//   if ((`${password}`).length < 8) {
//     $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
//   } else if (!(passwordValidationRegex.test(`${password}`))) {
//     $('#password').after('<span class="error">Password must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)</span>');
//   } else if ((`${password}`).length >= 8 && (passwordValidationRegex.test(`${password}`))) {
//     $('#passwordLabel').after('<span  class="success">✓</span>');
//     passwordValidBoolean = true;
//   }
//   if (passwordValidBoolean && emailValidBoolean && usernameValidBoolean) {
//     console.log('VALIDATION IS SUCCESFULL');
//   }
// });
