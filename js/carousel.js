let carIndex = 2; // Initialize the index

function caro() {
  const carButtonLeft = document.querySelector(".carButtonLeft");
  const carButtonRight = document.querySelector(".carButtonRight");
  const carouseUl = document.querySelector(".carouseUl");
  const items = document.querySelectorAll(".carouseLi");
  const total = 5;
  const itemWidth = 710; // Ensure this matches the actual width of your items
  // Set initial variables
  let move = -2 * itemWidth; // Start at the first real item

  // Set initial position to show the first real item
  carouseUl.style.left = `${move}px`;
  trans(); // Initialize the mouse move effect for the current item

  carButtonRight.addEventListener("click", () => {
    items[carIndex].classList.remove("active");
    carIndex++;

    if (carIndex === total) {
      setTimeout(() => {
        carouseUl.style.transition = "none";
        carIndex = 1;
        trans(); // Update mouse move effect for the new item

        move = -710;

        items[carIndex].classList.add("active");
        carouseUl.style.left = `${move}px`;
      }, 0); // Match transition duration
    } else {
      items[carIndex].classList.add("active");
      move -= itemWidth;
      carouseUl.style.left = `${move}px`;
      carouseUl.style.transition = "left 1.8s ease";

      trans(); // Update mouse move effect for the new item
    }
  });

  carButtonLeft.addEventListener("click", () => {
    carouseUl.style.transition = "left 0.8s ease";
    items[carIndex].classList.remove("active");
    carIndex--;

    if (carIndex === 0) {
      carouseUl.style.transition = "none";

      carIndex = items.length - 2;
      trans(); // Update mouse move effect for the new item

      move = -itemWidth * carIndex;
      carouseUl.style.left = `${move}px`;
      items[carIndex].classList.add("active");

      setTimeout(() => {
        carouseUl.style.transition = "left 0.8s ease";
      }, 800); // Match transition duration
    } else {
      trans(); // Update mouse move effect for the new item

      items[carIndex].classList.add("active");
      move += itemWidth;
      carouseUl.style.left = `${move}px`;
    }
  });
}

function trans() {
  // Get the specific <li> element based on carIndex
  const carouseLi = document.querySelector(
    `.carouseUl .carouseLi:nth-child(${carIndex + 1})`
  );

  if (carouseLi) {
    carouseLi.addEventListener("mousemove", function (e) {
      const rect = e.target.getBoundingClientRect();
      const xPos = ((e.clientX - rect.left) / rect.width) * 100;
      const yPos = ((e.clientY - rect.top) / rect.height) * 100;
      e.target.style.backgroundPosition = `${xPos}% ${yPos}%`;
    });

    carouseLi.addEventListener("mouseleave", function (e) {
      e.target.style.backgroundPosition = "center";
    });
  } else {
    console.error(`Element at index ${carIndex} not found.`);
  }
}

export { trans, caro };
