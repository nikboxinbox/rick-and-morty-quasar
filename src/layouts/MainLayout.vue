<template lang="pug">
q-layout
  q-header.main-layout__header.text-dark
    q-page-sticky(position="top" expand ).bg-accent
      q-toolbar.main-layout__tool-bar
        .container-btn
          q-btn(
            v-show="this.$route.path !== '/'"
            @click.prevent="$router.go(-1)"
            icon="arrow_back"
            color="white"
            size="lg"
            flat dense round

            )
        //- q-btn(
        //-   @click.prevent="goHome"
        //-   color="white"
        //-   flat dense round
        //-   aria-label="Menu"
        //-   )
        q-avatar(size="60px" )
          img(src="~assets/rick.png" size="xl")
        q-toolbar-title Rick and Morty 
        FiltersComponent(v-if="this.$route.path === '/'")

  q-page-container

    <router-view />
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapMutations } from "vuex";

//Components
import FiltersComponent from "src/components/FiltersComponent.vue";
export default defineComponent({
  name: "MainLayout",
  components: {
    FiltersComponent,
  },
  methods: {
    ...mapActions(["updateData"]),
    ...mapMutations(["setPage", "setStatus", "setFilterName"]),
    async goHome() {
      await this.setPage(1);
      await this.setStatus("All");
      await this.setFilterName("");
      await this.updateData();
      this.$router.push("/");
    },
  },
});
</script>
<style lang="stylus">
.main-layout__tool-bar
  background-color #ff9800
  height: 60px
.container-btn
  width 44px

.q-toolbar__title
  font-size: 28px
  color: white
  font-weight: normal
</style>
