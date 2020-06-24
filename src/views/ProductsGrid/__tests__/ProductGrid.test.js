import Vue from "vue";
import Vuetify from "vuetify";
import ProductGrid from "../index.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { productsGrid } from "../../../store/modules/productsGrid/";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductGrid", () => {
  let vuetify, actions, store, state, wrapper;
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
      dialog: false
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
    wrapper = _createWrapper();
  });

  test("PrdouctGrid существует", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("При нажатии на кнопку создать новый товар, срабатывает action на открытие модального окна", async () => {
    const button = wrapper.find('[data-test-id="create-button"]');
    await button.trigger("click");
    expect(actions.open).toHaveBeenCalled();
  });

  test("При нажатии на кнопку редактировать, срабатывает action редактирования ", async () => {
    const button = wrapper.find('[data-test-id="edit-button"]');
    await button.trigger("click");
    expect(actions.editItem).toHaveBeenCalled();
  });

  test("При нажатии на кнопку удалить, срабатывает action удаления ", async () => {
    const button = wrapper.find('[data-test-id="delete-button"]');
    await button.trigger("click");
    expect(actions.deleteItem).toHaveBeenCalled();
  });

  test("Таблица выводит передеанные данные ", async () => {
    expect(wrapper.html().includes(testProduct.brand)).toBe(true);
    expect(wrapper.html().includes(testProduct.price)).toBe(true);
    expect(wrapper.html().includes(testProduct.name)).toBe(true);
  });

  function _createWrapper() {
    return mount(ProductGrid, {
      mocks: {
        $t: jest.fn()
      },
      store,
      localVue,
      vuetify
    });
  }
});
