// Adoptify Images
import imgAdoptifyMain from '../assets/images/Captura de pantalla 2026-06-16 151603.webp';
import imgAdoptify1 from '../assets/images/Captura de pantalla 2026-06-03 220216.webp';
import imgAdoptify2 from '../assets/images/Captura de pantalla 2026-06-16 145428.webp';
import imgAdoptify3 from '../assets/images/Captura de pantalla 2026-06-16 145558.webp';
import imgAdoptify4 from '../assets/images/Captura de pantalla 2026-06-16 145708.webp';
import imgAdoptify5 from '../assets/images/Captura de pantalla 2026-06-16 145801.webp';
import imgAdoptify6 from '../assets/images/Captura de pantalla 2026-06-16 145845.webp';

// musApp Images
import imgMusappMain from '../assets/images/WhatsApp Image 2026-06-16 at 15.00.43.webp';
import imgMusapp1 from '../assets/images/WhatsApp Image 2026-06-16 at 15.00.16.webp';
import imgMusapp2 from '../assets/images/WhatsApp Image 2026-06-16 at 15.02.02.webp';

// API Images
import imgApiMain from '../assets/images/API_RESTful_FASTAPI.webp';


export const personalInfo = {
  name: "Diego Romero",
  role: "Full-Stack Developer",
  tagline: "Técnico Superior en DAW especializado en el desarrollo de arquitecturas escalables e interfaces modernas.",
  github: "https://github.com/SrRomer0",
  linkedin: "https://www.linkedin.com/in/diego-r-4959ba2b9",
  email: "diego.romero.vera.11@gmail.com",
  pdfCvPath: "/Diego_Romero_CV.pdf"
};

export const skills = [
  { name: "Backend", items: ["Java 17", "Spring Boot 3", "Spring Cloud", "Spring Security", "Python", "FastAPI"] },
  { name: "Arquitectura", items: ["Microservicios", "Clean Architecture", "Hexagonal", "DDD", "Domain Events"] },
  { name: "Frontend & Web", items: ["Thymeleaf", "HTMX", "HTML/CSS", "JavaScript", "TypeScript"] },
  { name: "Conocimientos Mobile", items: ["React Native", "Expo", "NativeWind"] },
  { name: "Database & ORM", items: ["MySQL", "PostgreSQL", "JPA/Hibernate", "SQLAlchemy", "Liquibase"] },
  { name: "DevOps & Tools", items: ["Docker", "Docker Compose", "Git", "GitHub", "Maven"] }
];

export const experience = [
  {
    id: 2,
    role: "Desarrollador Full-Stack (TFG)",
    company: "Refugio de Animales: Gestión Integral 4.0",
    period: "Mar - Jun 2026",
    description: "Proyecto de Fin de Grado (TFG) para DAW. Plataforma integral basada en arquitectura de microservicios con Spring Cloud, diseñada para escalar y desacoplar lógica de negocio de centros de acogida.",
    achievements: [
      "Arquitectura Hexagonal (Clean Architecture) con Vertical Slicing y principios DDD en los microservicios de negocio.",
      "Implementación de Spring Cloud (Eureka + API Gateway + OpenFeign), patrón Database-per-Service y seguridad Stateless con JWT en cookies HttpOnly.",
      "Frontend dinámico con Thymeleaf + HTMX (experiencia SPA sin JavaScript pesado), RBAC por roles y sistema de notificaciones por polling.",
      "Lógica de negocio avanzada: ciclo de vida de adopciones con Schedulers automáticos, Domain Events asíncronos para gamificación, y motor de exportación dual PDF/Excel genérico.",
      "Migraciones con Liquibase, librería compartida (refugio-common) con MapStruct y DTOs genéricos, y despliegue Cloud-Native orquestado con Docker Compose."
    ]
  },
  {
    id: 1,
    role: "Desarrollador Backend - Móvil",
    company: "Prácticas de Empresa (FCT)",
    period: "Mar - Jun 2026",
    description: "Periodo de FCT (Formación en Centros de Trabajo) del grado. Desarrollo de una API RESTful robusta (back) y de una aplicación móvil (app-amarraco) en el ecosistema musApp.",
    achievements: [
      "Diseño y construcción de APIs RESTful asíncronas de alto rendimiento con FastAPI y SQLAlchemy.",
      "Desarrollo de aplicación móvil cross-platform con React Native y Expo Router, consumiendo APIs de referencia.",
      "Implementación de seguridad avanzada en backend (JWT, 2FA/MFA, Rate Limiting con SlowAPI)."
    ]
  }
];

