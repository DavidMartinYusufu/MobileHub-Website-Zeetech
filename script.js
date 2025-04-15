const openBtn = document.querySelector(".open_btn");
const navMenu = document.querySelector(".nav_menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("hidden");
});

