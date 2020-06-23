import { types } from "./types";

export const mutations = {
  [types.EDIT_ITEM]: (state, data) => {
    state.editedIndex = data.editedIndex;
    state.editedItem = data.editedItem;
    state.dialog = data.dialog;
  },
  [types.DELETE_ITEM]: (state, newProducts) => {
    state.products = newProducts;
  },
  [types.SAVE]: (state, newProducts) => {
    state.products = newProducts;
  },
  [types.OPEN]: (state, data) => {
    state.dialog = data;
  },
  [types.CLOSE]: (state, data) => {
    state.editedIndex = data.editedIndex;
    state.editedItem = data.editedItem;
    state.dialog = data.dialog;
  }
};
