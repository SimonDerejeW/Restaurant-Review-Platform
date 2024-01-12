function validateFormForLogIn() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    var nameValidationError = document.getElementById('nameValidationError');
    var passwordValidationError = document.getElementById('passwordValidationError');
    
    var isValid = true;
    // Validation for user name
    if (usernameInput.value.trim() === '') {
        nameValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        nameValidationError.classList.add('hidden');
    }
    // Validation for password
    if (passwordInput.value.trim() === '') {
        passwordValidationError.classList.remove('hidden');
        isValid = false; // Prevent form submission
    }
    else {
        passwordValidationError.classList.add('hidden');
    }
    
    return isValid;
}
