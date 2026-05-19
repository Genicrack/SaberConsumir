const sections = document.querySelectorAll(".section, .hero, .footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
