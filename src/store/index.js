import Vue from "vue";
import Vuex from "vuex";
import { productsGrid } from "./modules/productsGrid";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { productsGrid }
});
