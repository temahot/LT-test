import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "babel-polyfill";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { globalMixin } from "./mixins/global";
import i18n from "./i18n";
Vue.config.productionTip = false;

new Vue({
  mixins: [globalMixin],
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
