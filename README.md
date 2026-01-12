# CodeBase Frontend - Plataforma White Label

Este es el frontend de la plataforma White Label, construido con tecnologias modernas para asegurar rendimiento y mantenibilidad.

##  Tecnologias

- **React 18**
- **TypeScript**: Tipado estetico para mayor seguridad y escalabilidad.
- **Vite**: Entorno de desarrollo y build tool ultrarrapido.
- **ESLint**: Linter para mantener la calidad del codigo.

##  Estructura del Proyecto

El proyecto ha sido inicializado limpiamente, eliminando el boilerplate innecesario de Vite.

- `src/App.tsx`: Componente raiz limpio.
- `src/main.tsx`: Punto de entrada de React.

##  Configuracion y Ejecucion

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicacion estar, disponible tipicamente en `http://localhost:5173`.

3.  **Construir para produccion**:
    ```bash
    npm run build
    ```

##  Integracion

Este frontend esta diseñado para consumir la API REST del backend (`CodeBase-Back`). Asegurate de tener el backend corriendo para la integracion completa.
