function createBubble() {
  const bub_section = document.getElementsByClassName("bubbles");
  const createElement = document.createElement("span");
  var size = Math.random() * 80;
  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  bub_section[0].appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBubble, 50);
