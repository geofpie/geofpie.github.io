const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.cert-card').forEach((card) => {
      observer.observe(card);
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.project-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    cards.forEach(card => observer.observe(card));
  });

  function updateClock() {
    const now = new Date().toLocaleTimeString("en-SG", {
      timeZone: "Asia/Singapore",
      hour: "2-digit",
      minute: "2-digit"
    });
    const clockEl = document.getElementById("localClock");
    if (clockEl) {
      clockEl.textContent = `${now}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 60000);
  });

  function animateOnScroll(selector) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    animateOnScroll(".about-animate");
  });

  function animateCascadeOnScroll(selector) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(selector);
          items.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("animate-in");
            }, i * 120); // Stagger delay per item
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    // Observe the parent container of the animated items
    const parent = document.querySelector("#about .row");
    if (parent) observer.observe(parent);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    animateCascadeOnScroll(".about-item");
  });

  function triggerHereEffect(el) {
    el.classList.add("rainbow-activated");
    setTimeout(() => {
      el.classList.remove("rainbow-activated");
    }, 1600); // matches the animation duration
  }

  function triggerHereEffect(el) {
    el.classList.add("rainbow-activated");
  
    // Sparkle burst
    for (let i = 0; i < 10; i++) {
      const sparkle = document.createElement("span");
      sparkle.classList.add("sparkle");
  
      const angle = Math.random() * 2 * Math.PI;
      const distance = 40 + Math.random() * 30;
  
      const x = Math.cos(angle) * distance + "px";
      const y = Math.sin(angle) * distance + "px";
  
      sparkle.style.setProperty("--x", x);
      sparkle.style.setProperty("--y", y);
  
      el.appendChild(sparkle);
  
      setTimeout(() => sparkle.remove(), 800);
    }
  
    setTimeout(() => {
      el.classList.remove("rainbow-activated");
    }, 1600);
  }

  function animateContactCascade() {
    const section = document.querySelector('#contact .row');
    if (!section) return;
  
    const items = section.querySelectorAll('.contact-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("animate-in");
            }, i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(section);
  }
  
  document.addEventListener("DOMContentLoaded", animateContactCascade);