document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.getElementById('user-button');
    const adminButton = document.getElementById('admin-button');
    const graphButton = document.getElementById('graph-button');

    // Redirect to User page
    userButton.addEventListener('click', () => {
        window.location.href = 'user.html';
    });

    // Redirect to Admin page
    adminButton.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });

        // Redirect to Admin page
    graphButton.addEventListener('click', () => {
        window.location.href = 'graph.html';
    });
});
