<template>
  <v-data-table
    :headers="headers"
    :items="products"
    sort-by="brand"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              data-test-id="create-button"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2" size="large">mdi-plus</v-icon
              >{{ $t("buttons.new") }}
            </v-btn>
          </template>
          <ProductEditModal />
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn icon data-test-id="edit-button" @click="editItem(item)">
        <v-icon small>
          mdi-pencil
        </v-icon>
      </v-btn>
      <v-btn icon data-test-id="delete-button" @click="deleteItem(item)">
        <v-icon small>
          mdi-delete
        </v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { settings } from "./settings/grid";
import ProductEditModal from "./components/ProductEditModal";
export default {
  components: {
    ProductEditModal
  },
  computed: {
    headers() {
      return settings.headers.map(elem => {
        return {
          text: elem.text ? this.$t(`product_headers.${elem.text}`) : "",
          value: elem.value
        };
      });
    },
    editedIndex() {
      return this.$store.getters.editedIndex;
    },
    products() {
      return this.$store.getters.products;
    },
    dialog: {
      get: function() {
        return this.$store.getters.dialog;
      },
      set: function(val) {
        if (val) {
          this.$store.dispatch({ type: "open" });
          return;
        }
        this.$store.dispatch({ type: "close" });
      }
    }
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch({ type: "deleteItem", item });
    },
    editItem(item) {
      this.$store.dispatch({ type: "editItem", item });
    }
  }
};
</script>
