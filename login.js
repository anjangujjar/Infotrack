document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUserData = localStorage.getItem('email');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        if (email === userData.email && password === userData.password) {
            alert('Login successful!');
            window.location.href = 'homepage.html';
        } else {
            alert('Invalid username or password!');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }

    document.getElementById('loginForm').reset();
});
