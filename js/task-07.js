const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

function onInputChange() {
  spanEl.style.fontSize = inputEl.value + "px";
}

inputEl.addEventListener("input", onInputChange);
