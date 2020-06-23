import { types } from "./types";
export const actions = {
  editItem: (context, data) => {
    let newData = {
      editedIndex: context.state.products.indexOf(data.item),
      editedItem: Object.assign({}, data.item),
      dialog: true
    };
    context.commit(types.EDIT_ITEM, newData);
  },
  deleteItem: (context, data) => {
    const index = context.state.products.indexOf(data.item);
    let newProducts = context.state.products;
    confirm("Вы действительно хотите удалить этот продукт") &&
      newProducts.splice(index, 1);
    context.commit(types.DELETE_ITEM, newProducts);
  },
  open: context => {
    context.commit(types.OPEN, true);
  },
  close: context => {
    let newData = {
      editedIndex: -1,
      editedItem: Object.assign({}, context.state.defaultItem),
      dialog: false
    };
    context.commit(types.CLOSE, newData);
  },
  save: context => {
    let newProducts = context.state.products;
    const editedIndex = context.state.editedIndex;
    let editedItem = context.state.editedItem;
    if (editedIndex > -1) {
      Object.assign(newProducts[editedIndex], editedItem);
      context.commit(types.SAVE, newProducts);
    } else {
      newProducts.push(editedItem);
      context.commit(types.SAVE, newProducts);
    }
    context.dispatch({ type: "close" });
  }
};
