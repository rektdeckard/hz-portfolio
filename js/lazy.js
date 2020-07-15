// Lazy-load images and staggered fade-in
document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll("img.lazy-load"));

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;

          // Delay (in ms) between each image appearance
          setTimeout(() => img.classList.add("loaded"), 75 * (i + 1));
          imageObserver.unobserve(img);
        }
      })
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
    });
  }
});
