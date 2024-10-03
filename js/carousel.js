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
    carouseUl.style.transition = "left 1.8s ease";
    items[carIndex].classList.remove("active");
    carIndex++;
    if (carIndex < total) {
      items[carIndex].classList.add("active");
      move -= itemWidth;
      carouseUl.style.left = `${move}px`;
      trans(); // Update mouse move effect for the new item

    }
    if (carIndex === total) {
      setTimeout(() => {
        items[carIndex].classList.add("active");

        carouseUl.style.transition = "none";
        carIndex = 1;
        trans(); // Update mouse move effect for the new item

        move = -710;
        items[carIndex].classList.add("active");
        carouseUl.style.left = `${move}px`;
        items[total].classList.remove("active");
      }, 800); // Match transition duration
    }
  });

  carButtonLeft.addEventListener("click", () => {
    carouseUl.style.transition = "left 0.8s ease";
    items[carIndex].classList.remove("active");
    carIndex--;
    if (carIndex > 0) {
        trans(); // Update mouse move effect for the new item

      items[carIndex].classList.add("active");
      move += itemWidth;
      carouseUl.style.left = `${move}px`;
    }

    if (carIndex === 0) {
      items[total].style.transition = "none";
      carouseUl.style.transition = "none";
      items[total].classList.add("active");

      carIndex = items.length - 2;
      trans(); // Update mouse move effect for the new item

      move = -itemWidth * (items.length - 2);
      carouseUl.style.left = `${move}px`;

      setTimeout(() => {
        items[total].style.transition = "all 0.8s ease";
        items[total].classList.remove("active");

        items[carIndex].classList.add("active");
        carouseUl.style.transition = "left 0.8s ease";

      }, 800); // Match transition duration
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
      const yPos = ((e.clientY - rect.top) / rect.height) *100;
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
