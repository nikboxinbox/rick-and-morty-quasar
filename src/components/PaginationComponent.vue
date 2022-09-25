<template lang="pug">
.q-pa-lg.flex.flex-center
  q-pagination(
    v-model="currentPage"
	  :max="getTotalPage"
    :max-pages="3"
    size="20px"
    color="amber-9"
    )
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "PaginationComponent",
  data: () => ({
    currentPage: 1,
  }),
  watch: {
    currentPage(val) {
      this.updatePage(val);
    },
    getPage(val) {
      this.currentPage = val;
    },
  },
  computed: {
    ...mapGetters(["getTotalPage", "getPage"]),
  },
  methods: {
    ...mapActions(["updatePage"]),
  },
  mounted() {
    this.currentPage = this.getPage;
  },
};
</script>
