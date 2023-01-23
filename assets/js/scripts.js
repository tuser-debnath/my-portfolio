// Contact Form JS
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const subjectInput = document.getElementById("contactSubject");
  const messageInput = document.getElementById("contactMessage");
  const errorInput = document.getElementById("error-text");

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const subjectValue = subjectInput.value;
  const messageValue = messageInput.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    subjectValue: subjectValue,
    messageValue: messageValue,
  };
  if (nameValue && emailValue && subjectValue && messageValue) {
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
    errorInput.innerHTML = "";
    emailjs.send(
      "home_portfolio",
      "template_yf42ivl",
      templateParams,
      "7PqATduA0kVqa9ePn"
    );
  } else {
    errorInput.innerHTML = "Please fill all the form";
  }
});

// Preloader JS
window.onload = function () {
  const preloaderArea = document.getElementById("preloader-area");
  preloaderArea.className = "page-loaded";
  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 700);
};
