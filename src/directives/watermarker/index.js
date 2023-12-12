const init = (el, { font, color, text }) => {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 150;
  canvas.style.display = "none";
  const ctx = canvas.getContext("2d");
  ctx.rotate((-20 * Math.PI) / 180);
  ctx.font = font || "16px Microsoft JhengHei";
  ctx.fillStyle = color || "rgba(180, 180, 180, 0.2)";
  ctx.textAlign = "left";
  ctx.textBaseline = "Middle";
  ctx.fillText(text, canvas.width / 10, canvas.height / 2);
  el.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
};

const watermarker = {
  bind(el, { value }) {
    init(el, value);
  },
};
export default watermarker;
