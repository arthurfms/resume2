window.addEventListener("load", () => {
  let today = new Date();
  let yearContainer = document.querySelector(".footer__year");
  yearContainer.textContent = today.getFullYear();

  // Manage menu on scroll
  let menu = document.querySelector(".menu");
  onscroll = () => {
    window.scrollY == 0
      ? menu.classList.remove("menu_active")
      : menu.classList.add("menu_active");
  };

  // Manage menu on click
  let menuButton = menu.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu_open");
  });
  let menuItems = [];
  menu.querySelectorAll(".menu-link").forEach((link) => menuItems.push(link));
  menuItems.push(menu.querySelector(".menu-logo"));
  menu
    .querySelectorAll(".menu-options__social a")
    .forEach((link) => menuItems.push(link));
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("menu_open");
    });
  });
});
