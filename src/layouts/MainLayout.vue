<template>
  <q-layout view="lHh Lpr lFf" color="orange">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title> Rick and Morty </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
