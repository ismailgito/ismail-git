// script.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        // Successful login
        alert('Login successful!');
        document.getElementById('error-message').textContent = '';
        // Redirect to another page or perform other actions
    } else {
        // Failed login
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});