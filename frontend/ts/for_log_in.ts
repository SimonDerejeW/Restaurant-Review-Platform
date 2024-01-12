function validateFormForLogIn(): boolean {
    let usernameInput = document.getElementById('username') as HTMLInputElement;
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    
  
    let nameValidationError = document.getElementById('nameValidationError') as HTMLElement;
    let passwordValidationError = document.getElementById('passwordValidationError') as HTMLElement;
    let radioValidationError = document.getElementById('radioValidationError') as HTMLElement;
  
    let isValid: boolean = true;
  
    // Validation for user name
    if (usernameInput.value.trim() === '') {
      nameValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      nameValidationError.classList.add('hidden');
    }
  
    // Validation for password
    if (passwordInput.value.trim() === '') {
      passwordValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      passwordValidationError.classList.add('hidden');
    }
  
    
    return isValid;
  }
  