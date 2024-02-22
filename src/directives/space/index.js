const findEle = (el, type) => {
  return el.tagName.toLowerCase() === type ? el : el.querySelector(type);
};

const addSpace = (content) => {
  content = content.replace(/([a-zA-Z0-9)'>)}\]])([\u4e00-\u9fa5])/g, "$1 $2");
  content = content.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9('<{\]])/g, "$1 $2");
  return content;
};

const space = {
  bind(el) {
    const _inputEl = findEle(el, "input");
    if (!_inputEl) {
      return;
    }
    el._handler = () => {
      _inputEl.value = addSpace(_inputEl.value);
    };
    el.addEventListener("keyup", el._handler);
  },
  unbind(el) {
    el.removeEventListener("keyup", el._handler);
  },
};
export default space;
