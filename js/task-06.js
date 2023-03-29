// const inputEl = document.querySelector("#validation-input");
// const inputElLength = Number(inputEl.dataset.length);

// function handleInputEl() {
//   if (inputEl.value.length === inputElLength) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// }

// inputEl.addEventListener("blur", handleInputEl);

// const onValidationValue = (event) => {
//   const value = event.target.value;

//   inputEl.classList.add("invalid");

//   value.trim().length === inputElLength && value.trim() !== ""
//     ? inputEl.classList.replace("invalid", "valid")
//     : inputEl.classList.replace("valid", "invalid");
// };
// inputEl.addEventListener("blur", onValidationValue);

const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.dataset.length);

function handleInputEl(event) {
  inputEl.classList.add("invalid");
  if (inputElLength === event.target.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
inputEl.addEventListener("blur", handleInputEl);
