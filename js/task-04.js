let counterValue = 0;

const spanEl = document.querySelector("#value");

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", onincrementBtn);

function onincrementBtn() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", ondecrementBtn);

function ondecrementBtn() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}
