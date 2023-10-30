const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');

function toggleSideMenu() {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('opened');
    sidebarBackdrop.classList.toggle('opened');
}

toggleButton.addEventListener('click', toggleSideMenu);

sidebarBackdrop.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        toggleSideMenu();
    }
});
