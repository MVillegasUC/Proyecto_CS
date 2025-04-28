class ProjectGallery {
    constructor(selector) {
        this.container = document.querySelector(selector);
        if (!this.container) return;
        
        this.projects = this.container.querySelectorAll('.project-card');
        this.modal = document.getElementById('project-modal');
        this.modalContent = document.querySelector('.modal-content');
        this.modalClose = document.querySelector('.modal-close');
        this.modalPrev = document.querySelector('.modal-prev');
        this.modalNext = document.querySelector('.modal-next');
        
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Configurar los click listeners para cada proyecto
        this.projects.forEach((project, index) => {
            project.addEventListener('click', () => this.openModal(index));
            
            // Añadir efecto hover
            project.addEventListener('mouseenter', this.handleProjectHover);
            project.addEventListener('mouseleave', this.handleProjectHoverEnd);
        });
        
        // Configurar los controles del modal
        if (this.modal) {
            this.modalClose.addEventListener('click', () => this.closeModal());
            this.modalPrev.addEventListener('click', () => this.showPrevProject());
            this.modalNext.addEventListener('click', () => this.showNextProject());
            
            // Permitir cerrar modal con Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeModal();
                if (e.key === 'ArrowLeft') this.showPrevProject();
                if (e.key === 'ArrowRight') this.showNextProject();
            });
            
            // Cerrar al hacer clic fuera del contenido
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.closeModal();
            });
        }
    }
    
    openModal(index) {
        if (!this.modal) return;
        
        this.currentIndex = index;
        this.updateModalContent();
        
        this.modal.classList.add('open');
        document.body.classList.add('modal-open');
        
        // Añadir animación de entrada
        this.modalContent.classList.add('animate-in');
        setTimeout(() => {
            this.modalContent.classList.remove('animate-in');
        }, 500);
    }
    
    closeModal() {
        if (!this.modal) return;
        
        // Añadir animación de salida
        this.modalContent.classList.add('animate-out');
        
        setTimeout(() => {
            this.modal.classList.remove('open');
            document.body.classList.remove('modal-open');
            this.modalContent.classList.remove('animate-out');
        }, 300);
    }
    
    showPrevProject() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.projects.length - 1;
        }
        
        this.updateModalContent(true);
    }
    
    showNextProject() {
        if (this.currentIndex < this.projects.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        
        this.updateModalContent();
    }
    
    updateModalContent(isPrev = false) {
        const project = this.projects[this.currentIndex];
        const title = project.querySelector('h3').textContent;
        const image = project.querySelector('img').src;
        const description = project.getAttribute('data-description');
        const technologies = project.getAttribute('data-technologies');
        const demoLink = project.getAttribute('data-demo');
        const repoLink = project.getAttribute('data-repo');
        
        // Crear el HTML del contenido del modal
        const techList = technologies.split(',')
            .map(tech => `<span class="tech-tag">${tech.trim()}</span>`)
            .join('');
        
        const content = `
            <div class="modal-header">
                <h2>${title}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${image}" alt="${title}">
                </div>
                <div class="modal-details">
                    <p>${description}</p>
                    <div class="technologies">
                        <h4>Tecnologías:</h4>
                        <div class="tech-tags">
                            ${techList}
                        </div>
                    </div>
                    <div class="modal-links">
                        ${demoLink ? `<a href="${demoLink}" target="_blank" class="btn btn-primary">Ver Demo</a>` : ''}
                        ${repoLink ? `<a href="${repoLink}" target="_blank" class="btn btn-secondary">Ver Código</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Animación de transición
        this.modalContent.classList.add(isPrev ? 'slide-right' : 'slide-left');
        
        setTimeout(() => {
            this.modalContent.innerHTML = content;
            this.modalContent.classList.remove('slide-left', 'slide-right');
        }, 300);
    }
    
    handleProjectHover(e) {
        const overlay = this.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
        
        // Efecto de elevación
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    }
    
    handleProjectHoverEnd(e) {
        const overlay = this.querySelector('.project-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
        
        // Quitar efecto de elevación
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }
}

// Inicializar la galería cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new ProjectGallery('.projects-container');
    
    // Renderizar la galería si se carga dinámicamente
    renderProjects();
});

// Función para renderizar proyectos desde datos (simulado)
function renderProjects() {
    const container = document.querySelector('.projects-container');
    if (!container) return;
    
    // Ejemplo: cargar proyectos desde un array de datos
    // En un caso real, estos datos podrían venir de una API o un JSON
    const projects = [
        {
            id: 1,
            title: 'E-commerce Dashboard',
            image: 'assets/images/projects/project1.jpg',
            description: 'Panel de administración para tienda en línea con análisis de ventas y gestión de inventario.',
            technologies: 'React, Node.js, MongoDB, Chart.js',
            demo: 'https://example.com/demo1',
            repo: 'https://github.com/bertaquinto/ecommerce-dashboard'
        },
        {
            id: 2,
            title: 'App de Fitness',
            image: 'assets/images/projects/project2.jpg',
            description: 'Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición.',
            technologies: 'React Native, Firebase, Redux',
            demo: 'https://example.com/demo2',
            repo: 'https://github.com/bertaquinto/fitness-app'
        }
        // Más proyectos...
    ];
    
    // Si queremos cargar proyectos dinámicamente, podríamos usar este código:
    /*
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-description', project.description);
        projectCard.setAttribute('data-technologies', project.technologies);
        projectCard.setAttribute('data-demo', project.demo);
        projectCard.setAttribute('data-repo', project.repo);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="overlay-content">
                        <h3>${project.title}</h3>
                        <p>Click para más detalles</p>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
    
    // Reinicializar la galería después de cargar proyectos
    const gallery = new ProjectGallery('.projects-container');
    */
}
