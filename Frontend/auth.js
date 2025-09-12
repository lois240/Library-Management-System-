const API_BASE = 'http://localhost:8080/api';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.user.role);
            localStorage.setItem('userId', data.user.id);
            window.location.href = 'dashboard.html';
        } else {
            alert('Login failed');
        }
    } catch (err) {
        console.error(err);
    }
});

// Register similar, POST to /auth/register

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Check auth on load
if (localStorage.getItem('token')) {
    // Redirect if logged in
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}