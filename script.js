  // Get all GIF elements by ID
  const gifs = document.querySelectorAll('#gif1, #gif2, #gif3, #gif4, #gif5');

  // Loop through all GIFs and add an event listener to each one
  gifs.forEach((gif) => {
    // Set a flag to check if the GIF has been played
    let hasPlayed = false;

    // Function to check if the GIF is in the viewport
    const isGifInViewport = () => {
      const rect = gif.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to play the GIF when scrolled into view
    const playGifIfVisible = () => {
      if (!hasPlayed && isGifInViewport()) {
        // Play the GIF
        gif.src = gif.src;
        hasPlayed = true;
      }
    };

    // Add the event listener to the window object
    window.addEventListener('scroll', playGifIfVisible);

    // Check if the GIF is visible on page load
    playGifIfVisible();
  });
