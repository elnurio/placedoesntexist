const I18N = (() => {
  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "ru";

  const dict = {
    ru: {
      "meta.title": "Место Которого Нет — Архитектура и интерьер полного цикла",
      "meta.description": "Архитектурные и интерьерные решения полного цикла: дверные системы, стеновые панели, мебель. Итальянский подход к дизайну.",
      "brand": "Место Которого Нет",
      "nav.architecture": "Архитектура",
      "nav.design": "Дизайн",
      "nav.doors": "Двери",
      "nav.overlay.about": "О компании",
      "nav.overlay.directions": "Направления",
      "nav.overlay.italy": "Италия",
      "nav.overlay.partners": "Партнёры",
      "nav.overlay.contacts": "Контакты",
      "burger.label": "Открыть меню",
      "hero.scroll": "Листайте",
      "about.eyebrow": "О нас",
      "about.text": "Мы создаём архитектурные и интерьерные решения полного цикла, где каждая деталь является частью единой концепции. В сотрудничестве с итальянскими архитекторами и ведущими европейскими фабриками мы сопровождаем проект от разработки идеи до полной реализации, объединяя архитектуру, мебель, дверные системы и отделочные материалы в гармоничное пространство.",
      "about.contactLink": "Связаться",
      "directions.eyebrow": "Направления",
      "directions.heading": "Что мы делаем",
      "directions.doors.title": "Дверные системы",
      "directions.doors.text": "Современные дверные решения для отелей, офисов, жилых и коммерческих объектов: технические, противопожарные и входные системы.",
      "directions.panels.title": "Стеновые панели",
      "directions.panels.text": "Функциональные и эстетичные решения для оформления интерьеров, которые подчёркивают архитектуру пространства.",
      "directions.furniture.title": "Мебель",
      "directions.furniture.text": "Комплексное оснащение офисов, гостиниц, общественных и жилых пространств мебелью, отвечающей высоким требованиям дизайна и комфорта.",
      "italy.eyebrow": "Философия",
      "italy.heading": "Итальянская архитектура",
      "italy.text": "В основе наших проектов — итальянский подход к архитектуре и дизайну. Совместно с партнёрами из Италии мы создаём пространства, в которых сочетаются эстетика, функциональность и внимание к каждой детали.",
      "partners.eyebrow": "Партнёры",
      "partners.heading": "С кем мы работаем",
      "partners.lead": "Мы работаем с ведущими итальянскими производителями мебели, освещения и интерьерных решений, предлагая проверенное качество и актуальный европейский дизайн.",
      "partners.slot.furniture": "Мебель",
      "partners.slot.lighting": "Освещение",
      "partners.slot.doors": "Двери",
      "partners.slot.panels": "Панели",
      "partners.slot.finishing": "Отделка",
      "partners.note": "Логотипы партнёров появятся здесь после согласования брендбука",
      "contact.eyebrow": "Контакты",
      "contact.heading": "Обсудим ваш<br /><em>проект</em>",
      "contact.sub": "Пришлите референсы, мудборд и детали проекта — мы свяжемся с вами, чтобы обсудить задачи и следующие шаги.",
      "footer.top": "Наверх",
      "fargo.title": "Fargo — Место Которого Нет",
      "fargo.back": "Назад",
      "viani.title": "Viani Porte — Место Которого Нет",
      "viani.eyebrow": "Двери",
      "viani.p1": "VIANI Porte — проектно-контрактное производство дверей, стеновых панелей и мебели для гостиниц, жилых комплексов, офисов и общественных пространств.",
      "viani.p2": "Компания сопровождает проект на каждом этапе — от разработки конструкторской документации и подбора материалов до производства, логистики и профессионального монтажа. Собственное производство, инженерная команда и многолетний опыт позволяют создавать как стандартные, так и индивидуальные решения, отвечающие высоким требованиям к дизайну, качеству и долговечности.",
      "viani.p3": "VIANI объединяет архитектурный подход, современные технологии и внимание к деталям, помогая реализовывать проекты любой сложности.",
    },
    en: {
      "meta.title": "Place Doesn't Exist — Full-Cycle Architecture & Interior Design",
      "meta.description": "Full-cycle architectural and interior design solutions: door systems, wall panels, furniture. An Italian approach to design.",
      "brand": "Place Doesn&rsquo;t Exist",
      "nav.architecture": "Architecture",
      "nav.design": "Design",
      "nav.doors": "Doors",
      "nav.overlay.about": "About",
      "nav.overlay.directions": "Directions",
      "nav.overlay.italy": "Italy",
      "nav.overlay.partners": "Partners",
      "nav.overlay.contacts": "Contact",
      "burger.label": "Open menu",
      "hero.scroll": "Scroll",
      "about.eyebrow": "About",
      "about.text": "We create full-cycle architectural and interior solutions where every detail is part of a single concept. Working with Italian architects and leading European factories, we guide each project from initial idea to full realization, bringing together architecture, furniture, door systems, and finishing materials into one harmonious space.",
      "about.contactLink": "Get in touch",
      "directions.eyebrow": "Directions",
      "directions.heading": "What we do",
      "directions.doors.title": "Door systems",
      "directions.doors.text": "Modern door solutions for hotels, offices, residential and commercial properties: technical, fire-rated, and entrance systems.",
      "directions.panels.title": "Wall panels",
      "directions.panels.text": "Functional and aesthetic solutions for interior finishing that highlight the architecture of a space.",
      "directions.furniture.title": "Furniture",
      "directions.furniture.text": "Complete furnishing for offices, hotels, public and residential spaces, meeting high standards of design and comfort.",
      "italy.eyebrow": "Philosophy",
      "italy.heading": "Italian architecture",
      "italy.text": "Our projects are rooted in the Italian approach to architecture and design. Together with our partners in Italy, we create spaces where aesthetics, functionality, and attention to every detail come together.",
      "partners.eyebrow": "Partners",
      "partners.heading": "Who we work with",
      "partners.lead": "We work with leading Italian manufacturers of furniture, lighting, and interior solutions, offering proven quality and current European design.",
      "partners.slot.furniture": "Furniture",
      "partners.slot.lighting": "Lighting",
      "partners.slot.doors": "Doors",
      "partners.slot.panels": "Panels",
      "partners.slot.finishing": "Finishing",
      "partners.note": "Partner logos will appear here once the brand guidelines are approved.",
      "contact.eyebrow": "Contact",
      "contact.heading": "Let&rsquo;s discuss<br /><em>your project</em>",
      "contact.sub": "Send us your references, moodboard, and project details — we&rsquo;ll get in touch to discuss the brief and next steps.",
      "footer.top": "Back to top",
      "fargo.title": "Fargo — Place Doesn't Exist",
      "fargo.back": "Back",
      "viani.title": "Viani Porte — Place Doesn't Exist",
      "viani.eyebrow": "Doors",
      "viani.p1": "VIANI Porte is a project- and contract-focused manufacturer of doors, wall panels, and furniture for hotels, residential complexes, offices, and public spaces.",
      "viani.p2": "The company supports each project at every stage — from engineering documentation and material selection to production, logistics, and professional installation. In-house manufacturing, an engineering team, and years of experience make it possible to deliver both standard and bespoke solutions that meet the highest requirements for design, quality, and durability.",
      "viani.p3": "VIANI brings together an architectural approach, modern technology, and attention to detail, helping deliver projects of any complexity.",
    },
  };

  const getStoredLang = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  };

  const setStoredLang = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  };

  const apply = (lang) => {
    const table = dict[lang] || dict[DEFAULT_LANG];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] !== undefined) el.innerHTML = table[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.getAttribute("data-i18n-attr");
      if (table[key] !== undefined) el.setAttribute("aria-label", table[key]);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    setStoredLang(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  };

  const init = () => {
    const lang = getStoredLang() || DEFAULT_LANG;
    apply(lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.getAttribute("data-lang")));
    });
  };

  return { init, apply };
})();

document.addEventListener("DOMContentLoaded", I18N.init);
