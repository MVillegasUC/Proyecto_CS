document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellido-paterno').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    if (!nombre || !apellidoPaterno || !ciudad || !mensaje) {
        alert('Por favor complete todos los campos requeridos');
        return;
    }
    
   
    alert('Formulario enviado correctamente');
    this.reset();
});
