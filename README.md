# ⚽ Fútbol Manager 5 - Frontend

Frontend moderno y reactivo para la plataforma de gestión de canchas. Construido con **React**, **TypeScript** y componentizado con **Shadcn/ui**.

## 🎨 Características

*   **White Label**: Sistema de temas configurable desde `src/config/theme.ts`.
*   **UI Components**: Utiliza [shadcn/ui](https://ui.shadcn.com/) sobre **Tailwind CSS**.
*   **Gestión de Estados**: React Hooks (`useState`, `useEffect`).
*   **Responsive**: Diseño adaptativo para escritorio y móvil.

## 🛠️ Tecnologías

*   **React 18**
*   **Vite**: Build tool rápido.
*   **TypeScript**: Tipado estático.
*   **Tailwind CSS (v3.4)**: Estilos utilitarios.
*   **Lucide React**: Iconografía.

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/          # Componentes genéricos (Botones, Cards, Badges) - Shadcn
│   └── business/    # Componentes de negocio (FieldList, BookingForm)
├── config/
│   └── theme.ts     # Configuración de colores y marca (White Label)
├── lib/
│   └── utils.ts     # Utilidades de clases (cn)
└── App.tsx          # Layout principal
```

## 🚀 Instalación y Ejecución

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 🔄 Integración

La aplicación espera que el Backend esté corriendo en el puerto `8080`.
La configuración de conexión se realiza directamente mediante `fetch` a `http://localhost:8080/api/v1/...`.

> **Nota sobre Tailwind**: Se utiliza la versión 3.x para compatibilidad total con Shadcn/ui.
