function accordionHandler(buttonElement) {
  const pElement = document.querySelector(`#${buttonElement.id}-content`);
  const spanElement = buttonElement.getElementsByTagName("span")[0];
  pElement.classList.toggle("open");
  spanElement.classList.toggle("open");
}
