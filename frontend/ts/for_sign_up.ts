function validateFormForSignUp(): boolean {
    let fullnameInput = document.getElementById('fullname') as HTMLInputElement;
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let passwordInput = document.getElementById('password') as HTMLInputElement;
    let restaurantRadio = document.getElementById('restaurant') as HTMLInputElement;
    let generalUserRadio = document.getElementById('general-user') as HTMLInputElement;
  
    let nameValidationError = document.getElementById('nameValidationError') as HTMLElement;
    let emailValidationError = document.getElementById('emailValidationError') as HTMLElement;
    let passwordValidationError = document.getElementById('passwordValidationError') as HTMLElement;
    let radioValidationError = document.getElementById('radioValidationError') as HTMLElement;
  
    let isValid: boolean = true;
  
    // Validation for user name
    if (fullnameInput.value.trim() === '') {
      nameValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      nameValidationError.classList.add('hidden');
    }
  
    // Validation for email
    if (emailInput.value.trim() === '') {
      emailValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      emailValidationError.classList.add('hidden');
    }
  
    // Validation for password
    if (passwordInput.value.trim() === '') {
      passwordValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      passwordValidationError.classList.add('hidden');
    }
  
    // Validation for radio buttons
    if (!restaurantRadio.checked && !generalUserRadio.checked) {
      radioValidationError.classList.remove('hidden');
      isValid = false; // Prevent form submission
    } else {
      radioValidationError.classList.add('hidden');
    }
  
    return isValid;
  }
  