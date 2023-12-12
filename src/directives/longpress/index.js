const longpress = {
  bind(el, { value }) {
    if (typeof value !== "function") {
      throw new Error("param must be a function");
    }

    const handler = (event) => {
      value(event);
    };

    let timer = null;
    const start = (event) => {
      if (timer === null) {
        timer = setTimeout(() => {
          handler(event);
        }, 2000);
      }
    };

    const cancel = () => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };

    // 开启定时器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    // 取消定时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
};

export default longpress;
