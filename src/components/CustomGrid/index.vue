<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            v-for="item in Object.keys(editedItem)"
            :key="item.artnumber"
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="editedItem[`${item}`]"
              :label="`${item}`"
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
  props: {
    title: String
  },
  methods: {
    close() {
      this.$store.dispatch({ type: "close" });
    },
    save() {
      this.$store.dispatch({ type: "save" });
    }
  },
  computed: {
    editedItem() {
      return this.$store.getters.editedItem;
    }
  }
};
</script>
