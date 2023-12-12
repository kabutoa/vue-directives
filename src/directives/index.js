import permission from "./permission/index.js";
import copy from "./copy/index.js";
import longpress from "./longpress/index.js";
import debounce from "./debounce/index.js";
import exchar from "./exchar/index.js";
import lazyload from "./lazyload/index.js";
import watermarker from "./watermarker/index.js";

const directives = {
  permission,
  copy,
  longpress,
  debounce,
  exchar,
  lazyload,
  watermarker,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
