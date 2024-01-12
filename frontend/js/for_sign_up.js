function validateFormForSignUp() {
    var fullnameInput = document.getElementById('fullname');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var restaurantRadio = document.getElementById('restaurant');
    var generalUserRadio = document.getElementById('general-user');
    var nameValidationError = document.getElementById('nameValidationError');
    var emailValidationError = document.getElementById('emailValidationError');
    var passwordValidationError = document.getElementById('passwordValidationError');
    var radioValidationError = document.getElementById('radioValidationError');
    var isValid = true;
    // Validation for user name
    if (fullnameInput.value.trim() === '') {
        nameValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        nameValidationError.classList.add('hidden');
    }
    // Validation for email
    if (emailInput.value.trim() === '') {
        emailValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        emailValidationError.classList.add('hidden');
    }
    // Validation for password
    if (passwordInput.value.trim() === '') {
        passwordValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        passwordValidationError.classList.add('hidden');
    }
    // Validation for radio buttons
    if (!restaurantRadio.checked && !generalUserRadio.checked) {
        radioValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        radioValidationError.classList.add('hidden');
    }
    return isValid;
}
