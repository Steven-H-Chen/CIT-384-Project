document.addEventListener('DOMContentLoaded', function () {
    // Sample values for demonstration
    let skipVotes = 0;
    const totalListeners = 5;
    const majorityNeeded = Math.ceil(totalListeners / 2);
    const adminPassword = "admin123"; // Set your admin password here
    let player; // YouTube player variable

    // Get elements from the DOM
    const skipButton = document.getElementById('vote-skip-button');
    const skipDisplay = document.getElementById('skip-count');
    const currentSkipCountDisplay = document.getElementById('current-skip-count');
    const totalListenersDisplay = document.getElementById('total-listeners');
    const majorityDisplay = document.getElementById('majority-needed');
    const youtubePlayerUser = document.getElementById('youtube-player');
    const videoContainer = document.getElementById('video-container');
    const skipCountSection = document.getElementById('skip-count-section');
    const loginButton = document.getElementById('login-button');
    const adminPasswordInput = document.getElementById('admin-password');
    const loginMessage = document.getElementById('login-message');
    const resetButton = document.getElementById('reset-skip-count');
    const adminLoginSection = document.getElementById('admin-login'); // Reference to login section

    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('youtube-player', {
            events: {
                'onReady': onPlayerReady,
            }
        });
    };

    function onPlayerReady(event) {
        // Admin controls are no longer present
    }

    // Set initial values for user page
    if (skipButton) {
        totalListenersDisplay.textContent = totalListeners;
        majorityDisplay.textContent = majorityNeeded;

        // Add event listener for the skip vote button
        skipButton.addEventListener('click', function () {
            skipVotes++;
            skipDisplay.textContent = `Votes to Skip: ${skipVotes}`;
            updateAdminSkipCount();

            // Check if skip votes reach the majority needed
            if (skipVotes >= majorityNeeded) {
                alert('Majority voted to skip the song!');
                skipVotes = 0;
                skipDisplay.textContent = `Votes to Skip: ${skipVotes}`;
                updateAdminSkipCount();
            }
        });
    }

    // Set initial value for admin page
    if (loginButton) {
        // Add event listener for the admin login button
        loginButton.addEventListener('click', function () {
            const password = adminPasswordInput.value;

            if (password === adminPassword) {
                loginMessage.textContent = "Login successful! You now have access.";
                adminLoginSection.style.display = "none"; // Hide login section
                videoContainer.style.display = "flex"; // Show the video player
                skipCountSection.style.display = "block"; // Show skip count section
                adminPasswordInput.value = ""; // Clear the input field
                currentSkipCountDisplay.textContent = `Votes to Skip: ${skipVotes}`; // Initialize the skip count display
            } else {
                loginMessage.textContent = "Incorrect password. Please try again.";
            }
        });

        // Add event listener for the reset button
        if (resetButton) {
            resetButton.addEventListener('click', function () {
                skipVotes = 0; // Reset skip votes
                updateAdminSkipCount();
                skipDisplay.textContent = `Votes to Skip: ${skipVotes}`; // Update user skip display
                alert('Skip count has been reset.');
            });
        }
    }

    function updateAdminSkipCount() {
        // Update the skip count displayed on the admin side
        if (currentSkipCountDisplay) {
            currentSkipCountDisplay.textContent = `Votes to Skip: ${skipVotes}`;
        }
    }
});
