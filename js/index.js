document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.getElementById('user-button');
    const adminButton = document.getElementById('admin-button');
    const toggleButton = document.getElementById('toggle-button');

    // Check localStorage for theme preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.innerText = 'Switch to Light Mode';
    }

    // Redirect to User page
    userButton.addEventListener('click', () => {
        window.location.href = 'user.html';
    });

    // Redirect to Admin page
    adminButton.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });

    // Theme toggle functionality
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
        toggleButton.innerText = isDarkMode ? 'Switch to Light Mode' : 'Toggle Dark Mode';
    });
});
