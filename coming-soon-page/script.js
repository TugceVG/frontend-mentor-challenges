function signUp() {
  const email = document.querySelector("#email").value;
  const errorMsg = document.querySelector("#error-msg");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}
