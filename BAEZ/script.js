// Filtrar los proyectos según lo que el usuario ingrese en el buscador
const searchInput = document.getElementById('search');
const proyectosLista = document.getElementById('proyectos-lista');
const proyectos = proyectosLista.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    
    for (let i = 0; i < proyectos.length; i++) {
        const proyecto = proyectos[i];
        const link = proyecto.getElementsByTagName('a')[0];
        
        if (link.textContent.toLowerCase().includes(query)) {
            proyecto.style.display = '';
        } else {
            proyecto.style.display = 'none';
        }
    }
});
