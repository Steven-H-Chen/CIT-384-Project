document.addEventListener('DOMContentLoaded', function () {
    // Sample values for demonstration
    let skipVotes = 0;
    const totalListeners = 5;
    const majorityNeeded = Math.ceil(totalListeners / 2);

    // Get elements from the DOM
    const skipButton = document.getElementById('vote-skip-button');
    const skipDisplay = document.getElementById('skip-count');
    const totalListenersDisplay = document.getElementById('total-listeners');
    const majorityDisplay = document.getElementById('majority-needed');
    const youtubePlayer = document.getElementById('youtube-player');

    // Set initial values
    totalListenersDisplay.textContent = totalListeners;
    majorityDisplay.textContent = majorityNeeded;

    // Add event listener for the skip vote button
    skipButton.addEventListener('click', function () {
        skipVotes++;
        skipDisplay.textContent = `Votes to Skip: ${skipVotes}`;

        // Check if skip votes reach the majority needed
        if (skipVotes >= majorityNeeded) {
            alert('Majority voted to skip the song!');
            skipVotes = 0;
            skipDisplay.textContent = `Votes to Skip: ${skipVotes}`;
            skipYouTubeVideo();
        }
    });

    // Function to skip the YouTube video
    function skipYouTubeVideo() {
        youtubePlayer.src = youtubePlayer.src;  // Reload the player to move to the next video
    }
});
