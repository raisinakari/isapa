document.addEventListener('DOMContentLoaded', function() {
    const pageTransitionSound = new Audio('click.mp3'); // Replace with your audio file path
    const navigationLinks = document.querySelectorAll('nav a'); // Target only navigation links
  
    navigationLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.getAttribute('href');
  
        // Play the page transition sound
        pageTransitionSound.currentTime = 2;
        pageTransitionSound.play();
  
        // Wait for the sound to finish (or a short duration) before navigating
        const soundDurationMs = 500; // Adjust this to the length of your sound (in milliseconds)
        setTimeout(() => {
          window.location.href = targetUrl;
        }, soundDurationMs);
      });
    });
  