<template lang="pug">
q-page(v-if="episode").page-episode-card
  div.container-episode-card
    //- p ASSSSSSSSSSSSSSSSSs
    q-card.episode-card
      //- pre {{character}}
      .episode-card__main-section.q-pt-sm
        h4.character-card__name() {{episode.name}}
        h5.character-card__species Premiere date: {{episode.air_date}}
        .episode-card__section-list(v-if="episode.charactersEpisode").flex
          .episode-card__item-character(
            v-for="character in episode.charactersEpisode"
            :key="character.id"
            color="white"
            ).q-ma-xs 
            img.episode-card__item-character__image(
              :src="character.image"
              @click="$router.push({name:'CharacterPage', params:{id: character.id}})"
              )
                              

            //- item
            //-   pre {{episode}}
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
    ...mapActions(["updateSingleEpisode"]),
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
    await this.updateSingleEpisode(this.$route.params.id);
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
  text-align center
.episode-card__section
  color white
 .episode-card__section-list
  width 100%
  justify-content center
</style>
