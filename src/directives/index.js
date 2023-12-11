import permission from "./permission/index.js";
import copy from "./copy/index.js";

const directives = {
  permission,
  copy,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
