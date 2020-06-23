import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "babel-polyfill";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { globalMixin } from "./mixins/global";
Vue.config.productionTip = false;

new Vue({
  mixins: [globalMixin],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
