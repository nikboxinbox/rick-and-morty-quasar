<template lang="pug">
q-layout 
    q-header
      q-toolbar
        q-btn(flat dense round  aria-label="Menu")
         q-avatar(size="70px" )
          img(src="~assets/rick.png" size="xl")
        

        

        q-toolbar-title Rick and Morty 

    q-page-container
      <router-view />
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

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
div
  background-color: $primary
</style>
