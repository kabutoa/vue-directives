import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Directives from "./directives";

Vue.use(ElementUI);
Vue.use(Directives);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
