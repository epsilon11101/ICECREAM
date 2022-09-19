function createBubble() {
  const bub_section = document.getElementsByClassName("bubbles");
  const createElement = document.createElement("span");
  var size = Math.random() * 60;
  createElement.style.width = 10 + size + "px";
  createElement.style.height = 10 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  bub_section[0].appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBubble, 300);
