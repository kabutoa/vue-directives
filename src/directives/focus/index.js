const focus = {
  inserted(el) {
    const input =
      el.tagName.toLowerCase() === "input" ? el : el.querySelector("input");
    input.focus();
  },
};

export default focus;
