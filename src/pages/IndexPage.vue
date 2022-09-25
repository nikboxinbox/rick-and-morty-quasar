<template lang="pug">
q-page
  .characters__list 
    CharacterList
  q-page-sticky.pagination-container(position="bottom" :offset="[0, 18]")
    PaginationComponent

</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
// Components
import CharacterList from "../components/CharactersList.vue";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  components: {
    CharacterList,
    PaginationComponent,
  },
  name: "IndexPage",
  computed: {
    ...mapGetters([
      "getCharacters",
      "getErrorMessageFromApi",
      "getFilterName",
      "getStatus",
    ]),
  },
  // watch: {
  //   getErrorMessageFromApi(val) {
  //     // Seach name error message
  //     if (val === "There is nothing here" && this.getFilterName !== "") {
  //       const message = `По вашему запросу с именем: ${this.getFilterName} никого не найдено!`;
  //       this.showNotif(message);
  //       this.$root.$emit("CLEAR_SEARCH");
  //     }
  //   },
  // },
  methods: {
    ...mapMutations(["setFilterName"]),
    ...mapActions(["updateFilters"]),
    // showNotif(message) {
    //   this.$q.notify({
    //     message: message,
    //     color: "red",
    //     position: "top",
    //   });
    // },
  },

  mounted() {},
};
</script>
<style lang="stylus">
q-page
  padding-top 100px
</style>
