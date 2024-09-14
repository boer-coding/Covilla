function leftNav() {
  const navLinkFront = document.querySelector(".navLinkFront");
  const navBarLeft = document.querySelector(".navBarLeft");
  const bcgCover = document.querySelector(".bcgCover");
  const minus = document.querySelectorAll(".minus");
  const cross = document.querySelector(".cross");

  navLinkFront.addEventListener("click", () => {
    const currentTransform = getComputedStyle(navBarLeft).transform;

    if (currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
      // Check if it's at translateX(0px)
      navBarLeft.style.transform = "translateX(-448px)"; // Slide out
      bcgCover.style.visibility = "hidden";
      bcgCover.style.opacity = "0";
      minus.forEach((minu) => minu.classList.remove("minusNone"));
      cross.classList.add("crossNone");
    } else {
      navBarLeft.style.transform = "translateX(0px)"; // Slide in
      bcgCover.style.visibility = "visible";
      bcgCover.style.opacity = "1";
      minus.forEach((minu) => minu.classList.add("minusNone"));
      cross.classList.remove("crossNone");
    }
  });
}

function docuClose() {
  // Close the navBarLeft if clicking outside of it
  const navLinkFront = document.querySelector(".navLinkFront");
  const navBarLeft = document.querySelector(".navBarLeft");
  const bcgCover = document.querySelector(".bcgCover");
  const minus = document.querySelectorAll(".minus");
  const cross = document.querySelector(".cross");
  document.addEventListener("click", (event) => {
    const currentTransform = getComputedStyle(navBarLeft).transform;
    if (
      currentTransform === "matrix(1, 0, 0, 1, 0, 0)" &&
      !navBarLeft.contains(event.target) &&
      !navLinkFront.contains(event.target)
    ) {
      navBarLeft.style.transform = "translateX(-448px)"; // Slide out
      bcgCover.style.visibility = "hidden";
      bcgCover.style.opacity = "0";
      minus.forEach((minu) => minu.classList.remove("minusNone"));
      cross.classList.add("crossNone");
    }
  });
}

export { leftNav, docuClose };

// function handleNavBarToggle(navBarLeft, bcgCover) {
//   const currentTransform = getComputedStyle(navBarLeft).transform;

//   if (currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
//     navBarLeft.style.transform = "translateX(-448px)"; // Slide out
//     bcgCover.style.opacity = "0";
//     bcgCover.style.visibility = "hidden";
//   } else {
//     navBarLeft.style.transform = "translateX(0px)"; // Slide in
//     bcgCover.style.opacity = "1";
//     bcgCover.style.visibility = "visible";
//   }
// }

// function handleIconToggle(minus, cross) {
//   if (cross.classList.contains("crossNone")) {
//     minus.forEach((minu) => minu.classList.add("minusNone"));
//     cross.classList.remove("crossNone");
//   } else {
//     minus.forEach((minu) => minu.classList.remove("minusNone"));
//     cross.classList.add("crossNone");
//   }
// }

// function leftNav() {
//   const navLinkFront = document.querySelector(".navLinkFront");
//   const navBarLeft = document.querySelector(".navBarLeft");
//   const bcgCover = document.querySelector(".bcgCover");
//   let isAnimating = false;

//   navLinkFront.addEventListener("click", () => {
//     if (isAnimating) return;

//     isAnimating = true;
//     handleNavBarToggle(navBarLeft, bcgCover);

//     navBarLeft.addEventListener(
//       "transitionend",
//       () => {
//         isAnimating = false; // Reset the flag after transition ends
//       },
//       { once: true }
//     );
//   });
// }

// function navFrontLink() {
//   const navLinkFront = document.querySelector(".navLinkFront");
//   const minus = document.querySelectorAll(".minus");
//   const cross = document.querySelector(".cross");
//   let isAnimating = false;

//   navLinkFront.addEventListener("click", () => {
//     if (isAnimating) return;

//     isAnimating = true;
//     handleIconToggle(minus, cross);

//     const navBarLeft = document.querySelector(".navBarLeft");
//     navBarLeft.addEventListener(
//       "transitionend",
//       () => {
//         isAnimating = false; // Reset the flag after transition ends
//       },
//       { once: true }
//     );
//   });
// }

// function docuClose() {
//   // Close the navBarLeft if clicking outside of it
//   document.addEventListener("click", (event) => {
//     const navLinkFront = document.querySelector(".navLinkFront");
//     const navBarLeft = document.querySelector(".navBarLeft");
//     const bcgCover = document.querySelector(".bcgCover");
//     const currentTransform = getComputedStyle(navBarLeft).transform;
//     if (
//       currentTransform === "matrix(1, 0, 0, 1, 0, 0)" &&
//       !navBarLeft.contains(event.target) &&
//       !navLinkFront.contains(event.target)
//     ) {
//       handleNavBarToggle(navBarLeft, bcgCover);
//       handleIconToggle(
//         document.querySelectorAll(".minus"),
//         document.querySelector(".cross")
//       );
//     }
//   });
// }

// export { leftNav, navFrontLink,docuClose };
