let nav_mobile = document.getElementsByClassName("nav-mobile-hero");
let girl_img = document.getElementsByClassName("hero-body__row_right_bg_girl");
let quantity = document.getElementsByClassName("hero-body__row_right_text");
let mob_menu = document.getElementsByClassName("mobile-menu");

const girl_img_left = girl_img[0].style.left;
const girt_img_top = girl_img[0].style.top;
const ft_left = quantity[0].style.left;
const ft_top = quantity[0].style.top;
const st_left = quantity[1].style.left;
const st_top = quantity[1].style.top;

const map_value = (x, in_min, in_max, out_min, out_max) => {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function my_onload() {
  w = document.documentElement.clientWidth;
  h = document.documentElement.clientHeight;

  if (w < 1280 && w >= 768) {
    nav_mobile[0].style.gap = `${map_value(w, 768, 1279, 36, 61)}vw`;
    girl_img[0].style.left = `${map_value(w, 768, 1279, 93, 125)}%`;
    girl_img[0].style.top = `${map_value(w, 768, 1279, 60, 68.9)}%`;
    quantity[0].style.left = `${map_value(w, 768, 1279, 141, 156)}%`;
    quantity[1].style.left = `${map_value(w, 768, 1279, 141, 156)}%`;
    quantity[0].style.top = `${map_value(w, 768, 1279, 15, 25)}%`;
    quantity[1].style.top = `${map_value(w, 768, 1279, 37, 49)}%`;
    mob_menu[0].style.left = `${map_value(w, 768, 1279, 67, 80)}%`;
  } else if (w >= 1280) {
    girl_img[0].style.left = girl_img_left;
    girl_img[0].style.top = girt_img_top;
    quantity[0].style.left = ft_left;
    quantity[1].style.left = ft_top;
    quantity[0].style.top = st_left;
    quantity[1].style.top = st_top;
  } else if (w < 768) {
    nav_mobile[0].style.gap = `${map_value(w, 320, 767, 10, 59)}vw`;
    mob_menu[0].style.left = `${map_value(w, 320, 767, 20, 67)}%`;
  }
}

onresize = () => {
  my_onload();
};

window.addEventListener("resize", function (event) {
  // do stuff here
});
