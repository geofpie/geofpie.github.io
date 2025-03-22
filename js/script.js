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