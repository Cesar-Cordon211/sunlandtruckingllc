$(document).ready(function(){
    // Sticky navbar & scroll-up button functionality
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up trigger
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Mobile menu toggle
    $('.hamburger-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.hamburger-btn i').toggleClass("active");
    });

    // Close mobile menu on menu item click
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.hamburger-btn i').removeClass("active");
    });
});

const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_contact: "Contact Us",

        // Index Page
        info_title: "About Sunland Trucking",
        info_desc: "Established in 2017 in Phoenix, Arizona, Sunland Trucking LLC is a premier freight and logistics provider dedicated to supplying dependable regional and long-haul transportation solutions. Built on a foundation of operational efficiency, integrity, and safety, we specialize in delivering tailored logistics strategies that keep supply chains moving seamlessly across North America. Our commitment to excellence ensures that every load is handled with the utmost care, precision, and timeliness.",
        
        attr1_title: "Reliability & Precision",
        attr1_sub1: "Proven track record for on-time pickup and delivery performance",
        attr1_sub2: "Proactive freight tracking and real-time communication protocols",
        attr1_sub3: "Tailored logistics planning to meet demanding client schedules",

        attr2_title: "Experienced Personnel",
        attr2_sub1: "Highly vetted, CDL-certified drivers with extensive freight hauling expertise",
        attr2_sub2: "Dedicated dispatch and support team focused on end-to-end service continuity",
        attr2_sub3: "Continuous professional training in highway safety and load securement",

        attr3_title: "Safety & Compliance",
        attr3_sub1: "Strict adherence to FMCSA, DOT regulations, and industry safety standards",
        attr3_sub2: "Rigorous preventive maintenance programs for high-fleet reliability",
        attr3_sub3: "Comprehensive safety protocols protecting cargo, drivers, and the public",

        // Services Page
        hero_overlay: "Driven by Trust, Powered by Experience",
        stat_established: "Established",
        stat_hq: "Headquarters",
        stat_compliant: "DOT Compliant",
        stat_ontime: "On-Time",
        stat_guarantee: "Delivery Guarantee",
        partner_title: "Why Partner With Us?",
        cta_title: "Need Reliable Freight Services?",
        cta_desc: "Get in touch with our dispatch team today for immediate quotes and service scheduling.",
        cta_btn: "Contact Us Today",

        // Contact Page
        contact_title: "Contact Us",
        contact_notice_title: "Capacity & Inquiries Notice",
        contact_p1: "Thank you for your interest in partnering with Sunland Trucking LLC. We appreciate your consideration for your freight and logistics needs.",
        contact_p2: "Please note that our fleet capacity is currently fully committed, and we are not accepting new contracted loads or external freight scheduling at this time.",
        contact_p3: "We sincerely value your interest and support. Please check back with us in the future for updates on fleet availability and service expansions."
    },

    es: {
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_contact: "Contacto",

        // Index Page
        info_title: "Sobre Sunland Trucking LLC",
        info_desc: "Fundada en 2017 en Phoenix, Arizona, Sunland Trucking LLC es una empresa líder en transporte de carga y logística dedicada a ofrecer soluciones de transporte regional y de larga distancia confiables. Construida sobre una base de eficiencia operativa, integridad y seguridad, nos especializamos en brindar estrategias logísticas personalizadas que mantienen las cadenas de suministro funcionando sin problemas en toda América del Norte. Nuestro compromiso con la excelencia garantiza que cada carga se maneje con el máximo cuidado, precisión y puntualidad.",
        
        attr1_title: "Confiabilidad y Precisión",
        attr1_sub1: "Historial comprobado de entregas y recogidas puntuales",
        attr1_sub2: "Rastreo proactivo de carga y comunicación en tiempo real",
        attr1_sub3: "Planificación logística personalizada para horarios exigentes",

        attr2_title: "Personal Experimentado",
        attr2_sub1: "Conductores certificados con licencia CDL y amplia experiencia",
        attr2_sub2: "Equipo de despacho dedicado al seguimiento de sus envíos",
        attr2_sub3: "Capacitación continua en seguridad vial y sujeción de carga",

        attr3_title: "Seguridad y Cumplimiento",
        attr3_sub1: "Cumplimiento estricto de regulaciones de FMCSA, DOT y estándares de la industria",
        attr3_sub2: "Programas rigurosos de mantenimiento preventivo para la flota",
        attr3_sub3: "Protocolos de seguridad para proteger la carga, conductores y el público",

        // Service Page 
        hero_overlay: "Impulsados por la Confianza, Respaldados por la Experiencia",
        stat_established: "Fundada",
        stat_hq: "Sede Principal",
        stat_compliant: "Cumplimiento DOT",
        stat_ontime: "A Tiempo",
        stat_guarantee: "Garantía de Entrega",
        partner_title: "¿Por Qué Asociarse Con Nosotros?",
        cta_title: "¿Necesita Servicios de Carga Confiables?",
        cta_desc: "Póngase en contacto con nuestro equipo de despacho hoy mismo para cotizaciones e itinerarios.",
        cta_btn: "Contáctenos Hoy",

        // Contact Page
        contact_title: "Contáctenos",
        contact_notice_title: "Aviso de Capacidad y Consultas",
        contact_p1: "Gracias por su interés en asociarse con Sunland Trucking LLC. Agradecemos su consideración para sus necesidades de carga y logística.",
        contact_p2: "Tenga en cuenta que la capacidad de nuestra flota está completamente comprometida en este momento, por lo que no estamos aceptando nuevas cargas ni programación de fletes externos.",
        contact_p3: "Agradecemos sinceramente su interés y apoyo. Vuelva a consultar con nosotros en el futuro para obtener actualizaciones sobre la disponibilidad de la flota."
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    // Text content
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Active state on buttons
    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.remove("active-lang");
    });
    const activeBtn = document.querySelector(`.lang-switch button[onclick="setLanguage('${lang}')"]`);
    if (activeBtn) {
        activeBtn.classList.add("active-lang");
    }
}

// Initialize interface on load
$(document.ready).ready(function() {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    // Navbar & Scroll-Up Button interactions
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    $('.hamburger-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.hamburger-btn i').toggleClass("active");
    });
});
