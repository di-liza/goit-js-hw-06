// const loginFormEl = document.querySelector(".login-form");

// const inputFormEmailEl = loginFormEl.firstElementChild.firstElementChild;

// const inputFormPassEl =
//   loginFormEl.firstElementChild.nextElementSibling.firstElementChild;

// const loginFormBtnEl = loginFormEl.lastElementChild;

// loginFormBtnEl.addEventListener("click", onFormSubmit);

// function onFormSubmit() {
//   loginFormEl.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (inputFormEmailEl.value !== "" && inputFormPassEl.value !== "") {
//       const userData = {
//         email: inputFormEmailEl.value,
//         password: inputFormPassEl.value,
//       };
//       console.log(userData);
//       event.target.reset();
//     } else {
//       alert("Будь ласка, заповніть всі поля форми.");
//     }
//   });
// }
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const data = {};
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((val, name) => {
    data[name] = val;
    if (val === "") {
      return window.alert("всі поля повинні бути заповнені");
    }
  });
  if (data.email !== "" && data.password !== "") {
    form.reset();
  }
}
