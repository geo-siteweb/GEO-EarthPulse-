function login(event) {
    event.preventDefault(); // Prevent the default form submission

    // Assuming your login logic is successful
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;

    // Logic to authenticate user here (e.g., AJAX request to server)

    // Simulate successful login for demonstration
    if (username && password) {
        showToast("Connexion réussie!"); // Show a success message
        setTimeout(() => {
            window.location.href = 'sign up.html'; // Redirect to index.html after 2 seconds
        }, 2000);
    } else {
        document.getElementById('loginPasswordError').innerText = "Erreur d'authentification. Vérifiez vos informations.";
    }
}

function register(event) {
    event.preventDefault(); // Prevent the default form submission

    // Logic to handle registration (e.g., AJAX request to server)

    const newUsername = document.getElementById('newUsername').value; 
    const newEmail = document.getElementById('newEmail').value; 
    const newPassword = document.getElementById('newPassword').value;

    // Simulate successful registration for demonstration
    if (newUsername && newEmail && newPassword) {
        showToast("Inscription réussie!"); // Show a success message
        setTimeout(() => {
            window.location.href = 'sign up.html'; // Redirect to index.html after 2 seconds
        }, 2000);
    } else {
        document.getElementById('registerPasswordError').innerText = "Erreur d'inscription. Vérifiez vos informations.";
    }
}

function checkPasswordStrength() {
    const passwordInput = document.getElementById('newPassword');
    const password = passwordInput.value;
    const strengthIndicator = document.getElementById('passwordStrength');

    // Example password strength check
    strengthIndicator.className = 'password-strength'; // Reset class
    if(password.length < 6) {
        strengthIndicator.classList.add('strength-weak');
    } else if(password.length < 10) {
        strengthIndicator.classList.add('strength-medium');
    } else {
        strengthIndicator.classList.add('strength-strong');
    }

    // Additional logic can be added to check for numbers, special characters, etc.
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.opacity = 1;

    // Hide the toast after 2 seconds
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);
}

// Button event handlers to show corresponding forms
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('show');
    document.getElementById('registerContainer').classList.remove('show');
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('registerContainer').classList.add('show');
    document.getElementById('loginContainer').classList.remove('show');
});
