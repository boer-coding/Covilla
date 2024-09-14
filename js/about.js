function about() {
  const aboutSection = document.querySelector(".aboutSection");
  const caroBottomUL = document.querySelector(".caroBottomUL");

  const caroWidth = caroBottomUL.scrollWidth; // Total width of all images
  const containerWidth = aboutSection.clientWidth; // Width of the visible container
  const picWidth = caroWidth / 6; // Width of each picture

  // Start with the middle images in view
  let currentTranslateX = picWidth;

  // Ensure a smooth transition by applying CSS
  caroBottomUL.style.transition = "transform 1s ease"; // Apply smooth transition for all changes

  // Event for mousemove inside the aboutSection
  aboutSection.addEventListener("mousemove", (event) => {
    const rect = aboutSection.getBoundingClientRect(); // Get the position of aboutSection
    const mouseX = event.clientX - rect.left; // Get mouse position relative to aboutSection

    // Calculate the percentage the mouse has moved relative to the section width
    const mousePercent = (mouseX / rect.width) * 2 - 1; // Normalize: -1 (left), 0 (center), 1 (right)

    // Calculate max and min translateX to ensure boundaries
    const maxTranslateX = picWidth; // Left boundary (first picture fully visible)
    const minTranslateX = -(caroWidth - containerWidth); // Right boundary (last picture fully visible)

    // Move proportionally to the width of the pictures, using the mousePercent
    currentTranslateX = (mousePercent * (caroWidth - containerWidth)) / 2; // Scale by a quarter of the total width

    // Ensure we don't exceed boundaries
    if (currentTranslateX > maxTranslateX) {
      currentTranslateX = maxTranslateX; // Stop at the leftmost point (first picture)
    }
    if (currentTranslateX < minTranslateX) {
      currentTranslateX = minTranslateX; // Stop at the rightmost point (last picture)
    }

    // Apply the transform to move the carousel
    caroBottomUL.style.transform = `translateX(${currentTranslateX}px)`;
  });

  // Event for mouseleave to reset the carousel position
  aboutSection.addEventListener("mouseleave", () => {
    // Reset to the original position smoothly
    caroBottomUL.style.transition = "transform 1s ease"; // Smooth transition for the reset
    caroBottomUL.style.transform = `translateX(0)`;
  });
}

export default about;

