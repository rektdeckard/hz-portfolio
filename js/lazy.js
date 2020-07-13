document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll("img.lazy-load"));
  console.log(images);
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          console.log(img);

          imageObserver.unobserve(img);
        }
      })
    });

    images.forEach((img) => imageObserver.observe(img));
  };
});
