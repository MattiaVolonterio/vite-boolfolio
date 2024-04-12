<script>
import { store, api } from "../store";
import axios from "axios";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return { store };
  },
  props: {},
  methods: {
    fetchProject(endpoint = api.baseUrl + "projects") {
      axios.get(endpoint).then(function (response) {
        store.projects = response.data.data;
        store.projectsLinks = response.data.links;
      });
    },
  },

  components: { ProjectCard },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <div class="row row-cols-2 g-3 mb-5">
    <project-card v-for="project in store.projects" :project="project" />
  </div>

  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" v-for="link in store.projectsLinks">
        <a
          :class="{
            active: link.active,
            disabled: !link.url,
          }"
          class="page-link"
          href="#"
          v-html="link.label"
          @click="fetchProject(link.url)"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
