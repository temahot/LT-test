<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ modalTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            v-for="item in fieldsNames"
            :key="item.artnumber"
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="editedItem[`${item}`]"
              :label="$t(`product_headers.${item}`)"
              :placeholder="$t(`product_headers.${item}`)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch({ type: "close" });
    },
    save() {
      this.$store.dispatch({ type: "save" });
    }
  },
  computed: {
    fieldsNames() {
      return Object.keys(this.editedItem || {});
    },
    modalTitle() {
      return this.$store.getters.editedIndex === -1
        ? this.$t("modals.create")
        : this.$t("modals.edit");
    },
    editedItem() {
      return this.$store.getters.editedItem;
    }
  }
};
</script>
