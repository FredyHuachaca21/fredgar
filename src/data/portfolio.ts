export const personal = {
  name: "Edgar Fredy Huachaca Pezúa",
  displayName: "Fredgar",
  title: "Backend Developer",
  subtitle: "Java · Spring Boot · Quarkus · Cloud & Microservicios",
  summary:
    "Backend Developer con más de 5 años de experiencia en desarrollo de microservicios y soluciones en la nube. Especializado en Java (8-21), Spring Boot, Quarkus y arquitecturas orientadas a eventos con Apache Kafka. Experiencia liderando proyectos de migración de datos a gran escala y pipelines ETL con Azure Data Factory. Amplio conocimiento en pruebas unitarias y BDD, aplicando principios SOLID y prácticas de Clean Code. Experiencia en programación funcional y reactiva con RxJava y Spring WebFlux.",
  location: "Lima, Perú",
  domain: "fredgar.com",
  linkedin: "https://www.linkedin.com/in/fredy-huachaca",
  github: "https://github.com/FredyHuachaca21",
  email: "fredy.huachaca21@gmail.com",
  phone: "+51 933 790 502",
};

export const skills = [
  {
    category: "Lenguajes",
    icon: "Code2",
    items: ["Java (8–21)", "Python", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    category: "Frameworks",
    icon: "Layers",
    items: ["Spring Boot", "Spring WebFlux", "Quarkus", "RxJava", "Express.js", "FastAPI"],
  },
  {
    category: "Arquitectura",
    icon: "Network",
    items: ["Microservicios", "REST / RESTful APIs", "Event-Driven (Kafka)", "Programación Reactiva", "Clean Architecture"],
  },
  {
    category: "Calidad",
    icon: "ShieldCheck",
    items: ["JUnit", "Mockito", "Cucumber", "TDD", "BDD", "SonarQube", "Code Review"],
  },
  {
    category: "Bases de Datos",
    icon: "Database",
    items: ["Azure SQL", "SQL Server", "CosmosDB", "MongoDB", "R2DBC", "JDBC / JPA"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: ["Azure AKS", "Azure Functions", "Azure APIM", "Data Factory", "Blob Storage", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  },
  {
    category: "Integración",
    icon: "Zap",
    items: ["Apache Kafka", "Azure Data Factory", "Webhooks (Teams)", "Redis Cache", "Key Vault"],
  },
  {
    category: "Herramientas",
    icon: "Wrench",
    items: ["Maven", "MapStruct", "Lombok", "SwaggerHub", "OpenAPI", "Git", "Bitbucket"],
  },
  {
    category: "Monitoreo / Seg.",
    icon: "Activity",
    items: ["Kibana", "Dynatrace", "OWASP", "Desarrollo Seguro"],
  },
];

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services (TCS)",
    role: "IT Analyst",
    client: "BCP",
    period: "05/2025 – 12/2025",
    location: "Lima, Perú",
    current: true,
    bullets: [
      "Migración de Datos de Consentimiento: Lideré la transición de marcas de consentimiento de más de 30 millones de clientes en producción desde Azure SQL hacia el equipo Master Repository, diseñando pipelines ETL en Azure Data Factory con reglas de sanitización y extracción automatizada a archivos TXT.",
      "Automatización de Extracciones: Implementé triggers diarios para extracción incremental (D-1) y flujo bajo demanda para data histórica, garantizando consistencia y trazabilidad en cada proceso.",
      "Logs de Auditoría y Observabilidad: Diseñé e integré un sistema de logs de auditoría en base de datos para todos los procesos de extracción, asegurando cumplimiento de requisitos regulatorios del sector financiero peruano.",
      "Notificaciones a Stakeholders: Integré notificaciones automáticas a Microsoft Teams vía Webhooks, con tarjetas informativas del estado de cada ejecución (éxito/error).",
      "Microservicio Asíncrono: Desarrollé un microservicio con Quarkus y Apache Kafka para sincronización asíncrona de marcas de consentimiento entre el sistema legacy y el nuevo Master Repository, eliminando duplicidad de datos.",
    ],
    tags: ["Quarkus", "Kafka", "Azure Data Factory", "Webhooks", "Azure SQL", "ETL"],
  },
  {
    id: 2,
    company: "Tata Consultancy Services (TCS)",
    role: "IT Analyst",
    client: "Interbank",
    period: "2023 – 04/2025",
    location: "Lima, Perú",
    current: false,
    bullets: [
      "Liderazgo en Migración Cloud: Diseño e implementación de microservicios para migrar la gestión documental a Azure Blob Storage.",
      "Optimización de Rendimiento: Integración de Redis Cache, logrando una reducción de tiempos de respuesta de 1500ms a 600ms (mejora del 60%).",
      "Automatización de Auditorías: Implementación de procesos con Azure Data Factory, reduciendo la generación de reportes de 2 horas a solo 5 minutos.",
      "Modernización Tecnológica: Liderazgo en la actualización a Java 17 y Spring Boot 3 e introducción de Terraform, aumentando la productividad en un 20%.",
      "Integración Reactiva: Uso de R2DBC con Spring WebFlux para mejorar la concurrencia y eficiencia en el acceso a datos.",
    ],
    tags: ["Java 17", "Spring WebFlux", "Azure", "Redis", "R2DBC", "Terraform"],
  },
  {
    id: 3,
    company: "NTT DATA",
    role: "Backend Developer",
    client: "BCP",
    period: "2020 – 2023",
    location: "Lima, Perú",
    current: false,
    bullets: [
      "Migración a Azure: Lideró la migración de +20 microservicios, optimizando la escalabilidad y reduciendo costos operativos en un 25%.",
      "Event-Driven Architecture: Implementación de APIs integradas con Apache Kafka para el procesamiento de datos en tiempo real.",
      "Seguridad: Aplicación de estándares OWASP y autenticación con tokens CAS, disminuyendo vulnerabilidades en un 40%.",
      "Calidad: Implementación de prácticas TDD/BDD, logrando una reducción de defectos en producción del 35%.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Azure", "OWASP", "TDD"],
  },
];

export const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    period: "2024 – Actualidad",
    icon: "GraduationCap",
  },
  {
    degree: "Desarrollo de Sistemas de Información",
    institution: "Instituto Superior Tecnológico (IDAT)",
    period: "2017 – 2020",
    icon: "BookOpen",
  },
];

export const certifications = [
  { name: "Spring AI", institution: "Mito Code", date: "Sep 2024" },
  { name: "Java 8 a 21", institution: "Mito Code", date: "Jul 2024" },
  { name: "Programación Reactiva (RxJava)", institution: "New Horizons", date: "Jul 2023" },
  { name: "Java Full Stack Developer", institution: "Mito Code", date: "2023" },
  { name: "Java Spring WebFlux", institution: "Mito Code", date: "2023" },
  { name: "Microservicios con Spring Cloud", institution: "Mito Code", date: "2023" },
];
