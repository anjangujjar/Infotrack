document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-phonenumber').textContent = user.phonenumber;
        document.getElementById('profile-email').textContent = user.email;
    } else {
        alert('No user data found. Please sign up or log in.');
        window.location.href = 'signup.html'; 
    }
});

function logout() { 
    window.location.href = 'signin.html'; 
}
