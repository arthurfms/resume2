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
});
