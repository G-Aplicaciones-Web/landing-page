document.addEventListener("DOMContentLoaded", () => {
  const toolbar = document.getElementById("mainToolbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      toolbar.classList.add("scrolled");
    } else {
      toolbar.classList.remove("scrolled");
    }
  });

  document
    .querySelectorAll(
      ".toolbar-nav a, .mobile-nav a, .logo-link, .footer-brand a"
    )
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - toolbar.offsetHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const closeMobileNav = document.getElementById("closeMobileNav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

  if (hamburgerMenu && mobileNavOverlay && closeMobileNav) {
    hamburgerMenu.addEventListener("click", () => {
      mobileNavOverlay.classList.toggle("open");
      hamburgerMenu.classList.toggle("open");
      document.body.classList.toggle("no-scroll");
    });

    closeMobileNav.addEventListener("click", () => {
      mobileNavOverlay.classList.remove("open");
      hamburgerMenu.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavOverlay.classList.remove("open");
        hamburgerMenu.classList.remove("open");
        document.body.classList.remove("no-scroll");
      });
    });

    mobileNavOverlay.addEventListener("click", (event) => {
      if (event.target === mobileNavOverlay) {
        mobileNavOverlay.classList.remove("open");
        hamburgerMenu.classList.remove("open");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  const loginButton = document.querySelector(".btn-login");
  const startNowButton = document.querySelector(".btn-primary");

  const redirectUrl = "https://frontend-two-omega-72.vercel.app";

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      window.location.href = redirectUrl;
    });
  }

  if (startNowButton) {
    startNowButton.addEventListener("click", () => {
      window.location.href = redirectUrl;
    });
  }

  const langToggleBtn = document.getElementById("langToggle");
  let currentLang = "en";

  const translations = {
    en: {
      // Toolbar
      nav_how_it_works: "How It Works?",
      nav_features: "Features",
      nav_services: "Services",
      nav_cases: "Real Cases",
      nav_testimonials: "Testimonials",
      nav_about_us: "About Us",
      nav_contact: "Contact Us",
      btn_login: "Log In",

      // Hero Section
      hero_subtitle: "Manage your energy smartly",
      hero_title_main: "Monitor, analyze, and optimize your consumption",
      hero_description:
        "EcoVolt is the leading platform in Peru that allows you to control your electricity consumption, reduce costs, and contribute to your company's sustainability.",
      btn_start_now: "Start Now!",

      // How It Works Section
      how_it_works_title: "How It Works?",
      how_it_works_description:
        "Transform the way your company manages electricity consumption. Install, monitor, and make smart decisions with a platform designed to save, comply with regulations, and be more sustainable.",
      how_it_works_card1_title: "Install",
      how_it_works_card1_description:
        "Easily and quickly implement our IoT devices in your facilities.",
      how_it_works_card2_title: "Monitor",
      how_it_works_card2_description:
        "Visualize energy consumption in real-time from our intuitive platform.",
      how_it_works_card3_title: "Analyze",
      how_it_works_card3_description:
        "Access detailed reports and trends to identify improvement opportunities.",
      how_it_works_card4_title: "Optimize",
      how_it_works_card4_description:
        "Make smart decisions to reduce your costs and become more efficient.",

      // Features Section
      features_title: "Discover the Power of EcoVolt",
      features_description:
        "Our platform integrates cutting-edge technology to give you total control over your energy and maximize your company's operational efficiency.",
      feature_tag1: "EcoVolt One",
      feature_card1_title: "Real-time Monitoring",
      feature_card1_description:
        "Visualize electricity consumption of all your equipment and areas, detecting anomalies instantly.",
      feature_tag2: "EcoVolt Two",
      feature_card2_title: "Advanced Data Analytics",
      feature_card2_description:
        "Access detailed reports and consumption trends to identify patterns, inefficiencies, and savings opportunities.",
      feature_tag3: "EcoVolt Three",
      feature_card3_title: "Smart Alerts & Notifications",
      feature_card3_description:
        "Receive automatic alerts about consumption peaks, failures, or deviations to act proactively and avoid extra costs.",
      feature_tag4: "EcoVolt Four",
      feature_card4_title: "Control Panel",
      feature_card4_description:
        "Easily navigate the platform with a friendly interface that puts control in your hands, without complications.",

      // Services Section
      services_title: "Services",
      services_description:
        "Beyond the platform, EcoVolt offers expert support and personalized solutions for every stage of your energy transformation.",
      service_card1_title: "Consulting and Energy Audits",
      service_card1_description:
        "Our experts conduct exhaustive analyses of your current consumption and guide you with personalized strategies to maximize savings and efficiency.",
      service_card2_title: "IoT Device Installation and Configuration",
      service_card2_description:
        "We handle the complete implementation of our sensors and hardware, ensuring optimal configuration and uninterrupted data collection.",
      service_card3_title: "Training and Continuous Support",
      service_card3_description:
        "We train your team to make the most of the EcoVolt platform and provide dedicated technical support to resolve any queries or incidents.",

      // Real Cases Section
      cases_title: "EcoVolt Success Stories",
      cases_description:
        "Discover how leading companies in Peru transformed their energy management and achieved significant savings with EcoVolt.",
      case_card1_title: "Andean Mining Group",
      case_card1_description:
        "25% Reduction in Electricity Costs. Implementation of IoT monitoring in key mining operations.",
      case_card2_title: "Textile Industry 'Sun's Weavings'",
      case_card2_description:
        "18% Optimization in machinery consumption. Reduction of carbon footprint and compliance with sustainability objectives.",

      // Testimonials Section
      testimonials_title: "Testimonials",
      testimonials_description:
        "Learn about the experiences of companies and professionals who are already transforming their energy management with EcoVolt.",
      testimonial1_text:
        '"EcoVolt has been a game-changer for our plant. The reduction in energy costs is remarkable, and the monitoring gives us peace of mind we didn\'t have before. Highly recommended!"',
      testimonial1_author: "Eng. Ana Mendoza",
      testimonial1_role: "Operations Manager, Construcciones del Pacífico S.A.",
      testimonial2_text:
        '"Thanks to the EcoVolt platform, we have optimized the electricity consumption of our branches nationwide. The interface is intuitive, and technical support is exceptional. It has allowed us to meet our sustainability goals."',
      testimonial2_author: "Lic. Carlos Rojas",
      testimonial2_role: "Sustainability Director, Grupo Retail Perú",
      testimonial3_text:
        '"The implementation of EcoVolt in our data center was surprisingly fast. Now we have total control over each rack\'s consumption, which translates into significant savings and greater operational efficiency. A worthwhile investment."',
      testimonial3_author: "Arch. Patricia Torres",
      testimonial3_role: "Infrastructure Manager, Datacenter Andino",
      testimonial4_text:
        '"As an independent electrician, EcoVolt has given me the tools to offer a much more professional service. Data analysis allows me to diagnose consumption problems with a precision that my clients value much."',
      testimonial4_author: "Juan Pérez",
      testimonial4_role:
        "Certified Electrician, Juan Pérez Electrical Solutions",
      testimonial5_text:
        '"The training I received from EcoVolt was key. Now I can efficiently install and configure IoT devices, and the app helps me show real impact to my clients. It\'s a competitive advantage."',
      testimonial5_author: "María Fernández",
      testimonial5_role: "Electrical Technician, ElectroServicios Innova",
      testimonial6_text:
        '"I use EcoVolt for all my energy audits. It greatly facilitates the identification of critical points and the elaboration of reports. My clients trust my recommendations more because they are based on precise data."',
      testimonial6_author: "Roberto Quispe",
      testimonial6_role: "Independent Energy Consultant",

      // About Us Section
      about_us_title: "About EcoVolt",
      about_us_mission_title: "Mission", // Simplified
      about_us_mission_text:
        "To transform the energy management of Peruvian companies, offering innovative and sustainable solutions that optimize consumption, reduce costs, and contribute to a greener future.",
      about_us_vision_title: "Vision", // Simplified
      about_us_vision_text:
        "To be the leading company in energy management solutions in Peru, recognized for our cutting-edge technology, our commitment to the environment, and excellence in customer service.",

      // Contact Section
      contact_title: "Contact Us",
      contact_description:
        "Do you have questions or need a demo? Send us a message and we will respond as soon as possible.",
      contact_email_label: "Email:",
      contact_phone_label: "Phone Number:",
      contact_message_label: "Your Message:",
      contact_send_btn: "Send Message",
      modal_message_sent: "Message sent successfully!",

      // Footer
      footer_brand_name: "EcoVolt",
      footer_contact_title: "Contact",
      footer_address: "Miraflores, Lima, Peru",
      footer_phone: "+51 987 654 321",
      footer_email: "info@ecovolt.com",
      footer_legal_title: "Legal",
      footer_privacy_policy: "Privacy Policy",
      footer_terms_conditions: "Terms & Conditions",
      footer_cookies_policy: "Cookies Policy",
      footer_about_us_title: "About Us",
      footer_who_we_are: "Who We Are",
      footer_our_mission: "Our Mission",
      footer_testimonials: "Testimonials",
      footer_resources_title: "Resources",
      footer_faq: "FAQ",
      footer_blog: "Blog",
      footer_support: "Support",
      footer_copyright_text: "© 2025 EcoVolt. All rights reserved.",
    },
    es: {
      // Toolbar
      nav_how_it_works: "¿Cómo Funciona?",
      nav_features: "Características",
      nav_services: "Servicios",
      nav_cases: "Casos Reales",
      nav_testimonials: "Testimonios",
      nav_about_us: "Acerca de Nosotros",
      nav_contact: "Contáctanos",
      btn_login: "Iniciar Sesión",

      // Hero Section
      hero_subtitle: "Gestiona tu energía de forma inteligente",
      hero_title_main: "Monitorea, analiza y optimiza tu consumo",
      hero_description:
        "EcoVolt es la plataforma líder en Perú que te permite controlar tu consumo eléctrico, reducir costos y contribuir a la sostenibilidad de tu empresa.",
      btn_start_now: "Empieza Ya!",

      // How It Works Section
      how_it_works_title: "¿Cómo Funciona?",
      how_it_works_description:
        "Transforma la manera en que tu empresa gestiona el consumo eléctrico. Instala, monitorea y toma decisiones inteligentes con una plataforma pensada para ahorrar, cumplir normativas y ser más sostenible.",
      how_it_works_card1_title: "Instala",
      how_it_works_card1_description:
        "Implementa nuestros dispositivos IoT de forma sencilla y rápida en tus instalaciones.",
      how_it_works_card2_title: "Monitorea",
      how_it_works_card2_description:
        "Visualiza en tiempo real el consumo energético desde nuestra plataforma intuitiva.",
      how_it_works_card3_title: "Analiza",
      how_it_works_card3_description:
        "Accede a reportes detallados y tendencias para identificar oportunidades de mejora.",
      how_it_works_card4_title: "Optimiza",
      how_it_works_card4_description:
        "Toma decisiones inteligentes para reducir tus costos y ser más eficiente.",

      // Features Section
      features_title: "Descubre el Poder de EcoVolt",
      features_description:
        "Nuestra plataforma integra tecnología de vanguardia para brindarte control total sobre tu energía y maximizar la eficiencia operativa de tu empresa.",
      feature_tag1: "EcoVolt Uno",
      feature_card1_title: "Monitoreo en Tiempo Real",
      feature_card1_description:
        "Visualiza el consumo eléctrico de todos tus equipos y áreas, detectando anomalías al instante.",
      feature_tag2: "EcoVolt Dos",
      feature_card2_title: "Análisis Avanzado de Datos",
      feature_card2_description:
        "Accede a reportes detallados y tendencias de consumo para identificar patrones, ineficiencias y oportunidades de ahorro.",
      feature_tag3: "EcoVolt Tres",
      feature_card3_title: "Alertas y Notificaciones Inteligentes",
      feature_card3_description:
        "Recibe avisos automáticos sobre picos de consumo, fallas o desviaciones para actuar proactivamente y evitar sobrecostos.",
      feature_tag4: "EcoVolt Cuatro",
      feature_card4_title: "Panel de Control",
      feature_card4_description:
        "Navega fácilmente por la plataforma con una interfaz amigable que te pone el control en tus manos, sin complicaciones.",

      // Services Section
      services_title: "Servicios",
      services_description:
        "Más allá de la plataforma, EcoVolt te ofrece un acompañamiento experto y soluciones personalizadas para cada etapa de tu transformación energética.",
      service_card1_title: "Consultoría y Auditorías Energéticas",
      service_card1_description:
        "Nuestros expertos realizan análisis exhaustivos de tu consumo actual y te guían con estrategias personalizadas para maximizar el ahorro y la eficiencia.",
      service_card2_title: "Instalación y Configuración de Dispositivos IoT",
      service_card2_description:
        "Nos encargamos de la implementación completa de nuestros sensores y hardware, asegurando una configuración óptima y una recolección de datos sin interrupciones.",
      service_card3_title: "Capacitación y Soporte Continuo",
      service_card3_description:
        "Capacitamos a tu equipo para aprovechar al máximo la plataforma EcoVolt y te brindamos soporte técnico dedicado para resolver cualquier consulta o incidente.",

      // Real Cases Section
      cases_title: "Casos de Éxito EcoVolt",
      cases_description:
        "Descubre cómo empresas líderes en Perú transformaron su gestión energética y lograron ahorros significativos con EcoVolt.",
      case_card1_title: "Grupo Minero Andino",
      case_card1_description:
        "Reducción del 25% en Costos Eléctricos. Implementación de monitoreo IoT en operaciones mineras clave.",
      case_card2_title: "Industria Textil 'Tejidos del Sol'",
      case_card2_description:
        "Optimización del 18% en consumo de maquinaria. Reducción de huella de carbono y cumplimiento de objetivos de sostenibilidad.",

      // Testimonials Section
      testimonials_title: "Testimonios",
      testimonials_description:
        "Conoce las experiencias de empresas y profesionales que ya están transformando su gestión energética con EcoVolt.",
      testimonial1_text:
        '"EcoVolt ha sido un antes y un después para nuestra planta. La reducción en los costos de energía es notable y el monitoreo nos da una tranquilidad que antes no teníamos. ¡Altamente recomendado!"',
      testimonial1_author: "Ing. Ana Mendoza",
      testimonial1_role:
        "Gerente de Operaciones, Construcciones del Pacífico S.A.",
      testimonial2_text:
        '"Gracias a la plataforma de EcoVolt, hemos optimizado el consumo eléctrico de nuestras sucursales en todo el país. La interfaz es intuitiva y el soporte técnico es excepcional. Nos ha permitido cumplir nuestras metas de sostenibilidad."',
      testimonial2_author: "Lic. Carlos Rojas",
      testimonial2_role: "Director de Sostenibilidad, Grupo Retail Perú",
      testimonial3_text:
        '"La implementación de EcoVolt en nuestro centro de datos fue sorprendentemente rápida. Ahora tenemos control total sobre el consumo de cada rack, lo que se traduce en ahorros significativos y una mayor eficiencia operativa. Una inversión que vale la pena."',
      testimonial3_author: "Arq. Patricia Torres",
      testimonial3_role: "Gerente de Infraestructura, Datacenter Andino",
      testimonial4_text:
        '"Como electricista independiente, EcoVolt me ha dado las herramientas para ofrecer un servicio mucho más profesional. El análisis de datos me permite diagnosticar problemas de consumo con una precisión que mis clientes valoran mucho."',
      testimonial4_author: "Juan Pérez",
      testimonial4_role:
        "Electricista Certificado, Juan Pérez Soluciones Eléctricas",
      testimonial5_text:
        '"La capacitación que recibí de EcoVolt fue clave. Ahora puedo instalar y configurar los dispositivos IoT de manera eficiente, y la app me ayuda a mostrar el impacto real a mis clientes. Es una ventaja competitiva."',
      testimonial5_author: "María Fernández",
      testimonial5_role: "Técnica Electricista, ElectroServicios Innova",
      testimonial6_text:
        '"Utilizo EcoVolt para todas mis auditorías energéticas. Me facilita enormemente la identificación de puntos críticos y la elaboración de informes. Mis clientes confían más en mis recomendaciones porque están basadas en datos precisos."',
      testimonial6_author: "Roberto Quispe",
      testimonial6_role: "Consultor Energético Independiente",

      // About Us Section
      about_us_title: "Sobre EcoVolt",
      about_us_mission_title: "Misión", // Simplified
      about_us_mission_text:
        "Transformar la gestión energética de las empresas peruanas, ofreciendo soluciones innovadoras y sostenibles que optimicen el consumo, reduzcan costos y contribuyan a un futuro más verde.",
      about_us_vision_title: "Visión", // Simplified
      about_us_vision_text:
        "Ser la empresa líder en soluciones de gestión energética en Perú, reconocida por nuestra tecnología de vanguardia, nuestro compromiso con el medio ambiente y la excelencia en el servicio al cliente.",

      // Contact Section
      contact_title: "Contáctanos",
      contact_description:
        "¿Tienes preguntas o necesitas una demo? Envíanos un mensaje y te responderemos a la brevedad.",
      contact_email_label: "Correo Electrónico:",
      contact_phone_label: "Número de Teléfono:",
      contact_message_label: "Tu Mensaje:",
      contact_send_btn: "Enviar Mensaje",
      modal_message_sent: "¡Mensaje enviado con éxito!",

      // Footer
      footer_brand_name: "EcoVolt",
      footer_contact_title: "Contacto",
      footer_address: "Miraflores, Lima, Perú",
      footer_phone: "+51 987 654 321",
      footer_email: "info@ecovolt.com",
      footer_legal_title: "Legales",
      footer_privacy_policy: "Política de Privacidad",
      footer_terms_conditions: "Términos y Condiciones",
      footer_cookies_policy: "Política de Cookies",
      footer_about_us_title: "Nosotros",
      footer_who_we_are: "Quiénes Somos",
      footer_our_mission: "Nuestra Misión",
      footer_testimonials: "Testimonios",
      footer_resources_title: "Recursos",
      footer_faq: "Preguntas Frecuentes",
      footer_blog: "Blog",
      footer_support: "Soporte",
      footer_copyright_text: "© 2025 EcoVolt. Todos los derechos reservados.",
    },
  };

  function applyTranslations() {
    const elements = document.querySelectorAll("[data-lang-key]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (translations[currentLang] && translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
      }
    });

    langToggleBtn.textContent = currentLang === "en" ? "EN | ES" : "ES | EN";

    if (currentLang === "es") {
      document.getElementById("contactEmail").placeholder =
        "tu.correo@ejemplo.com";
      document.getElementById("contactPhone").placeholder = "+51 9XX XXX XXX";
      document.getElementById("contactMessage").placeholder =
        "Escribe tu mensaje aquí...";
    } else {
      document.getElementById("contactEmail").placeholder =
        "your.email@example.com";
      document.getElementById("contactPhone").placeholder = "+51 9XX XXX XXX";
      document.getElementById("contactMessage").placeholder =
        "Write your message here...";
    }

    if (emailError.style.display === "block") {
      emailError.textContent =
        currentLang === "es"
          ? "Por favor, introduce un correo electrónico válido."
          : "Please enter a valid email address.";
    }
    if (phoneError.style.display === "block") {
      phoneError.textContent =
        currentLang === "es"
          ? "Por favor, introduce un número de teléfono válido (ej: +51 9XX XXX XXX)."
          : "Please enter a valid phone number (e.g., +51 9XX XXX XXX).";
    }
    if (messageError.style.display === "block") {
      messageError.textContent =
        currentLang === "es"
          ? "El mensaje no puede estar vacío."
          : "Message cannot be empty.";
    }
  }

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    applyTranslations();
  });

  applyTranslations();

  const testimonialCarousel = document.querySelector(".testimonial-carousel");
  const testimonialCards = document.querySelectorAll(".card-testimonial");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active-testimonial");
      } else {
        card.classList.remove("active-testimonial");
      }
    });
  }

  if (testimonialCards.length > 0) {
    showTestimonial(currentIndex);
  }

  prevBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonialCards.length - 1;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex < testimonialCards.length - 1 ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  });

  const contactForm = document.getElementById("contactForm");
  const contactEmail = document.getElementById("contactEmail");
  const contactPhone = document.getElementById("contactPhone");
  const contactMessage = document.getElementById("contactMessage");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");
  const successModal = document.getElementById("successModal");
  const closeModalBtn = document.querySelector("#successModal .close-button");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^(\+51\s?)?(9\d{8})$/;
    return re.test(String(phone).replace(/\s/g, ""));
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    emailError.style.display = "none";
    phoneError.style.display = "none";
    messageError.style.display = "none";

    if (
      !contactEmail.value.trim() ||
      !validateEmail(contactEmail.value.trim())
    ) {
      emailError.textContent =
        currentLang === "es"
          ? "Por favor, introduce un correo electrónico válido."
          : "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    }

    if (
      !contactPhone.value.trim() ||
      !validatePhone(contactPhone.value.trim())
    ) {
      phoneError.textContent =
        currentLang === "es"
          ? "Por favor, introduce un número de teléfono válido (ej: +51 9XX XXX XXX)."
          : "Please enter a valid phone number (e.g., +51 9XX XXX XXX).";
      phoneError.style.display = "block";
      isValid = false;
    }

    if (!contactMessage.value.trim()) {
      messageError.textContent =
        currentLang === "es"
          ? "El mensaje no puede estar vacío."
          : "Message cannot be empty.";
      messageError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      console.log("Formulario válido. Enviando mensaje...");
      console.log("Email:", contactEmail.value);
      console.log("Phone:", contactPhone.value);
      console.log("Message:", contactMessage.value);

      successModal.style.display = "flex";

      contactForm.reset();
    }
  });

  closeModalBtn.addEventListener("click", () => {
    successModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == successModal) {
      successModal.style.display = "none";
    }
  });
});
