import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueToasted from "vue-toasted";

Vue.config.productionTip = false;

// load toasted plugin
Vue.use(vueToasted);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
