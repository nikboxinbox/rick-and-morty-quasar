<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "App",

  methods: {
    ...mapActions(["updateData"]),
  },
  async mounted() {
    this.updateData();
    // this.$store;
  },
});
</script>
