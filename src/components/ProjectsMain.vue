<script>
import { store, api } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return { store };
  },
  props: {},
  methods: {},

  components: { ProjectCard },

  created() {
    axios.get(api.baseUrl + "projects").then(function (response) {
      store.projects = response.data.data;
    });
  },
};
</script>

<template>
  <div class="row row-cols-2 g-3">
    <project-card v-for="project in store.projects" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>
