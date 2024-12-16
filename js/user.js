document.addEventListener('DOMContentLoaded', () => {
    const indexButton = document.getElementById('index-button');
    const adminButton = document.getElementById('admin-button');

    // Redirect to User page
    indexButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Redirect to Admin page
    adminButton.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });

    const suggestionList = document.getElementById('suggestion-list');
    const skipButton = document.getElementById('skip-button');
    const skipCountDisplay = document.getElementById('skip-count');

    // Initialize skip count
    let skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
    skipCountDisplay.innerText = skipCount;

    // Load suggestions and votes
    function loadSuggestions() {
        const suggestions = JSON.parse(localStorage.getItem('songSuggestions')) || [];
        suggestionList.innerHTML = '';

        suggestions.forEach(suggestion => {
            const voteCount = localStorage.getItem(suggestion) ? localStorage.getItem(suggestion) : 0;

            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('suggestion');
            suggestionDiv.innerHTML = `
                <span>${suggestion} (Votes: <span id="${suggestion}-count">${voteCount}</span>)</span>
                <button class="vote-button" data-song="${suggestion}">Vote for Suggestion</button>
            `;

            suggestionList.appendChild(suggestionDiv);
        });

        // Add event listeners for voting on suggestions
        document.querySelectorAll('.vote-button').forEach(button => {
            button.addEventListener('click', () => {
                const song = button.getAttribute('data-song');
                let count = localStorage.getItem(song) ? parseInt(localStorage.getItem(song)) : 0;
                count++;
                localStorage.setItem(song, count);
                document.getElementById(`${song}-count`).innerText = count;
                // Alert removed
            });
        });
    }

    // Vote to skip the current video
    skipButton.addEventListener('click', () => {
        skipCount++;
        localStorage.setItem('skipCount', skipCount);
        skipCountDisplay.innerText = skipCount;
        // Alert removed
    });

    // Initial load
    loadSuggestions();
});
