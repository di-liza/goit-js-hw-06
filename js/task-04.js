const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const textValue = document.querySelector("#value");

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick() {
  counterValue.increment();
  textValue.textContent = counterValue.value;
}
function onDecrementBtnClick() {
  counterValue.decrement();
  textValue.textContent = counterValue.value;
}
