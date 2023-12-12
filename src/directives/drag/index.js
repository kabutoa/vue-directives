const drag = {
  inserted: function (el) {
    el.style.cursor = "move";
    el.style.position = "absolute";
    // 禁止选中内容
    el.style["user-select"] = "none";

    // 事件处理
    let x = 0;
    let y = 0;
    const mousedownHandler = (e) => {
      x = e.clientX - el.offsetLeft;
      y = e.clientY - el.offsetTop;

      document.addEventListener("mousemove", mousemoveHandler);
      document.addEventListener("mouseup", mouseupHandler);
    };

    const mousemoveHandler = (e) => {
      const dx = e.clientX - x;
      const dy = e.clientY - y;

      el.style.left = `${dx}px`;
      el.style.top = `${dy}px`;
    };

    const mouseupHandler = () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      document.removeEventListener("mouseup", mouseupHandler);
    };

    document.addEventListener("mousedown", mousedownHandler);
  },
};
export default drag;
