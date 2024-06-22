document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phonenumber = document.getElementById('phonenumber').value;
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const conpassword = document.getElementById('conpassword').value;

        const nameRegex = /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/;
        if (!name || !nameRegex.test(name)) {
            alert('Please enter a valid name without special characters and no leading or trailing spaces!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phonenumber)) {
            alert('Please enter a valid 10-digit phone number!');
            return;
        }

        if (password.length !== 10) {
            alert('Password must be exactly 10 characters long!');
            return;
        }

        if (password !== conpassword) {
            alert('Passwords do not match!');
            return;
        }

        const userData = {
            name: name,
            phonenumber: phonenumber,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userData));
        alert('Signup successful!');
        document.getElementById('signupForm').reset();

    });
    document.getElementById('signinButton').addEventListener('click', function() {
        window.location.href = 'signin.html';
    });
});
