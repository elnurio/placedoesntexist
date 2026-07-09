(() => {
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const navInline = document.querySelector(".nav-inline");

  // Header background on scroll
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Nav overlay toggle (main page only — subpages have no burger/overlay)
  if (burger && nav) {
    const setNavOpen = (isOpen) => {
      nav.classList.toggle("open", isOpen);
      header.classList.toggle("nav-hover", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    burger.addEventListener("click", () => {
      setNavOpen(!nav.classList.contains("open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });
  }

  // Show the scrolled (cream) header while hovering the inline nav
  if (navInline) {
    navInline.addEventListener("mouseenter", () => header.classList.add("nav-hover"));
    navInline.addEventListener("mouseleave", () => {
      // Keep the cream background while the submenu row is open — the
      // cursor is likely traveling down toward it.
      if (!header.classList.contains("subrow-open")) {
        header.classList.remove("nav-hover");
      }
    });
  }

  // Submenu second row: hovering a nav link with data-menu expands the
  // header downward with that link's subitems (CASA REN-style), instead
  // of a floating dropdown. Closes when the cursor leaves the header.
  const submenus = document.querySelectorAll(".nav-submenu");
  const closeSubrow = () => {
    header.classList.remove("subrow-open");
    submenus.forEach((menu) => menu.classList.remove("is-active"));
  };

  if (navInline && submenus.length) {
    navInline.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const menuId = link.getAttribute("data-menu");
        if (!menuId) {
          closeSubrow();
          return;
        }
        submenus.forEach((menu) => {
          menu.classList.toggle("is-active", menu.getAttribute("data-menu") === menuId);
        });
        header.classList.add("subrow-open", "nav-hover");
      });
    });

    header.addEventListener("mouseleave", () => {
      closeSubrow();
      header.classList.remove("nav-hover");
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
    observer.observe(el);
  });
})();
