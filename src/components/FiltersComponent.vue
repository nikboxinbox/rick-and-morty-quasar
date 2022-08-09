<template lang="pug">

.filter-name.q-pa-md
  q-input(v-model="search" filled type="search" placeholder ="Name" color="teal")
    template(v-slot:append)
      q-icon(name="close").cursor-pointer
      q-icon(name="search").cursor-pointer
        
.filter-status
  div.q-pa-md()
    q-btn-toggle(
      v-model="model"
      toggle-color="teal"
      :options="statusOptions"
      )    
</template>
<script>
export default {
  data: () => ({
    model: "all",
    statusOptions: [
      { label: "All", value: "all" },
      { label: "Alive", value: "Alive" },
      { label: "Dead", value: "dead" },
      { label: "Unknown", value: "Unknown" },
    ],
  }),
};
</script>
