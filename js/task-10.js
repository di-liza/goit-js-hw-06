function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const сollectionEl = document.querySelector("#boxes");
const сontrolsEl = document.querySelector("#controls");
const inputEl = сontrolsEl.firstElementChild;
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
    const boxEl = document.createElement("div");

    boxEl.style.backgroundColor = getRandomHexColor();

    boxEl.classList.add("box");

    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;

    size += 10;

    сollectionEl.append(boxEl);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  сollectionEl.innerHTML = "";
}
