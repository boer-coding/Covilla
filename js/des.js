// function des(navDesButton, navDesHidden, chooseDesHidden) {
//   navDesButton.addEventListener("click", () => {
//     const navVisibility = getComputedStyle(navDesHidden).visibility;
//     const chooseVisibility = getComputedStyle(chooseDesHidden).visibility;

//     if (navVisibility === "hidden") {
//       if (chooseVisibility === "visible") {
//         chooseDesHidden.classList.remove("visible"); // Hide the other element
//       }
//       navDesHidden.classList.add("visible"); // Show this element
//     } else {
//       navDesHidden.classList.remove("visible"); // Hide this element
//     }
//   });
// }

// function chooseDes(chooseDesButton, chooseDesHidden, navDesHidden) {
//   chooseDesButton.addEventListener("click", () => {
//     const chooseVisibility = getComputedStyle(chooseDesHidden).visibility;
//     const navVisibility = getComputedStyle(navDesHidden).visibility;

//     if (chooseVisibility === "hidden") {
//       if (navVisibility === "visible") {
//         navDesHidden.classList.remove("visible"); // Hide the other element
//       }
//       chooseDesHidden.classList.add("visible"); // Show this element
//     } else {
//       chooseDesHidden.classList.remove("visible"); // Hide this element
//     }
//   });
// }
// export { des, chooseDes };
function des(navDesButton, navDesHidden, chooseDesHidden) {
  navDesButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    toggleVisibility(navDesHidden, chooseDesHidden);
  });
}

function chooseDes(chooseDesButton, chooseDesHidden, navDesHidden) {
  chooseDesButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    toggleVisibility(chooseDesHidden, navDesHidden);
  });
}

function toggleVisibility(showElement, hideElement) {
  const showVisibility = getComputedStyle(showElement).visibility;
  const hideVisibility = getComputedStyle(hideElement).visibility;

  if (showVisibility === "hidden") {
    if (hideVisibility === "visible") {
      hideElement.classList.remove("visible"); // Hide the other element
    }
    showElement.classList.add("visible"); // Show this element
  } else {
    showElement.classList.remove("visible"); // Hide this element
  }
}

function clickPage(navDesHidden, chooseDesHidden) {
  document.addEventListener("click", (event) => {
    const navVisibility = getComputedStyle(navDesHidden).visibility;
    const chooseVisibility = getComputedStyle(chooseDesHidden).visibility;
    //checks whether the event.target (the element that was clicked) is inside the navDesHidden element.
    if (navVisibility === "visible" && !navDesHidden.contains(event.target)) {
      navDesHidden.classList.remove("visible");
    }
    if (
      chooseVisibility === "visible" &&
      !chooseDesHidden.contains(event.target)
    ) {
      chooseDesHidden.classList.remove("visible");
    }
  });
}

export { des, chooseDes, clickPage };
