const hamMenu = document.querySelector(".ham-menu");
const menu = document.querySelector(".header-list");

hamMenu.addEventListener("click", function() {
    menu.classList.toggle('header-list');
});