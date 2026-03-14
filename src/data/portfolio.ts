export const personal = {
  name: "Edgar Fredy Huachaca Pezúa",
  displayName: "FREDGAR",
  title: "Backend Developer",
  subtitle: "Java · Spring Boot · Quarkus · Cloud & Microservicios",
  summary:
    "Backend Developer con más de 5 años de experiencia en el sector financiero, desarrollando microservicios y soluciones en la nube para instituciones bancarias líderes en Perú (BCP, Interbank). Especializado en Java (8-21), Spring Boot, Quarkus y arquitecturas orientadas a eventos con Apache Kafka. Experiencia liderando proyectos de migración de datos a gran escala (+30M registros) y pipelines ETL con Azure Data Factory, asegurando cumplimiento regulatorio. Amplio conocimiento en pruebas unitarias y BDD, aplicando principios SOLID y prácticas de Clean Code. Experiencia en programación funcional y reactiva con RxJava y Spring WebFlux.",
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
    current: false,
    bullets: [
      "Migración de Datos de Consentimiento: Lideré la transición de marcas de consentimiento de +30 millones de registros desde Azure SQL hacia el equipo de Master Repository, diseñando pipelines ETL en Azure Data Factory con reglas de sanitización específicas y extracción automatizada a archivos TXT.",
      "Optimización de Queries: Diseñé consultas SQL optimizadas para el procesamiento eficiente de la data histórica de +30M registros, garantizando la integridad referencial y minimizando el impacto en la base de datos productiva.",
      "Automatización de Extracciones: Implementé triggers diarios para la extracción incremental de marcas de consentimiento (D-1) y un flujo de ejecución bajo demanda para la data histórica, garantizando consistencia y trazabilidad.",
      "Observabilidad y Auditoría: Diseñé un sistema de logs de auditoría en BD con métricas detalladas: hora de inicio/fin, tipo de ejecución (diario/histórico), tiempo de proceso, registros totales, duplicados, únicos y ruta destino; asegurando cumplimiento regulatorio del sector financiero peruano.",
      "Notificaciones a Stakeholders: Integré notificaciones automáticas a Microsoft Teams vía Webhooks con tarjetas informativas del estado de cada ejecución (éxito/error), facilitando el seguimiento a líderes no técnicos del proyecto.",
      "Microservicio Asíncrono de Sincronización: Desarrollé un microservicio con Quarkus y Apache Kafka para la sincronización asíncrona de marcas de consentimiento entre el sistema legacy y el nuevo servicio de Master Repository, eliminando duplicidad de datos y asegurando integridad para auditorías de entidades reguladoras.",
      "Desarrollo de Microservicios de Negocio: Participé en el mantenimiento, corrección de bugs y migración de frameworks de microservicios existentes, y desarrollé un microservicio de negocio end-to-end hasta su pase a producción.",
    ],
    tags: ["Quarkus", "Kafka", "Azure Data Factory", "SQL", "Webhooks", "Azure SQL", "ETL"],
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
