let girl_img = document.getElementsByClassName("hero-body__row_right_bg_girl");

let map_value = (x, in_min, in_max, out_min, out_max) => {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

onresize = () => {
  w = window.screen.width;
  h = window.screen.height;

  girl_img[0].style.left = `${map_value(w, 768, 1279, 18, 39)}vh`;
};
