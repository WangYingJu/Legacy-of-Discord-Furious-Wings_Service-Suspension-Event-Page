let cursorBall = document.querySelector(".cursor2");
let cursorOutline = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

document.addEventListener("mousemove", (e) => {
  cursorBall.style.top = e.pageY + "px";
  cursorBall.style.left = e.pageX + "px";

  cursorOutline.style.top = e.pageY + "px";
  cursorOutline.style.left = e.pageX + "px";
});

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    cursorOutline.classList.add("cursor-mousedown");
  }
});

document.addEventListener("mouseup", () => {
  cursorOutline.classList.remove("cursor-mousedown");
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursorOutline.classList.add("cursor-mouseover");
    cursorOutline.classList.add("rotate");
  });
  link.addEventListener("mouseleave", () => {
    cursorOutline.classList.remove("cursor-mouseover");
    cursorOutline.classList.remove("rotate");
  });
});
