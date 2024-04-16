window.addEventListener("load", (event) => {
  let body = document.querySelector(".page");
  let menu = body.querySelector(".menu");
  let menuButton = menu.querySelector(".menu__button");
  let menuItems = menu.querySelectorAll(".menu__item");

  menuButton.addEventListener("click", (evt) =>
    menu.classList.toggle("menu_collapse")
  );
  menuItems.forEach((item) => {
    item.addEventListener("click", (evt) =>
      menu.classList.contains("menu_collapse")
        ? menu.classList.toggle("menu_collapse")
        : ""
    );
  });

  // HANDLE SLIDES
  const handleSlides = (slidesContainer) => {
    let slides = slidesContainer.querySelector(".slides__items");
    let arrows = slidesContainer.querySelectorAll(".slides__arrow i");
    let arrowLeft = arrows[0];
    let arrowRight = arrows[1];
    let slidesLength = slides.querySelectorAll(".slides__item").length;
    arrowLeft.addEventListener("click", () => {
      let currClass = slides.classList[1];
      let newClass;
      slides.classList.remove(currClass);
      if (parseInt(currClass[currClass.length - 1]) == 0) {
        newClass = `slides__items_${slidesLength - 1}`;
      } else {
        newClass = `slides__items_${
          parseInt(currClass[currClass.length - 1]) - 1
        }`;
      }
      slides.classList.add(newClass);
    });
    arrowRight.addEventListener("click", () => {
      let currClass = slides.classList[1];
      let newClass;
      slides.classList.remove(currClass);
      if (parseInt(currClass[currClass.length - 1]) == slidesLength - 1) {
        newClass = "slides__items_0";
      } else {
        newClass = `slides__items_${
          parseInt(currClass[currClass.length - 1]) + 1
        }`;
      }
      slides.classList.add(newClass);
    });
  };
  handleSlides(body.querySelector(".slides"));
});
