function checkPassword() {
  const password = document.querySelector("input#password").value;
  const passwordC = document.querySelector("input#password-c").value;

  if (password !== passwordC) {
    document.querySelector("span.password-error").innerHTML = "* Passwords do not match";
    document.querySelector("input#password").classList.add("error");
    document.querySelector("input#password-c").classList.add("error");
  } else if (password.length !== 0 && passwordC.length !== 0) {
    document.querySelector("span.password-error").innerHTML = "";
    document.querySelector("input#password").classList.remove("error");
    document.querySelector("input#password-c").classList.remove("error");
  }
}