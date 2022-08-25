<template lang="pug">
q-layout
  q-header.main-layout__header.text-dark
    q-page-sticky(position="top" expand ).bg-accent
      q-toolbar.main-layout__tool-bar
        q-btn(flat dense round  aria-label="Menu")
          q-avatar(size="50px" )
            img(src="~assets/rick.png" size="xl")
        q-toolbar-title Rick and Morty 
        FiltersComponent

  q-page-container

    <router-view />
</template>

<script>
import { defineComponent, ref } from "vue";
//Components
import FiltersComponent from "src/components/FiltersComponent.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    FiltersComponent,
  },

  setup() {
    // const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
    };
  },
});
</script>
<style lang="stylus">
.main-layout__tool-bar
  background-color #ff9800
  height: 60px
.q-toolbar__title
  font-size: 28px
  color: white
  font-weight: normal
</style>
