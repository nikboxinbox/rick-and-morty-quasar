<template lang="pug">
q-page(v-if="character").page-character-card
  div.container-character-card
    //- p ASSSSSSSSSSSSSSSSSs
    q-card.character-card
      //- pre {{character}}
      q-card-section(horizontal).character-card__main-section
        q-img.col-5(:src="character.image")
        q-card-section.character-card__section()
          h3.character-card__name().q-pa-none {{character.name}}
          h4.character-card__species {{character.species}}
          h4.character-card__location {{character.location.name}}


      q-separator 

 


</template>

<script>
import { onMounted } from "vue";
// import characters from "src/store/modules/characters";
import { mapActions, mapGetters } from "vuex";

// Components
// import CharacterList from "../components/CharactersList.vue";
// import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  components: {
    // CharacterList,
    // PaginationComponent,
  },
  name: "CharacterPage",
  data: () => ({
    // character: null,
  }),
  computed: {
    ...mapGetters(["getSingleCharacter"]),
    character() {
      // if (this.getSingleCharacter !== null) {
      //   return this.getSingleCharacter;
      // }

      // this.updateSingleCharacter(this.$route.params.id);
      return this.getSingleCharacter;
    },
  },

  methods: {
    ...mapActions(["updateSingleCharacter"]),
  },
  async created() {
    await this.updateSingleCharacter(this.$route.params.id);
    // this.character = this.getSingleCharacter;
  },
};
</script>
<style lang="stylus">
.page-character-card
  padding-top 100px
  height 100%
  width 100%
.container-character-card
  width 100%
  height 100%
.character-card
  max-width 80%
  margin auto
  background #212121
.character-card__section
  color white
</style>