export const projects = [
  {
    id: "adoptify",
    title: "Refugio de Animales (Adoptify)",
    type: "Full-Stack / Microservicios",
    shortDescription: "Sistema distribuido Cloud-Native con Clean Architecture, Spring Cloud y Java 17.",
    fullDescription: "Plataforma integral de gestión para refugios de animales construida sobre una arquitectura de Microservicios con Java 17 y Spring Boot 3.\n\n▸ Arquitectura (El Porqué): Elegí una Arquitectura Hexagonal y Vertical Slicing para aislar la lógica de dominio. Esto garantiza que si mañana el refugio necesita migrar de framework o de base de datos, el core del negocio permanezca intacto. La separación en Microservicios evita cuellos de botella en la escalabilidad.\n\n▸ Infraestructura Cloud: Para asegurar alta disponibilidad, implementé Spring Cloud con Eureka (Service Discovery) y API Gateway. El patrón Database-per-Service aísla los datos, evitando bloqueos en base de datos al realizar consultas masivas.\n\n▸ Seguridad: Al manejar datos confidenciales de adoptantes, descarté el almacenamiento local de tokens. Centralicé la seguridad Stateless inyectando JWT exclusivamente en cookies HttpOnly, mitigando de raíz los ataques XSS.\n\n▸ Lógica de Negocio: Automaticé los procesos manuales del refugio usando Schedulers (@Scheduled) para los seguimientos de adaptación. Implementé Domain Events asíncronos para desacoplar el envío de notificaciones y mejorar los tiempos de respuesta del API.\n\n▸ Frontend (Rendimiento): Para evitar la sobrecarga y el coste de mantenimiento de frameworks SPA como React en un entorno de gestión interna, implementé Thymeleaf + HTMX. Logré cargas casi instantáneas y la misma interactividad fluida, reduciendo drásticamente el peso del bundle JavaScript.",
    image: imgAdoptifyMain,
    gallery: [
      imgAdoptify1,
      imgAdoptify2,
      imgAdoptify3,
      imgAdoptify4,
      imgAdoptify5,
      imgAdoptify6
    ],
    tech: [
      { name: "Spring Cloud", icon: "Server" },
      { name: "Clean Arch.", icon: "Box" },
      { name: "OAuth2 + JWT", icon: "ShieldCheck" },
      { name: "Docker", icon: "Box" },
      { name: "Liquibase", icon: "Database" },
      { name: "Java 17", icon: "Code" }
    ],
    githubUrl: "https://github.com/Elibo93/RefugioAnimales"
  },
  {
    id: "musapp",
    title: "musApp Mobile (Amarraco)",
    type: "Mobile-App",
    shortDescription: "Aplicación móvil desarrollada en React Native y Expo.",
    fullDescription: "Desarrollo de la aplicación móvil nativa (app-amarraco) para el ecosistema musApp. El reto principal fue construir una experiencia fluida consumiendo una API preexistente con latencia variable.\n\n▸ Gestión de Estado: Para solucionar los problemas de desincronización y cargas lentas al recuperar datos del servidor, implementé TanStack Query. Esto me permitió cachear las peticiones, realizar 'optimistic updates' y reducir el número de llamadas de red innecesarias en un 60%.\n\n▸ UI/UX y Animaciones: Utilicé React Native y NativeWind (Tailwind) para garantizar un diseño consistente en iOS y Android con una base de código única. Para evitar interrupciones bruscas en la navegación, integré animaciones interactivas con Framer Motion, mejorando significativamente la percepción de velocidad del usuario.\n\n▸ Arquitectura de Navegación: Reestructuré el enrutamiento clásico implementando Expo Router (file-based routing), lo que permitió una gestión de enlaces profundos (deep linking) mucho más limpia y un mantenimiento escalable del proyecto.",
    image: imgMusappMain,
    gallery: [
      imgMusapp1,
      imgMusappMain,
      imgMusapp2
    ],
    tech: [
      { name: "React Native", icon: "Smartphone" },
      { name: "Expo Router", icon: "Globe" },
      { name: "NativeWind", icon: "Layout" },
      { name: "TanStack", icon: "Database" }
    ],
    githubUrl: "https://github.com/SrRomer0/App-Amarraco"
  },
  {
    id: "backapi",
    title: "API RESTful Avanzada (Python)",
    type: "Backend / API RESTful",
    shortDescription: "API RESTful asíncrona avanzada con JWT, 2FA y WebSockets.",
    fullDescription: "Una API RESTful asíncrona extremadamente robusta desarrollada en Python 3.11 con FastAPI. Implementa SQLAlchemy 2.0 y Alembic para la gestión de base de datos PostgreSQL con migraciones. Destaca en ciberseguridad por implementar JWT, hashing con bcrypt, Autenticación de Dos Factores (2FA/MFA) mediante pyotp y qrcode, criptografía y control de tráfico (Rate Limiting) mediante slowapi.",
    image: imgApiMain,
    gallery: [],
    tech: [
      { name: "Python", icon: "Code" },
      { name: "FastAPI", icon: "Server" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Security", icon: "ShieldCheck" }
    ],
    githubUrl: "https://github.com/SrRomer0/API-RESTFul-Multinivel"
  }
];

export const education = [
  {
    id: 1,
    title: "C.F.G.S. Desarrollo de Aplicaciones Web (DAW)",
    institution: "IES Enrique Tierno Galván",
    period: "2024 - 2026"
  }
];
