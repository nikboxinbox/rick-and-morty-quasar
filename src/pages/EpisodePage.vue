<template lang="pug">
q-page(v-if="episode").page-episode-card
  div.container-episode-card
    q-card.episode-card
      .episode-card__main-section.q-pt-sm
        h4.character-card__name() {{episode.name}}
        h5.character-card__species Premiere date: {{episode.air_date}}
        .episode-card__section-list(v-if="episode.charactersEpisode").flex
          .episode-card__item-character(
            v-for="character in episode.charactersEpisode"
            :key="character.id"
            @click="$router.push({name:'CharacterPage', params:{id: character.id}})"
            color="white"
            ).cursor-pointer.q-ma-xs 
            img.episode-card__item-character__image(
              :src="character.image"
              )

      q-separator
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CharacterPage",

  computed: {
    ...mapGetters(["getSingleEpisode"]),
    episode() {
      return this.getSingleEpisode;
    },
  },

  methods: {
    ...mapActions(["updateSingleEpisode"]),
  },
  async created() {
    await this.updateSingleEpisode(this.$route.params.id);
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
