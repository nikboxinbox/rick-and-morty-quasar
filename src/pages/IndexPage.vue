<template lang="pug">
q-page
  .characters__list {{allCharacters}}
      
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "IndexPage",
  computed: mapGetters(["allCharacters"]),
  methods: mapActions(["getAllCharacters"]),
  async mounted() {
    this.getAllCharacters();
  },
});
</script>
