## Agencia de Viajes

Este proyecto es una página web de una agencia de viajes desarrollada con Node.js y Express, siguiendo el patrón de diseño MVC. 
Permite a los usuarios explorar los viajes, conocer testimonios de clientes y agregar nuevos comentarios mediante un formulario validado.

# Características
La pagina principal muestra información sobre la agencia, tres viajes destacados, descuentos y 3 testimonios de clientes.

- Secciones principales
  - Nosotros: Descripción detallada de la agencia.
  - Viajes: Lista completa de los viajes disponibles obtenidos desde la base de datos.
  - Testimoniales: Testimonios de clientes almacenados en la base de datos y un formulario para agregar nuevos.

- Formulario de testimoniales
  - Permite a los usuarios enviar comentarios con validación de nombre, correo y mensaje. Al enviarlo, se guarda en la base de datos y se muestra en la página.

- Uso de imágenes e iconos para mejorar la experiencia del usuario.

# Tecnologías utilizadas

- Backend: Node.js, Express.js

- Frontend: Pug (motor de plantillas), Bootstrap, CSS personalizado

- Base de datos: MySQL (administrado con TablePlus)

# Dependencias
- Middleware
  Funciones para gestionar solicitudes y respuestas
  
- dotenv
  Manejo de variables de entorno
  
- nodemon
  Recarga automatica del servicor en desarrollo

# Estructura del proyecto

- /agencia-viajes/
  - config/        # Configuración de la base de datos
  - controllers/   # Lógica de negocio y conexión entre modelos y vistas
  - models/        # Modelos que interactúan con la base de datos
  - views/         # Plantillas Pug para el frontend
  - public/        # Archivos estáticos como imágenes y CSS
  - routes/        # Definición de rutas para las distintas secciones
  - package.json   # Dependencias y configuración del proyecto

# Instalación

- Clonar el repositorio:

git clone https://github.com/Hugo9591/agenciaViajes.git
cd agencia-viajes

- Instalar dependencias:
npm install

- Configurar variables de entorno:
Crear un archivo .env en la raíz con los siguientes datos:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=agencia_viajes

- Importar la base de datos:
Dentro de MySQL (usando TablePlus u otro cliente), importar los archivos SQL de las tablas viajes y testimoniales.

- Ejecutar el servidor:
npm run dev

El proyecto estará disponible en http://localhost:4000.

- Notas adicionales
Se usa el patrón MVC para una mejor organización del código.
La conexión a la base de datos se configura en config/db.js.
Los archivos de modelos en models/ gestionan la interacción con la base de datos.
Las rutas están definidas en routes/ para una navegación estructurada.

