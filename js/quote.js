function change() {
  const quoteAll = document.querySelectorAll(".quoteAll li");
  const quoteButtonLeft = document.querySelector(".quoteButtonLeft");
  const quoteButtonRight = document.querySelector(".quoteButtonRight");

  let index = 0;
  let isAnimating = false; // Add a flag to track if animation is ongoing

  let formerQuote = document.querySelector(".quote" + index);
  const quoteBar = document.querySelector(".quoteBar");

  function updateQuoteBar() {
    const quoteNumberElements = document.querySelectorAll(
      ".quoteNumber .quoteNum"
    );

    const currentQuoteNumberElement = quoteNumberElements[index];
    const numHeight = currentQuoteNumberElement.offsetHeight;
    const numOffsetTop = currentQuoteNumberElement.offsetTop;

    quoteBar.style.top = `${numOffsetTop - 22}px`;
    quoteBar.style.height = `${numHeight}px`;
  }

  function handleQuoteChange(newIndex) {
    if (isAnimating) return; // If animation is ongoing, do nothing
    isAnimating = true; // Set flag to indicate animation started

    index = newIndex;

    if (index > quoteAll.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = quoteAll.length - 1;
    }

    updateQuoteBar();

    const currentQuote = document.querySelector(".quote" + index);

    formerQuote.style.transition = "opacity 0.7s";
    formerQuote.style.opacity = "0";

    setTimeout(() => {
      formerQuote.style.visibility = "hidden";
      currentQuote.style.visibility = "visible";
      currentQuote.style.opacity = "1";

      // Update the formerQuote for the next transition
      formerQuote = currentQuote;

      // Reset the animation flag after transition is done
      isAnimating = false;
    }, 500); // Match this timeout with the fade-out duration
  }

  quoteButtonRight.addEventListener("click", () => {
    handleQuoteChange(index + 1);
  });

  quoteButtonLeft.addEventListener("click", () => {
    handleQuoteChange(index - 1);
  });

  updateQuoteBar();
}

export { change };

