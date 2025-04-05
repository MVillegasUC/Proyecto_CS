document.addEventListener("DOMContentLoaded", function () {
    // Obtener el campo de búsqueda y la lista de proyectos
    const searchInput = document.getElementById("search");
    const projects = document.querySelectorAll(".project-card");

    // Función para filtrar proyectos
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        projects.forEach(project => {
            const title = project.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                project.style.display = "block"; // Mostrar el proyecto
            } else {
                project.style.display = "none"; // Ocultar el proyecto
            }
        });
    });
});
