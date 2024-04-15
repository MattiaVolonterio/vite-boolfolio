<script>
import { store, api } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";
import PaginationComp from "./ui/PaginationComp.vue";

export default {
  data() {
    return { store };
  },
  props: {},
  methods: {
    fetchProjects(endpoint = api.baseUrl + "projects") {
      axios.get(endpoint).then(function (response) {
        store.projects = response.data.data;
        store.projectsLinks = response.data.links;
      });
    },
  },

  components: { ProjectCard, PaginationComp },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-cols-3 g-3 mb-5">
    <project-card v-for="project in store.projects" :project="project" />
  </div>

  <pagination-comp :links="store.projectsLinks" @change-page="fetchProjects" />
</template>

<style lang="scss" scoped></style>
