// Script para agregar la clase 'selected' al enlace clickeado
document.querySelectorAll('#sidebar #menu li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelectorAll('#sidebar #menu li a').forEach(function(link) {
            link.classList.remove('selected');
        });
        
        link.classList.add('selected');
    });
});

// Funcionalidad del buscador de proyectos
document.getElementById('search').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var proyectos = document.querySelectorAll('#proyectos-lista li');

    proyectos.forEach(function(proyecto) {
        var title = proyecto.querySelector('h3 a').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            proyecto.style.display = 'block';
        } else {
            proyecto.style.display = 'none';
        }
    });
});
