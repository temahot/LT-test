export const globalMixin = {
  methods: {
    getCurrentRouteName() {
      return this.$route.name;
    }
  }
};
