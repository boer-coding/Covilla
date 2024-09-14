let carIndex = 2; // Initialize the index

function caro() {
    const carButtonLeft = document.querySelector(".carButtonLeft");
    const carButtonRight = document.querySelector(".carButtonRight");
    const carouseUl = document.querySelector(".carouseUl");
    const items = document.querySelectorAll(".carouseLi");
    const carouseFrHidden = document.querySelector(".carouseFrHidden");
    const carouseEgHidden = document.querySelector(".carouseEgHidden");
    const itemWidth = 710; // Ensure this matches the actual width of your items

    // Set initial variables
    let move = -2 * itemWidth; // Start at the first real item

    // Set initial position to show the first real item
    carouseUl.style.left = `${move}px`;
    trans(); // Initialize the mouse move effect for the current item

    carButtonRight.addEventListener("click", () => {
        items[carIndex].classList.add("activeNaN");
        carIndex++;
        if (carIndex >= items.length) carIndex = 0; // Loop back to start if at end
        items[carIndex].classList.remove("activeNaN");
        move -= itemWidth;

        carouseUl.style.transition = "left 1.5s ease";
        carouseUl.style.left = `${move}px`;

        // Remove active class from the previous item and add to the new one
        items.forEach((item) => item.classList.remove("active"));

        if (carIndex === items.length - 1) {
            carouseEgHidden.style.visibility = "visible";
            setTimeout(() => {
                carouseUl.style.transition = "none";
                move = -itemWidth;
                carouseUl.style.left = `${move}px`;
                carIndex = 1; // Adjust for zero-based indexing
                items[carIndex].classList.remove("activeNaN");
                items[carIndex].classList.add("active");
                trans(); // Update mouse move effect for the new item
            }, 800); // Match transition duration
        } else {
            items[carIndex].classList.add("active");
            trans(); // Update mouse move effect for the new item
        }
    });

    carButtonLeft.addEventListener("click", () => {
        items[carIndex].classList.add("activeNaN");
        carIndex--;
        if (carIndex < 0) carIndex = items.length - 1; // Loop back to end if at start
        items[carIndex].classList.remove("activeNaN");
        move += itemWidth;

        carouseUl.style.transition = "left 1s ease";
        carouseUl.style.left = `${move}px`;

        // Remove active class from the previous item and add to the new one
        items.forEach((item) => item.classList.remove("active"));

        if (carIndex === 0) {
            carouseFrHidden.style.visibility = "visible";
            setTimeout(() => {
                carouseUl.style.transition = "none";
                move = -itemWidth * (items.length - 2);
                carouseUl.style.left = `${move}px`;
                carIndex = items.length - 2;
                items[carIndex].classList.remove("activeNaN");
                items[carIndex].classList.add("active");
                trans(); // Update mouse move effect for the new item
            }, 800); // Match transition duration
        } else {
            items[carIndex].classList.add("active");
            trans(); // Update mouse move effect for the new item
        }
    });
}

function trans() {
    // Get the specific <li> element based on carIndex
    const carouseLi = document.querySelector(`.carouseUl .carouseLi:nth-child(${carIndex + 1})`);

    if (carouseLi) {
        carouseLi.addEventListener('mousemove', function(e) {
            const rect = e.target.getBoundingClientRect();
            const xPos = ((e.clientX - rect.left) / rect.width) * 100;
            const yPos = ((e.clientY - rect.top) / rect.height) * 100;
            e.target.style.backgroundPosition = `${xPos}% ${yPos}%`;
        });

        carouseLi.addEventListener('mouseleave', function(e) {
            e.target.style.backgroundPosition = 'center';
        });
    } else {
        console.error(`Element at index ${carIndex} not found.`);
    }
}


export { trans, caro };