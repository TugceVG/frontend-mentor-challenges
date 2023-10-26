// const source = require("./assets/images/image-web-3-mobile.jpg");

const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');
const container = document.getElementById('container');
const image = document.getElementById('image');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('opened');
    container.classList.toggle("dark");
});

window.addEventListener('resize', function (event) {
    const w = window.innerWidth;
    if (w <= 768) {
        image.src = "./assets/images/image-web-3-mobile.jpg";
    }
});




