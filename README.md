<div align="center">
  <img src="public/favicon.svg" alt="Logo" width="80" height="80">
  <h3 align="center">Diego Romero | Portfolio Profesional</h3>
  <p align="center">
    Desarrollador Full-Stack (DAW) especializado en Backend, Microservicios y React Native.
    <br />
    <a href="https://github.com/SrRomer0/portfolio-cv"><strong>Explorar el código »</strong></a>
    <br />
    <br />
    <a href="#">Ver Demo en vivo</a>
    ·
    <a href="https://github.com/SrRomer0/portfolio-cv/issues">Reportar un Bug</a>
  </p>
</div>

<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el Proyecto</a></li>
    <li><a href="#stack-tecnológico">Stack Tecnológico</a></li>
    <li><a href="#características-destacadas">Características Destacadas</a></li>
    <li><a href="#instalación-y-uso">Instalación y Uso</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Sobre el Proyecto

Este repositorio contiene el código fuente de mi portfolio profesional y currículum interactivo. Ha sido diseñado desde cero no solo como un escaparate visual para mis proyectos, sino como una **demostración técnica en sí misma** de mis habilidades en desarrollo frontend y arquitectura de software.

El diseño se basa en un enfoque *Glassmorphism* oscuro, altamente dinámico y centrado en la experiencia del usuario (UX).

## Stack Tecnológico

El proyecto está construido utilizando las últimas herramientas del ecosistema frontend para garantizar un rendimiento óptimo y una experiencia de desarrollo fluida:

*   ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) - Librería principal para la interfaz de usuario.
*   ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) - Entorno de desarrollo ultrarrápido y empaquetador.
*   ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - Framework de CSS utilitario para estilado ágil.
*   ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue) - Librería para animaciones complejas y transiciones fluidas.

## Características Destacadas (Tech Lead Review)

Más allá de lo visual, el código base ha sido auditado y optimizado siguiendo estándares de la industria:

*   **Clean Architecture (SOLID):** Refactorización orientada a componentes. El componente principal (`App.jsx`) actúa únicamente como orquestador, delegando la lógica de UI a componentes de sección aislados (`AboutSection`, `SkillsSection`, etc.), respetando el Principio de Responsabilidad Única.
*   **Performance & Optimización Avanzada:**
    *   **Lazy Loading & State Colocation:** Implementación de `React.lazy()` y `Suspense` para diferir la carga asíncrona de modales pesados. Eliminación de re-renderizados innecesarios del Virtual DOM moviendo el estado global hacia los componentes locales.
    *   **Cache-Busting:** Integración de imágenes a través del empaquetador Vite (`import`) para generar hashes dinámicos, garantizando políticas de caché eficientes en producción.
    *   **PWA (Progressive Web App):** Aplicación instalable con soporte para modo **Offline** mediante la generación automática de Service Workers y `manifest.webmanifest`.
*   **Fiabilidad (Reliability) y Testing:**
    *   **Unit Testing:** Entorno de pruebas configurado con **Vitest** y React Testing Library. Cobertura en renderizado y eventos de usuario simulados.
    *   **Error Boundaries:** Prevención de "pantallas blancas" mediante un componente global de captura de errores, garantizando resiliencia frente a fallos asíncronos o cortes de red.
*   **Ecosistema CI/CD y DevOps:**
    *   **GitHub Actions:** Pipeline automatizado (`ci.yml`) configurado para ejecutar el linter y la suite de tests en máquinas virtuales Ubuntu ante cada *Push* o *Pull Request*.
    *   **Git Hooks (Husky):** Configuración de `lint-staged` y ganchos de *pre-commit* para bloquear código con errores antes de que llegue al repositorio.
*   **Accesibilidad (A11y) y SEO Técnico:**
    *   Navegación 100% funcional mediante teclado (`Tab`, `Enter`) con estados `focus-visible`.
    *   Soporte para lectores de pantalla mediante roles semánticos y etiquetas ARIA (`aria-label`).
    *   Inyección de metadatos **Open Graph**, **Twitter Cards** y datos estructurados **JSON-LD** (Schema.org) para optimización en motores de búsqueda y previsualizaciones enriquecidas en redes sociales.
*   **Tipado Robusto:** Uso de JSDoc (`@typedef`) para tipado estático de *props* en componentes, proveyendo un IntelliSense impecable sin necesidad de compilar TypeScript.

## Instalación y Uso

Para ejecutar este proyecto localmente en tu máquina:

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/SrRomer0/portfolio-cv.git
   ```
2. **Navega al directorio del proyecto:**
   ```sh
   cd portfolio-cv
   ```
3. **Instala las dependencias:**
   ```sh
   npm install
   ```
4. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```
5. **Abre el navegador:**
   Visita `http://localhost:5173` para ver el portfolio en acción.

## Contacto

**Diego Romero** - Desarrollador Full-Stack

*   **LinkedIn:** [https://www.linkedin.com/in/diego-r-4959ba2b9/](https://www.linkedin.com/in/diego-r-4959ba2b9/)
*   **GitHub:** [@SrRomer0](https://github.com/SrRomer0)
*   **Email:** [diego.romero.vera.11@gmail.com](mailto:diego.romero.vera.11@gmail.com)

---
<div align="center">
  <i>Construido con pasión y mucho código limpio.</i>
</div>
