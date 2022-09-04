<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "App",

  methods: {
    ...mapActions(["fetchData"]),
  },
  async mounted() {
    this.fetchData();
    // this.$store;
  },
});
</script>
