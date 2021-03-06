const title = document.querySelector("#title");

const BASE_COLOR = "rgb(123, 75, 131)";
const OTHER_COLOR = "rgb(109, 32, 182)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;

}
title.addEventListener("mouseenter", handleClick);

init();
