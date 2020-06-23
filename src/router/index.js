import Vue from "vue";
import VueRouter from "vue-router";
import ProductsGrid from "../views/ProductsGrid";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Продукты",
    component: ProductsGrid
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
