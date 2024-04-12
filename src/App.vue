<script>
import AppHeader from "./components/AppHeader.vue";
import ProjectsMain from "./components/ProjectsMain.vue";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },

  components: { AppHeader, ProjectsMain },
  props: {},
  methods: {},
};
</script>

<template>
  <app-header :title="title" />
  <div class="container my-5">
    <projects-main />
  </div>
</template>

<style lang="scss">
@use "/src/scss/general.scss";
</style>
