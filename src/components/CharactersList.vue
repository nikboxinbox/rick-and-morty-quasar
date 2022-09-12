<template lang="pug">
  
.characters-list__cont().q-pa-md.text-white
  q-list.characters-list__list(dark bordered separator style="max-width: 80%")
    q-item.characters-list__item(
      v-for="character in getCharacters"
      :key="character.id"
      ).q-ma-md.bg-grey-10
      q-item-section.characters-list__item__section-avatar(avatar)
        q-avatar(rounded size="180px")
          img(:src="character.image" alt="character.name")
      q-item-section.characters-list__item__section-info
        a(@click.prevent="$router.push({name:'CharacterPage', params:{id: character.id}})") 

          h2.item__section-info__name().q-ma-none.cursor-pointer.text-h6 {{character.name}}
        span.item__section-info__status
          p.status-text().text-subtitle2 {{character.status}}
          q-icon.status-icon(name="fiber_manual_record" :color="character.status === 'Dead'? 'red' : 'green'" size="sm").q-ml-sm
        p.item__section-info__species().text-subtitle2 {{character.species}}
        p.text-subtitle2.flex Episodes:
        .characters-list__item__section-info__episodes
          q-list.item__section-info__episodes__list.flex
              q-item.item__section-info__episodes__list__item(
                v-for="episode in character.episode.slice(0,5)"
                :key="episode"
                )
                a.episode-text-link()
                  q-btn(@click.prevent="$router.push({name:'EpisodePage', params:{id: getEpisodeNumber(episode)}})") {{getEpisodeNumber(episode)}}

  
        
    
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CharacterList ",
  computed: { ...mapGetters(["getCharacters"]) },
  methods: {
    ...mapMutations(["setSingleCharacter"]),
    getEpisodeNumber(episodeUrl) {
      return episodeUrl.split("/").slice(-1).join();
    },
  },
};
</script>
<style lang="stylus">
.characters-list__cont
  display flex
  justify-content center

.characters-list__item
  border-radius 10px

.item__section-info__status
  display: flex

.status-icon
  align-self center

.status-text
  align-self center

.episode-text-link
  font-size 16px
</style>
