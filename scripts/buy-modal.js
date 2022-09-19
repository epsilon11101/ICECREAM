let buy_button = document.getElementById("buy-btn");
let buy_modal = document.getElementsByClassName("buy-modal");
let close_button = document.querySelector(".buy-modal  .fa-xmark");
let send_button = document.querySelector(".buy-modal  button");

let closeModal = () => buy_modal[0].classList.toggle("hidde-buy");

console.log(close_button);
buy_button.addEventListener("click", closeModal);
close_button.addEventListener("click", closeModal);
send_button.addEventListener("click", closeModal);
