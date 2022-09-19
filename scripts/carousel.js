carousel_items = Array.from(document.getElementsByClassName("carousel-item"));
carousel_selectors_hide = Array.from(
  document.getElementsByClassName("fa-circle")
);

let current = 0;
carousel_items[0].classList.add("carousel-item-selected");
carousel_selectors_hide[0].classList.add("fa-house");
carousel_selectors_hide[0].style = "color:#D41443";

carousel_selectors_hide.forEach((element, id) => {
  element.addEventListener("click", () => {
    current = id;

    carousel_selectors_hide.filter((_, i) => {
      if (i != current) {
        carousel_selectors_hide[i].classList.remove("fa-house");
        carousel_selectors_hide[i].classList.add("fa-circle");
        carousel_items[i].classList.remove("carousel-item-selected");
        carousel_items[i].classList.add("carousel-item");
        carousel_selectors_hide[i].style = "color:#D9D9D9";
      } else if (i === current) {
        carousel_items[i].style.animation = "hideEffect 2s ease";
        carousel_selectors_hide[i].classList.add("fa-house");
        carousel_selectors_hide[i].classList.remove("fa-circle");
        carousel_items[i].classList.add("carousel-item-selected");
        carousel_items[i].classList.remove("carousel-item");
        carousel_selectors_hide[i].style = "color:#D41443";
      }
    });
  });
});
