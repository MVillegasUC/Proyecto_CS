// Script para el filtro de proyectos
document.getElementById("search").addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const proyectos = document.querySelectorAll("#proyectos-lista li");

    proyectos.forEach(function(proyecto) {
        const proyectoName = proyecto.textContent.toLowerCase();
        if (proyectoName.includes(searchTerm)) {
            proyecto.style.display = "list-item";
        } else {
            proyecto.style.display = "none";
        }
    });
});
