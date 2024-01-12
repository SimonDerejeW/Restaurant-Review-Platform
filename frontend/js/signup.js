document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signUpForm');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const roles = document.querySelector(
      'input[name="user-type"]:checked',
    ).value;

    const signupData = {
      username: username,
      email: email,
      password: password,
      roles: roles,
    };

    fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log('Signup failed:', data);
          // Handle error appropriately, e.g., show an error message to the user
        } else if (data.access_token) {
          console.log('Signup successful. Redirecting to login page...');
          // Redirect to login page
          window.location.href =
            'http://127.0.0.1:5500/frontend/PAGES/login.html';
        }
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        // Handle other errors, e.g., network issues
      });
  });
  function redirectToLogin() {
    window.location.href = 'http://127.0.0.1:5500/frontend/PAGES/login.html';
  }
  const LogInButton = document.getElementById('redirectToLogin');
  LogInButton.addEventListener('click', redirectToLogin);
});
