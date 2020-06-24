import Vue from "vue";
import Vuetify from "vuetify";
import ProductEditModal from "../../ProductEditModal";
import ProductsGrid from "../../../../ProductsGrid";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { productsGrid } from "@/store/modules/productsGrid/";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductGrid", () => {
  let vuetify, actions, store, state, productsGridWrap, productEditModalwrap;
  const testProduct = {
    artnumber: "123456",
    name: "Корм 1",
    brand: "Felix",
    weight: "1500",
    quantity: "20",
    price: "1500",
    stock: "1"
  };

  beforeEach(() => {
    actions = {
      editItem: jest.fn(),
      open: jest.fn(),
      close: jest.fn(),
      deleteItem: jest.fn()
    };
    state = {
      products: [testProduct],
      dialog: true,
      editedItem: {
        name: "",
        artnumber: 0,
        brand: "",
        weight: 0,
        quantity: 0,
        price: 0,
        stock: 0
      },
      editedIndex: -1
    };
    store = new Vuex.Store({
      modules: {
        productsGrid: {
          state,
          actions,
          getters: productsGrid.getters
        }
      }
    });
    vuetify = new Vuetify();
    productsGridWrap = _createWrapper(ProductsGrid);
    productEditModalwrap = _createWrapper(ProductEditModal);
  });

  test("ProductEditModal существует", () => {
    expect(productEditModalwrap.exists()).toBe(true);
  });

  test("ProductEditModal является компонентом ProductsGrid, если modal = true", () => {
    expect(productsGridWrap.findComponent(ProductEditModal).exists()).toBe(
      true
    );
  });

  function _createWrapper(component) {
    return mount(component, {
      mocks: {
        $t: jest.fn()
      },
      store,
      localVue,
      vuetify
    });
  }
});
