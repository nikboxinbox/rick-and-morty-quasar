<template lang="pug">
q-page(v-if="episode").page-episode-card
  div.container-episode-card
    //- p ASSSSSSSSSSSSSSSSSs
    q-card.episode-card
      //- pre {{character}}
      .episode-card__main-section
        h4.character-card__name().q-pa-none {{episode.name}}
        h5.character-card__species.q-pa-none Premiere date: {{episode.air_date}}
        .episode-card__section-list
          q-list.episode-card__list-images-characters
            q-item.episode-card__item-image-character(
              v-for="character in episode.characters"
              :key="character.id"
              color="white"
              ) {{  character}}
          //- h4.character-card__location {{character.location.name}}

        //- q-img.col-5(:src="character.image")
        //- q-card-section.character-card__section()
          

      q-separator 

 


</template>

<script>
// import { onMounted } from "vue";
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
    ...mapGetters(["getSingleEpisode"]),
    episode() {
      return this.getSingleEpisode;
    },
    // imagesCharacters(){

    // }
  },

  methods: {
    ...mapActions(["fetchSingleEpisode"]),
    // getCharactersImages(character) {
    //   debugger;
    //   const charactersIds = characters.map((character) => {
    //     character.split("/").slice(-1).join();
    //   });
    //   debugger;
    //   fetchMultipleCharactersImages(charactersIds);
    // },
  },
  async created() {
    await this.fetchSingleEpisode(this.$route.params.id);
    // this.character = this.getSingleCharacter;
  },
};
</script>
<style lang="stylus">
.page-episode-card
  padding-top 100px
  height 100%
  width 100%
.container-episode-card
  width 100%
  height 100%
.episode-card
  max-width 80%
  margin auto
  background #212121
.episode-card__main-section
  color white

.episode-card__section
  color white
</style>
