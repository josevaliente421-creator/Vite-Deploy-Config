export type FaqItem = { question: string; answer: string };

export const FAQS: Record<string, FaqItem[]> = {
  empresas: [
    {
      question: "¿Trabajan con programas preventivos para empresas?",
      answer:
        "Sí. Diseñamos programas MIP (Manejo Integrado de Plagas) con calendario de visitas, seguimiento y reportes técnicos según el rubro de su negocio.",
    },
    {
      question: "¿Entregan documentación para fiscalizaciones?",
      answer:
        "Sí. Cada tratamiento se respalda con su certificado, válido ante SEREMI, municipalidades y fiscalizaciones de la autoridad sanitaria.",
    },
    {
      question: "¿Qué rubros atienden?",
      answer:
        "Restaurantes y locales de alimentos, industrias y bodegas, oficinas, comercio y otros establecimientos de la Región Metropolitana.",
    },
    {
      question: "¿Cómo solicito una evaluación?",
      answer:
        "Complete el formulario de esta página, escríbanos por WhatsApp o llámenos. Coordinamos una visita de evaluación y le enviamos una propuesta.",
    },
  ],
  desratizacion: [
    {
      question: "¿El servicio incluye documentación?",
      answer:
        "Sí. Cada tratamiento se respalda con su certificado, necesario para fiscalizaciones de la Autoridad Sanitaria (SEREMI).",
    },
    {
      question: "¿Atienden solo empresas?",
      answer:
        "No. Atendemos empresas, locales comerciales, industrias y también hogares, con productos de bajo impacto.",
    },
    {
      question: "¿Los métodos son seguros?",
      answer:
        "Sí. Utilizamos estaciones de cebado seguras, ancladas y monitoreadas, con insumos con registro en el Instituto de Salud Pública (ISP).",
    },
    {
      question: "¿Cuál es la cobertura?",
      answer:
        "Santiago y la Región Metropolitana. Atendemos urgencias en menos de 24 horas dentro de la RM.",
    },
  ],
  desinsectacion: [
    {
      question: "¿Qué plagas tratan?",
      answer:
        "Cucarachas, chinches de cama, termitas, hormigas, moscas, mosquitos y otros insectos rastreros y voladores.",
    },
    {
      question: "¿Los productos son seguros?",
      answer:
        "Aplicamos productos de bajo impacto ambiental, con registro sanitario y aplicados por técnicos capacitados.",
    },
    {
      question: "¿Sirve para restaurantes y locales de alimentos?",
      answer:
        "Sí. Trabajamos bajo normativa SEREMI con reportes técnicos y calendarios anuales para restaurantes e industria de alimentos.",
    },
    {
      question: "¿Cuál es la cobertura?",
      answer:
        "Santiago y la Región Metropolitana. Atendemos urgencias en menos de 24 horas dentro de la RM.",
    },
  ],
  sanitizacion: [
    {
      question: "¿Qué es la sanitización profesional?",
      answer:
        "Es la desinfección de ambientes contra virus, bacterias y hongos patógenos, con productos y protocolos técnicos.",
    },
    {
      question: "¿En qué se diferencia de una limpieza común?",
      answer:
        "Utiliza desinfectantes de uso profesional con registro sanitario y protocolos de aplicación técnicos. Complementa, no reemplaza, la limpieza habitual.",
    },
    {
      question: "¿Entregan certificado del servicio?",
      answer:
        "Sí. Cada servicio se respalda con su documentación correspondiente.",
    },
    {
      question: "¿Cuál es la cobertura?",
      answer:
        "Santiago y la Región Metropolitana. Atendemos urgencias en menos de 24 horas dentro de la RM.",
    },
  ],
};

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  preloadImage?: string;
  faqKey?: string;
  serviceName?: string;
  serviceType?: string;
};

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Control de Plagas para Empresas en Santiago | Andes Plagas",
    description:
      "Empresa de control de plagas para empresas y locales comerciales en Santiago. Desratización, desinsectación y sanitización con documentación SEREMI. Solicita tu evaluación.",
    preloadImage: "/hero-bg.webp",
  },
  {
    path: "/control-de-plagas-empresas",
    title: "Control de Plagas para Empresas en Santiago | Andes Plagas",
    description:
      "Programas de control de plagas para empresas en Santiago: desratización, desinsectación y sanitización con certificados para fiscalizaciones SEREMI. Solicita tu evaluación.",
    faqKey: "empresas",
    serviceName: "Control de plagas para empresas",
    serviceType: "Control de plagas para empresas",
  },
  {
    path: "/desratizacion",
    title: "Desratización para Empresas y Locales en Santiago | Andes Plagas",
    description:
      "Servicio de desratización para empresas, locales comerciales y hogares en Santiago. Control de roedores con documentación SEREMI. Cotiza tu evaluación.",
    preloadImage: "/service-1.webp",
    faqKey: "desratizacion",
    serviceName: "Desratización",
    serviceType: "Desratización",
  },
  {
    path: "/desinsectacion",
    title: "Desinsectación para Empresas y Locales en Santiago | Andes Plagas",
    description:
      "Desinsectación profesional para empresas y locales en Santiago. Control de cucarachas, chinches, termitas y más, con documentación SEREMI. Cotiza hoy.",
    preloadImage: "/hero-desinsectacion.webp",
    faqKey: "desinsectacion",
    serviceName: "Desinsectación",
    serviceType: "Desinsectación",
  },
  {
    path: "/sanitizacion",
    title: "Sanitización para Empresas y Locales en Santiago | Andes Plagas",
    description:
      "Sanitización y desinfección profesional para empresas y hogares en Santiago. Cumple la normativa SEREMI con certificado de aplicación. Cotiza hoy.",
    faqKey: "sanitizacion",
    serviceName: "Sanitización",
    serviceType: "Sanitización",
  },
  {
    path: "/certificaciones",
    title: "Certificaciones SEREMI y Resolución Sanitaria | Andes Plagas",
    description:
      "Conoce las certificaciones de Andes Plagas: Resolución Sanitaria SEREMI, personal calificado, certificados de aplicación e insumos con registro ISP.",
  },
  {
    path: "/politica-de-privacidad",
    title: "Política de Privacidad | Andes Plagas",
    description:
      "Política de privacidad de Andes Plagas: cómo tratamos los datos que nos entregas a través del formulario, WhatsApp o teléfono.",
  },
];
