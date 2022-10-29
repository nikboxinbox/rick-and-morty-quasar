<template lang="pug">
q-page(v-if="getSingleCharacter").page-character-card
  div.container-character-card
    q-card.character-card
      q-card-section(horizontal).character-card__main-section
        q-img.col-5(:src="getSingleCharacter.image")
        q-card-section.character-card__section()
          h3.character-card__name().q-pa-none {{getSingleCharacter.name}}
          h4.character-card__species {{getSingleCharacter.species}}
          h4.character-card__location {{getSingleCharacter.location.name}}

      q-separator 

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterPage",

  computed: {
    ...mapGetters(["getSingleCharacter"]),
    character() {
      return this.getSingleCharacter;
    },
  },

  methods: {
    ...mapActions(["updateSingleCharacter"]),
  },
  async created() {
    await this.updateSingleCharacter(this.$route.params.id);
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
