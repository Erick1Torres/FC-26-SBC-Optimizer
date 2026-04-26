## Gestión del proyecto
Tablero de Trello: [https://trello.com/b/2qy6wflS/sbc-optimizer]
App en vercel: [https://fc-26-sbc-optimizer-amru.vercel.app/]

# FC 26 SBC Solver - Arquitectura Fullstack Profesional

## Descripción del Proyecto
**FC 26 SBC Solver** es una plataforma integral diseñada para optimizar la resolución de desafíos de creación de plantillas en EA Sports FC. A diferencia de soluciones estáticas, este proyecto implementa una arquitectura **Cliente-Servidor** real, permitiendo una gestión dinámica de los datos y una interfaz de usuario reactiva y moderna.

Este proyecto ha sido desarrollado como una demostración de capacidades Fullstack, cubriendo desde la lógica de negocio en el Backend hasta la experiencia de usuario (UX) en el Frontend.

-----

## Stack Tecnológico Utilizado

### Frontend (El Cliente)
- **React 19 & TypeScript:** Uso de tipado estricto para evitar errores en tiempo de ejecución.
- **Tailwind CSS:** Diseño UI personalizado con un enfoque "Mobile First".
- **React Router v6:** Gestión de navegación SPA y manejo de rutas inexistentes (404).
- **Context API:** Estado global para la gestión de medias y persistencia de datos.

### Backend (El Servidor)
- **Node.js & Express:** Servidor robusto siguiendo el patrón MVC.
- **Arquitectura por Capas:** Separación total de responsabilidades (Routes, Controllers, Services).
- **CORS & Middleware:** Configuración de seguridad y procesamiento de datos JSON.

-----

## Arquitectura del Sistema (El "Corazón" Técnico)

He decidido no seguir un enfoque monolítico simple. En su lugar, el proyecto está dividido en capas claras para asegurar que sea mantenible:

### 1. Backend: Patrón MVC Profesional
El servidor no es un solo archivo; está organizado como se hace en la industria:
- **Routes:** Define los puntos de entrada de la API (`/api/v1/recipes`).
- **Controllers:** Contiene la lógica que recibe las peticiones, extrae los parámetros y decide qué responder.
- **Services:** Aquí reside la lógica de negocio y el acceso a los datos. Es la única capa que "conoce" las recetas de las medias.
- **Config:** Centraliza variables de entorno y constantes del sistema.

### 2. Frontend: Flujo de Datos y Hooks
En el cliente, he implementado una arquitectura basada en **Hooks Personalizados**:
- **`useSBC`:** Un hook que actúa como puente entre los componentes y el contexto global.
- **Capa de Red (`api/cliente.ts`):** Centraliza todas las llamadas `fetch`, abstrayendo la complejidad de las peticiones HTTP de los componentes visuales.

---

## Fases de Desarrollo y Desafíos Superados

### Fase 1-5: Estructura y Tipado Estricto
Configuré el entorno con **Vite** y **TypeScript**. Definir interfaces claras para las `Recipe` y los `Players` fue fundamental para que, al escalar el proyecto, no tuviéramos errores de datos nulos.

### Fase 6-8: El Reto del Estado Global
El mayor desafío fue coordinar que al pulsar un botón de media en un componente, se actualizaran las cartas en otro componente totalmente distinto. Lo solucioné implementando **Context API**, evitando el *prop drilling* y haciendo que la aplicación sea mucho más eficiente.

### Fase 10: Formularios y Validación
Desarrollé un formulario controlado que valida en tiempo real. No solo acepta texto; verifica que las medias introducidas tengan sentido dentro del ecosistema del FC 26, proporcionando feedback visual inmediato al usuario.

### Fase 11-12: El Despliegue Fullstack (Vercel)
Desplegar una API de Node y un Front de React juntos en Vercel fue el reto técnico más complejo. Tuve que configurar un archivo `vercel.json` con `rewrites` avanzados para que Vercel supiera distinguir entre las rutas de la interfaz y las rutas de la API, logrando una integración perfecta en la nube.

---

## Estructura del Proyecto

```text
FC-26-SBC-OPTIMIZER/
├── docs/                # Documentación detallada por fases
├── server/              # Backend (Node.js/Express)
│   ├── src/
│   │   ├── config/      # Configuraciones de servidor
│   │   ├── controllers/ # Lógica de control
│   │   ├── routes/      # Endpoints de la API
│   │   ├── services/    # Lógica de negocio y datos
│   │   └── index.js     # Punto de entrada de la API
├── src/                 # Frontend (React/TS)
│   ├── api/             # Cliente de red
│   ├── components/      # Componentes reutilizables (Atómicos)
│   ├── context/         # Estado global de la App
│   ├── hooks/           # Lógica extraída (Custom Hooks)
│   ├── pages/           # Vistas principales
│   └── App.tsx          # Router y Provider
├── vercel.json          # Configuración de despliegue Fullstack
└── README.md            # El documento que estás leyendo

----


