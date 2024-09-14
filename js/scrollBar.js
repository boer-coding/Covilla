function scroll() {
  const scrollBarBig = document.querySelector(".scrollBarBig");
  const scrollBarSmall = document.querySelector(".scrollBarSmall");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll ratio
    const scrollRatio = scrollTop / scrollHeight;

    // Calculate the maximum possible movement for scrollBarSmall inside scrollBarBig
    const maxMovement = scrollBarBig.clientHeight - scrollBarSmall.clientHeight;

    // Set the new top position for scrollBarSmall
    const newPosition = scrollRatio * maxMovement;
    scrollBarSmall.style.top = `${newPosition}px`;
  });
}

function navBar() {
  const navTab = document.querySelector(".navTab");
  const navTabContainer = document.querySelector(".navTabContainer");
  const navDesButtonText = document.querySelector(".navDesButtonText");
  const navDesButtonImg = document.querySelector(".navDesButtonImg");
  const navLogo = document.querySelector(".navLogo");
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = Math.min(80, scrollTop);
    navTab.style.height = height + "px";

    if (height > 0) {
      navTab.style.borderBottom = "1px solid rgba(192, 192, 211, 0.2)"; // Ensure the border is visible when scrolling
    }

    if (height > 35) {
      navTabContainer.style.opacity = "1"; // Make the container visible
      navLogo.style.color = "rgb(74, 89, 111)";
      navDesButtonText.style.color = "rgb(74, 89, 111)";
      navDesButtonImg.style.backgroundImage = "url(../img/button/pull-des.svg)";
    } else {
      navTabContainer.style.opacity = "0"; // Hide the container
      navLogo.style.color = "white";
      navDesButtonText.style.color = "white";
      navDesButtonImg.style.backgroundImage = "url(../img/button/pull-white.svg)";
    }
  });
}

export { scroll, navBar };
