const loginFormEl = document.querySelector(".login-form");

const inputFormEmailEl = loginFormEl.firstElementChild.firstElementChild;

const inputFormPassEl =
  loginFormEl.firstElementChild.nextElementSibling.firstElementChild;

const loginFormBtnEl = loginFormEl.lastElementChild;

loginFormBtnEl.addEventListener("click", onFormSubmit);

function onFormSubmit() {
  loginFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputFormEmailEl.value !== "" && inputFormPassEl.value !== "") {
      const userData = {
        email: inputFormEmailEl.value,
        password: inputFormPassEl.value,
      };
      console.log(userData);
      event.target.reset();
    }
  });
  if (inputFormEmailEl.value === "" || inputFormPassEl.value === "") {
    alert("Будь ласка, заповніть всі поля форми.");
  }
}
