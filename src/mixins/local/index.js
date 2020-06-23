export const localMixin = {
  methods: {
    getCurrentRouteName: function() {
      return this.$route.name;
    }
  }
};
