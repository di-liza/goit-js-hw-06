
const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.dataset.length);

function handleInputEl() {
  if (inputEl.value.length === inputElLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", handleInputEl);
