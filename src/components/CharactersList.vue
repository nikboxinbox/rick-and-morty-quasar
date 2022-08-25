<template lang="pug">
.characters-list__cont().q-pa-md.text-white
  q-list.characters-list__list(dark bordered separator style="max-width: 80%")
    q-item.characters-list__item(
      v-for="character in allCharacters"
      :key="character.id"
      ).q-ma-md.bg-grey-10
      q-item-section(avatar)
        q-avatar(rounded size="200px")
          img(:src="character.image" alt="character.name")
      q-item-script.characters-list__item__section-info
        a 
          h2.sexion-info__name().cursor-pointer.text-h6 {{character.name}}

    
</template>
<script>
// TODO:
// - Заполнить инфой айтем полностью
// - Дальше продумать постраничный вывод инфинити скролл и фильтрацию

import { mapGetters } from "vuex";
export default {
  name: "CharacterList ",
  computed: mapGetters(["allCharacters"]),
};
</script>
<style lang="stylus">
.characters-list__cont
  display flex
  justify-content center

.characters-list__item
  border-radius 10px
</style>
