// selecting all elements needed

const form = document.querySelector("form");
const nameInput = form.querySelector(".name");
const emailInput = form.querySelector("#email");
const textArea = document.querySelector("#message");


form.addEventListener("submit",(e) => {
  e.preventDefault();
  const userInfo = {
    name:nameInput.value,
    email:emailInput.value,
    message:textArea.value
  }

  nameInput.value = "",
  emailInput.value = "",
  textArea.value = ""

  console.log(userInfo)
})