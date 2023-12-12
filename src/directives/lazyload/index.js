const lazyload = {
  bind(el, { value }) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = value;
          imageObserver.unobserve(img);
        }
      });
    });
    imageObserver.observe(el);
  },
};
export default lazyload;
