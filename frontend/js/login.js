document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
      username: username,
      password: password,
    };

    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error('Login failed:', data.error);
          // Handle error appropriately, e.g., show an error message to the user
        } else if (data.access_token) {
          console.log('Login successful. Saving access token...');
          // Save access token to sessionStorage or localStorage for future use
          sessionStorage.setItem('access_token', data.access_token);
          // You can also redirect the user to another page if needed
          window.location.href =
            'http://127.0.0.1:5500/frontend/PAGES/home.html';
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        // Handle other errors, e.g., network issues
      });
  });
});
