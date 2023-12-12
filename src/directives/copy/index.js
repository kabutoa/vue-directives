const copy = {
  bind(el, { value }) {
    el._value = value;
    el.handler = () => {
      if (!el._value) {
        console.log("value is empty!");
        return;
      }
      const textarea = document.createElement("textarea");
      // 防止`iOS`自动唤起键盘
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      textarea.value = el._value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        console.log("copy successfully");
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener("click", el.handler);
  },
  componentUpdated(el, { value }) {
    el._value = value;
  },
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};

export default copy;
