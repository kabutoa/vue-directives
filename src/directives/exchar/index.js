const findEle = (el, type) => {
  return el.tagName.toLowerCase() === type ? el : el.querySelector(type);
};
// 禁止输入指定字符
const rule = /[a|b|c]/g;

const exchar = {
  bind(el) {
    const _inputEl = findEle(el, "input");
    if (!_inputEl) {
      return;
    }
    el._handler = () => {
      _inputEl.value = _inputEl.value.replace(rule, "");
    };
    el.addEventListener("keyup", el._handler);
  },
  unbind(el) {
    el.removeEventListener("keyup", el._handler);
  },
};
export default exchar;
