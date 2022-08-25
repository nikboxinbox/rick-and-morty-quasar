<template lang="pug">
q-page
  .characters__list {{allCharacters}}
    CharacterList
    
      
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Components
import CharacterList from "../components/CharactersList.vue";

export default {
  components: {
    CharacterList,
  },
  name: "IndexPage",
  computed: mapGetters(["allCharacters"]),
  methods: mapActions(["getAllCharacters"]),
  async mounted() {
    this.getAllCharacters();
  },
};
</script>
