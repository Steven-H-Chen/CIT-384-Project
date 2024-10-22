document.getElementById('login-button').addEventListener('click', function() {
    const password = document.getElementById('admin-password').value;

    // Hardcoded password for demonstration
    const correctPassword = 'password';

    if (password === correctPassword) {
        // Hide the login form and show admin controls
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-controls').style.display = 'block';
    } else {
        alert('Invalid password');
    }
});


// Change YouTube video
document.getElementById('change-video-button').addEventListener('click', function() {
    const videoUrl = document.getElementById('video-url').value;
    const videoId = extractVideoId(videoUrl); // Function to extract video ID
    if (videoId) {
        document.getElementById('youtube-player').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        document.getElementById('video-url').value = ''; // Clear input
    } else {
        alert('Invalid YouTube URL');
    }
});

// Function to extract video ID from YouTube URL
function extractVideoId(url) {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|(?:youtu\.be\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Manage song suggestions
const suggestions = [];

// Add new song suggestion
document.getElementById('add-suggestion-button').addEventListener('click', function() {
    const suggestion = document.getElementById('song-suggestion').value;
    if (suggestion) {
        suggestions.push({ name: suggestion, votes: 0 });
        document.getElementById('song-suggestion').value = ''; // Clear input
        displaySuggestions();
    } else {
        alert('Please enter a suggestion');
    }
});

// Display suggestions
function displaySuggestions() {
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = ''; // Clear existing list
    suggestions.forEach((suggestion, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${suggestion.name} - Votes: ${suggestion.votes}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeSuggestion(index);
        });
        listItem.appendChild(removeButton);
        suggestionsList.appendChild(listItem);
    });
}

// Remove suggestion
function removeSuggestion(index) {
    suggestions.splice(index, 1);
    displaySuggestions();
}

// Reset voting counts for suggestions
document.getElementById('reset-suggestions-button').addEventListener('click', function() {
    suggestions.forEach(suggestion => suggestion.votes = 0);
    displaySuggestions();
});

// Admin skip count functionality
let skipVotes = 0;

// Increment skip vote count
document.getElementById('reset-skip-button').addEventListener('click', function() {
    skipVotes = 0;
    updateSkipCount();
});

// Update skip vote count display
function updateSkipCount() {
    document.getElementById('skip-count').textContent = `Skip Votes: ${skipVotes}`;
}

// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
