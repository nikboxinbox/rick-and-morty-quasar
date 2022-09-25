<template lang="pug">
.filter-name.q-pa-md
  q-input(v-model="searchName" ref="inputFilter" @keyup.enter="filtration" filled type="search" placeholder ="Name" color="teal")
    template(v-slot:append)
      q-icon(name="search" @click="filtration" ).cursor-pointer
      q-icon(name="close"  v-if="searchName!==''" @click="clearSearch").cursor-pointer
.filter-status
  div.q-pa-md()
    q-btn-toggle(
      v-model="status"
      toggle-color="teal"
      :options="statusOptions"
      )
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    status: "All",
    statusOptions: [
      { label: "All", value: "All" },
      { label: "Alive", value: "Alive" },
      { label: "Dead", value: "dead" },
      { label: "Unknown", value: "Unknown" },
    ],
    searchName: "",
  }),

  watch: {
    status() {
      this.filtration();
    },
    getErrorMessageFromApi(val) {
      // Seach name error message
      if (val === "There is nothing here" && this.getFilterName !== "") {
        const message = `По вашему запросу с именем: ${this.getFilterName} никого не найдено!`;
        this.showNotif(message);
        this.searchName = "";
        this.filtration();
      }
    },
  },
  computed: {
    ...mapGetters(["getStatus", "getFilterName", "getErrorMessageFromApi"]),
  },
  methods: {
    ...mapActions(["updateFilters"]),
    filtration() {
      this.updateFilters({ status: this.status, searchName: this.searchName });
    },
    clearSearch() {
      this.searchName = "";
      this.filtration();
    },
    showNotif(message) {
      this.$q.notify({
        message: message,
        color: "red",
        position: "top",
      });
    },
  },
  mounted() {
    this.status = this.getStatus;
    this.searchName = this.getFilterName;
    this.$refs.inputFilter.$el.focus();
  },
};
</script>
