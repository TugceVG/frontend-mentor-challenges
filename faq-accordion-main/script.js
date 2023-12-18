function accordionHandler(container) {
  const pElement = document.querySelector(`#${container.id}-content`);
  const spanElement = container.getElementsByTagName("span")[0];
  pElement.classList.toggle("open");
  spanElement.classList.toggle("open");
}
