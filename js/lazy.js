document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll("img.lazy-load"));
  console.log(images);
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          setTimeout(() => img.classList.add("loaded"), 50 * i);

          imageObserver.unobserve(img);
        }
      })
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    images.forEach(img => {
        img.src = img.dataset.src;
        img.previousElementSibling.remove();
    });
  }
});
