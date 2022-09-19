let buy_button = document.getElementById("buy-btn");
let buy_modal = document.getElementsByClassName("buy-modal");
let close_button = document.querySelector(".buy-modal  .fa-xmark");
let send_button = document.querySelector(".buy-modal  button");

let closeModal = () => buy_modal[0].classList.toggle("hidde-buy");
let closeModalLocation = () => location_modal[0].classList.toggle("hidde-buy");

buy_button.addEventListener("click", closeModal);
close_button.addEventListener("click", closeModal);
send_button.addEventListener("click", closeModal);

let location_button = document.getElementById("location_btn");
let location_modal = document.getElementsByClassName("location-modal");
let close_location_button = document.querySelector(".location-modal .fa-xmark");
let watch_button = document.querySelector(".location-modal  input");

location_button.addEventListener("click", closeModalLocation);
close_location_button.addEventListener("click", closeModalLocation);
watch_button.addEventListener("click", closeModalLocation);
