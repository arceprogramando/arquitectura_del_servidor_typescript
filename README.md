# Arquitectura del Servidor Typescript

[![Arquitectura del Servidor](https://github.com/arceprogramando/arquitectura_del_servidor_typescript/blob/main/src/public/upload/portada.png)](https://github.com/arceprogramando)

## Este es una aplicacion de practica de typescript usando un proyecto mio de [Javascript]

### Como seguir estructura de commits a futuro

- 🌈 Change Styles: Úsarlo para commits que afecten principalmente la apariencia o el diseño de la aplicación.
- ✨ New Features: Usarlo cuando agregue una nueva característica o funcionalidad a la aplicación.
- ⛔ Critical Changes: usarlo cuando se  que contengan cambios críticos que puedan afectar gravemente el funcionamiento de la aplicación.
- 🐛 Error Fix: Para commits que solucionen problemas o errores en el código existente.
- 🧼 Cleanup: Utiliza este emoji cuando realices tareas de limpieza de código, sin cambios funcionales.
- 🚀 Refactor: Marca commits que mejoren el rendimiento de la aplicación o cambios funcionales.
- 🚧 Work in Progress: Usarlo para indicar que el commit contiene trabajo en progreso que no está listo para ser implementado.

### Directory Layout

    .
    ├── build                   # Output directory with transpiled JavaScript files
    ├── src                     # Source files (app.ts)
        ├── config              # Config files 
        ├── controllers         # Application controllers handling HTTP requests(Request ,Response)
        ├── dao                 # Abstraction that isolates the database logic
        ├── databases           # Database configuration and connections
        ├── dto                 # Data Transfer Objects for structuring data(CLEAN REQUEST)
        ├── middleware          # Intermediaries that ensure HTTP requests before processing.
        ├── model               # Data model definitions
        ├── public              # Static Recourse
        ├── repository          # Space to work with different Databases
        ├── router              # Application routes and middleware usage
        └── services            # Application services containing business logic
    └── README.md               # Project documentation (this file)

[Arquitectura del Servidor]: <https://github.com/arceprogramando/arquitectura-del-servidor>

[Javascript]:<https://github.com/arceprogramando/arquitectura-del-servidor>
