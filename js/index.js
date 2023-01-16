window.onload = () => {
  const header = document.querySelector(".header");
  const menu = header.querySelector(".menu");

  function activeMenu() {
    menu.classList.add("menu_active");
  }
  function deactiveMenu() {
    menu.classList.remove("menu_active");
  }

  let menuHandler = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        deactiveMenu();
      } else {
        activeMenu();
      }
    },
    { threshold: [0.25] }
  );
  menuHandler.observe(header);
};
