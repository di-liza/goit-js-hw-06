function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesEl = document.querySelector("#boxes");
const divControlsEl = document.querySelector("#controls");
const inputEl = divControlsEl.firstElementChild;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");

    divEl.style.backgroundColor = getRandomHexColor();

    divEl.classList.add("box");

    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;

    size += 10;

    divBoxesEl.append(divEl);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  divBoxesEl.innerHTML = "";
}
