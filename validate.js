document
  .getElementById("contactForm")
  .addEventListener("input", handleSubmitForm);

document
  .querySelector(".contact-button")
  .addEventListener("click", handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  console.log("click");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");
  const errorNome = document.getElementById("errorNome");
  const errorEmail = document.getElementById("errorEmail");
  const errorAssunto = document.getElementById("errorAssunto");
  const errorMensagem = document.getElementById("errorMensagem");
  const submitButton = document.getElementById("submitButton");

  let isValid = true;

  if (nome.value.trim() === "" || nome.value.length > 50) {
    errorNome.style.display = "block";
    isValid = false;
  } else {
    errorNome.style.display = "none";
  }

  if (
    email.value.trim() === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    errorEmail.style.display = "block";
    isValid = false;
  } else {
    errorEmail.style.display = "none";
  }

  if (assunto.value.trim() === "" || assunto.value.length > 50) {
    errorAssunto.style.display = "block";
    isValid = false;
  } else {
    errorAssunto.style.display = "none";
  }

  if (mensagem.value.trim() === "" || mensagem.value.length > 300) {
    errorMensagem.style.display = "block";
    isValid = false;
  } else {
    errorMensagem.style.display = "none";
  }

  submitButton.disabled = !isValid;
}
