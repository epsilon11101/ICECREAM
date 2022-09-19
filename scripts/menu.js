let menu_btn = document.getElementsByClassName("fa-bars");
let close_menu = document.getElementsByClassName("fa-xmark");
let menu = document.getElementsByClassName("mobile-menu");

let closeMenu = () => {
  console.log("clicked");
  menu[0].classList.toggle("hide-menu");
};

menu_btn[0].addEventListener("click", closeMenu);
close_menu[0].addEventListener("click", closeMenu);

console.log(menu_btn);
