
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        if (email === userData.email && password === userData.password) {
            window.location.href = 'homepage.html'; 
        } else {
            alert('Invalid email or password!');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }

    document.getElementById('loginForm').reset();
});

document.getElementById('signupRedirect').addEventListener('click', function() {
    window.location.href = 'signup.html'; 
});
