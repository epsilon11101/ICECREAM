let girl_img = document.getElementsByClassName("hero-body__row_right_bg_girl");

let variable = (width) => {
  return width * 0.022;
};
onresize = () => {
  w = window.screen.width;
  h = window.screen.height;
  console.log(w, h, variable(w) + "vh");
  girl_img[0].style.left = `${variable(w)}vh`;
};
