const debounce = {
  bind(el, { value }) {
    if (typeof value !== "function") {
      throw new Error("param must be a function");
    }
    let timer = null;
    el._handler = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        value();
      }, 1000);
    };
    el.addEventListener("click", el._handler);
  },
  unbind(el) {
    el.removeEventListener("click", el._handler);
  },
};
export default debounce;
