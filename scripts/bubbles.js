function createBubble() {
  const bub_section = document.getElementsByClassName("bubbles");
  const createElement = document.createElement("span");
  let size = Math.random() * 30;
  createElement.style.width = size + "px";
  createElement.style.height = size + "px";

  let pos = Math.random() * (document.documentElement.clientWidth - 100);

  console.log(document.documentElement.clientWidth, pos);
  createElement.style.left = pos + "px";

  bub_section[0].appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBubble, 300);
