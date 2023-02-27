function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

const boxesEL = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  inputEl.value = "";
  boxesEL.innerHTML = "";
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    size += 10;

    boxesEL.append(box);
  }
}
