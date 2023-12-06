function signUp() {
  const email = document.querySelector("#email").value;
  const errorMsg = document.querySelector("#error-msg");
  const errorIcon = document.querySelector("#error-icon");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    hideEror(errorMsg, errorIcon);
  } else {
    showEror(errorMsg, errorIcon);
  }
}

function showEror(msg, icon) {
  msg.style.display = "block";
  icon.style.display = "block";
}

function hideEror(msg, icon) {
  msg.style.display = "none";
  icon.style.display = "none";
}
