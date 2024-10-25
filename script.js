let currentSection = 0;
const sections = document.querySelectorAll(".section");
const logo = document.getElementById("logo");

// Cambia el comportamiento de scroll utilizando el evento 'wheel'
window.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
        currentSection = Math.max(currentSection - 1, 0);
    }
    updateLogoPosition();
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
});

// Función para navegar a una sección específica
function navigateToSection(index) {
    currentSection = index;
    updateLogoPosition();
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
}

// Actualiza la posición del logo
function updateLogoPosition() {
    if (currentSection === 3) {
        logo.classList.add("move-right");
    } else {
        logo.classList.remove("move-right");
    }
}