<h1>Base de Datos de Libros</h1> 
Una base de datos relacional para gestionar información de libros (título, autor, género, etc.). 
<strong>Funcionalidades:</strong> 
<ul> 
<li>Crear tablas.</li> 
<li>Insertar, actualizar y eliminar datos.</li> 
<li>Consultas SQL para obtener información.</li> 
</ul> 
<strong>Tecnologías:</strong> 
<ul> 
<li>SQL</li> 
<li>: MySQL, PostgreSQL</li> 
</ul> 
<strong>Esquema de la base de datos:</strong> 

### 🗃️ Esquema de Base de Datos – Proyecto: Gestión de Portafolio

#### Entidades Principales:

1. **Usuarios**
   - `id` (PK)
   - `nombre`
   - `email`
   - `rol`
   - `fecha_creacion`

2. **Proyectos**
   - `id` (PK)
   - `usuario_id` (FK)
   - `titulo`
   - `descripcion`
   - `url_github`
   - `url_demo`
   - `fecha_publicacion`

3. **Tecnologias**
   - `id` (PK)
   - `nombre`
   - `categoria` (frontend, backend, devops, etc.)

4. **Proyecto_Tecnologia**
   - `proyecto_id` (FK)
   - `tecnologia_id` (FK)
