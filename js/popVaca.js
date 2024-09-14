function selector(item) {
  item.addEventListener("click", () => {
    let index = 0;
    const selectedLi = item.id;

    if (selectedLi === "popSelector0") {
      index = 0;
    }
    if (selectedLi === "popSelector1") {
      index = 1;
    }
    if (selectedLi === "popSelector2") {
      index = 2;
    }
    if (selectedLi === "popSelector3") {
      index = 3;
    }
    const itemDisplay = document.querySelector(`#${selectedLi}Display`);
    const items = document.querySelectorAll(".popSelectContent li");
    items.forEach((item) => {
      item.style.visibility = "hidden";
      item.style.opacity = "0";
    });
    setTimeout(() => {
      itemDisplay.style.visibility = "visible";
      itemDisplay.style.opacity = "1";
    }, 300);

    const selectors = document.querySelectorAll(".popSelector li");

    for (let i = 0; i < index; i++) {
      const needCircle = document.querySelector(`#popSelector${i}`);
      needCircle.style.borderBottom = "2px solid #081c3a";
      document.querySelector(`.selectorDot${i}`).style.backgroundColor =
        "#081c3a";

      const circle = document.querySelector(`.selectorDotCircle${i}`);
      if (circle) {
        circle.classList.remove(`selectorDotCircle${i}`);

        setTimeout(() => {
          circle.classList.remove("enlarged");
        }, 0);
        needCircle.removeChild(circle);
      }
    }

    const needBorder = document.querySelector(`#popSelector${index}`);
    needBorder.style.borderBottom = "2px solid #081c3a";
    const secondDiv = document.querySelector(
      `#popSelector${index}>div:nth-child(2)`
    );

    if (!secondDiv) {
      const needCircle = document.querySelector(`#popSelector${index}`);
      const circle = document.createElement("div");

      needCircle.appendChild(circle);
      circle.classList.add(`selectorDotCircle${index}`);

      setTimeout(() => {
        circle.classList.add("enlarged");
      }, 0);
      document.querySelector(`.selectorDot${index}`).style.backgroundColor =
        "#081c3a";
    }

    for (let i = index + 1; i < selectors.length; i++) {
      const noNeedBorder = document.querySelector(`#popSelector${i}`);
      noNeedBorder.style.borderBottom = "2px solid #efeff7";
      document.querySelector(`.selectorDot${i}`).style.backgroundColor =
        "#efeff7";
      const secondDiv = document.querySelector(
        `#popSelector${i}>div:nth-child(2)`
      );

      if (secondDiv) {
        const needCircle = document.querySelector(`#popSelector${i}`);
        const circle = document.querySelector(`.selectorDotCircle${i}`);

        // Add the class 'smallDot' to the new div

        circle.classList.remove(`selectorDotCircle${i}`);

        setTimeout(() => {
          circle.classList.remove("enlarged");
        }, 0);
        needCircle.removeChild(circle);
        document.querySelector(`.selectorDot${i}`).style.backgroundColor =
          "#efeff7";
      }
    }
  });
}

export default selector;
