function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const changeColorBtnEl = document.querySelector(".change-color");
const changeColorSpanEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  changeColorSpanEl.textContent = getRandomHexColor();
});
